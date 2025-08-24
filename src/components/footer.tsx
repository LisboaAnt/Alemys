'use client'
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Separator } from "./ui/separator";

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="text-center bottom-0 left-0 w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 px-4 md:px-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:gap-10 gap-5">
          <div className="w-full flex justify-center items-center">
            <Image className="w-auto h-8 md:h-10 filter brightness-0 invert" src="/alemsys.svg" alt="logo" width={200} height={200} />
          </div>
          <div className="md:w-full flex justify-center gap-5 items-center">
            <Link href="https://www.instagram.com/alemsysdigital">
              <Button variant="ghost">
                <FaInstagram/>Instagram
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/company/alémsys-digital">
              <Button variant="ghost">
                <FaLinkedin/>LinkedIn
              </Button>
            </Link>
            <Link href="https://wa.me/5588994412533">
              <Button variant="ghost">
                <FaWhatsapp/>Whatsapp
              </Button>
            </Link>
          </div>
        </div>
        <Separator className="w-full bg-gray-100"/>
        <div className="w-full flex flex-col md:flex-row justify-between md:gap-10 gap-5">
          <div className="flex flex-col items-center w-full md:w-1/2 gap-4">
            <h2 className="text-xl font-semibold font-serif">{t('explore')}</h2>
            <div className="md:w-full w-4/5 flex md:flex-col justify-center items-center gap-2">
              <Link href="/#hero">
                <Button variant="ghost" className="w-full transition-colors">
                  {t('home')}
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" className="w-full transition-colors">
                  {t('services')}
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="ghost" className="w-full transition-colors">
                  {t('contact')}
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/2 gap-4">
            <h2 className="text-xl font-semibold font-serif">{t('contacts')}</h2>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex gap-3">
                <h3 className="text-base font-semibold">{t('address')}:</h3>
                <h4 className="text-base font-normal">{t('addressValue')}</h4>
              </div>
              <div className="flex gap-3">
                <h3 className="text-base font-semibold">{t('email')}:</h3>
                <p
                  className="text-base font-normal"
                >
                  alemsys.digital@gmail.com
                </p>
              </div>
              <div className="flex gap-3">
                <h3 className="text-base font-semibold">{t('phone')}:</h3>
                <p
                  className="text-base font-normal"
                >
                  +55 (88) 99441-2533
                </p>
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