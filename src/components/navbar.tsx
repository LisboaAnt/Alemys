"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { locales } from '@/config'
import { useState, useEffect } from 'react'
import { FaGlobe } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export function NavigationMenuDemo() {
    const t = useTranslations('nav');
    const pathname = usePathname();
    const router = useRouter();
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Verificar se é dispositivo móvel
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

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
        setMobileMenuOpen(false);
    };

    // Fechar menu ao clicar em um link
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div id="inicio" className="flex justify-center bg-gradient-to-r from-blue-900 to-blue-950 p-5 w-full text-white">
            <div className="w-full max-w-7xl justify-between flex flex-wrap">
                <div className="flex justify-between w-full md:w-auto">
                    <Link href="/" className="flex gap-2 items-center justify-center h-10">
                        <Image className="w-auto h-8 md:h-10" src="/imgs/logo2.png" alt="logo" width={200} height={200} />
                        <h1 className="text-xl md:text-2xl text-white font-eastman-roman tracking-[0.15em]">ALÉMSY</h1> 
                    </Link>
                    
                    {/* Botão do menu mobile */}
                    <button 
                        className="md:hidden text-white text-2xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Menu de navegação - visível em desktop ou quando aberto em mobile */}
                <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-5 items-start md:items-center mt-4 md:mt-0`}>
                    <Link href="/" onClick={handleLinkClick}>
                        <Button variant="ghost" className="w-full text-left justify-start md:justify-center">{t('home')}</Button>
                    </Link>
                    <Link href="/" onClick={handleLinkClick}>
                        <Button variant="ghost" className="w-full text-left justify-start md:justify-center">{t('about')}</Button>
                    </Link>
                    <Link href="/services" onClick={handleLinkClick}>
                        <Button variant="ghost" className="w-full text-left justify-start md:justify-center">{t('services')}</Button>
                    </Link>
                    <Link href="/#contact" onClick={handleLinkClick}>
                        <Button variant="ghost" className="w-full text-left justify-start md:justify-center">{t('contact')}</Button>
                    </Link>
                    <div className="relative text-(--foreground) w-full md:w-auto">
                        <Button 
                            className="w-full bg-accent md:w-auto text-(--foreground)"
                            variant="outline" 

                            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                        >
                            <FaGlobe className="mr-1" />
                            {t('language')}
                        </Button>
                        {showLanguageMenu && (
                            <div className="absolute bg-gray-50 top-full mt-1 left-0 md:right-0 md:left-auto rounded-md shadow-lg z-50 w-full md:w-auto">
                                {locales.map((locale) => (
                                    <button
                                        key={locale}
                                        onClick={() => handleLanguageChange(locale)}
                                        className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left rounded-md"
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


