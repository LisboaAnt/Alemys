"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { locales } from '@/config'
import { useState } from 'react'
import { FaGlobe } from "react-icons/fa";


export function NavigationMenuDemo() {
    const t = useTranslations('nav');
    const pathname = usePathname();
    const router = useRouter();
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);

    // Função para trocar o idioma
    const handleLanguageChange = (locale: string) => {
        // Extrair o locale atual do pathname
        const segments = pathname.split('/');
        // O primeiro segmento após a barra é o locale atual
        segments[1] = locale;
        // Reconstruir o pathname com o novo locale
        const newPath = segments.join('/');
        router.push(newPath);
        setShowLanguageMenu(false);
    };

    return (
        <div className="flex justify-center bg-gray-50 p-5 w-full">
            <div className="w-7xl justify-between flex">

                <div className="esq flex gap-2 items-center justify-center h-10">
                    <Image className="w-15 h-15" src="/imgs/logo2.png" alt="logo" width={200} height={200} />
                    <h1 className=" text-2xl text-blue-950 font-eastman-roman tracking-[0.15em]">ALÉMSY</h1> 
                </div>

                <div className="flex gap-4 items-center justify-center h-10 ">
                    <Link href="/">
                        {t('home')}
                    </Link>
                    <Link href="/">
                        {t('about')}
                    </Link>
                    <Link href="/">
                        {t('services')}
                    </Link>
                    <Link href="/">
                        {t('contact')}
                    </Link>
                    <div className="relative">
                        <Button 
                            className="w-25"
                            variant="outline" 
                            size="sm"
                            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                        >
                            <FaGlobe />
                            {t('language')}
                        </Button>
                        {showLanguageMenu && (
                            <div className="absolute bg-gray-50 top-full mt-1 right-0 rounded-md shadow-lg z-50">
                                {locales.map((locale) => (
                                    <button
                                        key={locale}
                                        onClick={() => handleLanguageChange(locale)}
                                        className="block px-4 py-2 text-sm  hover:bg-gray-200 w-full text-left rounded-md"
                                    >
                                        {locale === 'en' ? 'English' : 
                                        locale === 'pt' ? 'Português' : 
                                        locale === 'es' ? 'Español' : 
                                        'Deutsch'}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


