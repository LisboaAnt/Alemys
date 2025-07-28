import createMiddleware from 'next-intl/middleware';
import {locales} from './config';

export default createMiddleware({
    locales,
    defaultLocale: 'pt',
    // Adicionar barra no final para garantir que as rotas sejam correspondidas corretamente
    localePrefix: 'always'
});

export const config = {
    // Matcher configurado para ignorar rotas estáticas como imagens, fontes, etc.
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};