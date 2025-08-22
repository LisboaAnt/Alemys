'use client'
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="text-center bottom-0 left-0 w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 px-4 md:px-10">
        <div className="w-full flex flex-col md:flex-row justify-between md:gap-10 gap-5">
          <div className="flex flex-col items-center w-full md:w-1/2 gap-4">
            <h2 className="text-xl font-semibold font-serif">{t('explore')}</h2>
            <div className="md:w-full w-4/5 flex md:flex-col justify-center items-center gap-2">
              <Link href="/#hero">
                <Button variant="ghost" className="w-full hover:bg-blue-800 transition-colors">
                  {t('home')}
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" className="w-full hover:bg-blue-800 transition-colors">
                  {t('services')}
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="ghost" className="w-full hover:bg-blue-800 transition-colors">
                  {t('contact')}
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/2 gap-4">
            <h2 className="text-xl font-semibold font-serif">{t('contacts')}</h2>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex gap-3">
                <h3 className="text-base font-semibold">{t('address')}:</h3>
                <h4 className="text-base font-normal">{t('addressValue')}</h4>
              </div>
              <div className="flex gap-3">
                <h3 className="text-base font-semibold">{t('email')}:</h3>
                <a 
                  href="mailto:alemsys.digital@gmail.com" 
                  className="text-base font-normal hover:text-blue-300 transition-colors"
                >
                  alemsys.digital@gmail.com
                </a>
              </div>
              <div className="flex gap-3">
                <h3 className="text-base font-semibold">{t('phone')}:</h3>
                <a 
                  href="tel:+5569992410109" 
                  className="text-base font-normal hover:text-blue-300 transition-colors"
                >
                  +55 (69) 99241-0109
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-300 text-center">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}