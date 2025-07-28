'use client'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="text-center bottom-0 left-0 w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 px-4 md:px-10">
        
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-b border-blue-50 pb-5 gap-4">
          <h1 className="text-xl md:text-2xl font-bold flex justify-center md:justify-start w-full md:w-1/2">
            Logo da Empresa
          </h1>
          <div className="flex justify-center gap-5 flex-wrap w-full md:w-1/2">
            <Button variant="ghost" className="flex items-center gap-2">
              <FaFacebook />
              <p className="hidden md:block">Facebook</p>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <FaInstagram />
              <p className="hidden md:block">Instagram</p>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <FaLinkedin />
              <p className="hidden md:block">LinkedIn</p>
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col items-center w-full md:w-1/3 gap-4">
            <h2 className="text-xl font-semibold font-serif">Explore</h2>
            <div className="flex flex-col gap-2">
              <Button variant="ghost">Inicio</Button>
              <Button variant="ghost">Services</Button>
              <Button variant="ghost">Contact Us</Button>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/3 gap-4">
            <h2 className="text-xl font-semibold font-serif">Utility Pages</h2>
            <div className="flex flex-col gap-2">
              <Button variant="ghost">Privacidade</Button>
              <Button variant="ghost">Termos de Uso</Button>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/3 gap-4">
            <h2 className="text-xl font-semibold font-serif">Contatos</h2>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex gap-3">
                <h3 className="text-base font-semibold">Endereço:</h3>
                <h4 className="text-base font-normal">Rua Fulan de tal</h4>
              </div>
              <div className="flex gap-3">
                <h3 className="text-base font-semibold">Email:</h3>
                <h4 className="text-base font-normal">email@exemplo.com</h4>
              </div>
              <div className="flex gap-3">
                <h3 className="text-base font-semibold">Telefone:</h3>
                <h4 className="text-base font-normal">(00) 00000-0000</h4>
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