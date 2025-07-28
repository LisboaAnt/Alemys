import {getRequestConfig} from 'next-intl/server';
import {locales} from '../config';

export default getRequestConfig(async ({requestLocale}) => {
    // Obter o locale da requisição
    const locale = await requestLocale;
    
    // Verificar se o locale é válido
    if (!locale || !locales.includes(locale as typeof locales[number])) {
        return {
            locale: 'en',
            messages: (await import(`../messages/en.json`)).default,
        };
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
}); 