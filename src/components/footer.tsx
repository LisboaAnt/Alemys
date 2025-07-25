'use client'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations('footer');
  
  return (
    <footer className="text-center bottom-0 left-0 w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white py-5">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-3">
        <div className="w-full justify-around flex flex-row items-center border-b-1 border-blue-50 pb-5">
          <h1 className="w-1/2 flex justify-center">Logo da Empresa</h1>
          <div className="w-1/2 flex justify-center gap-5">
            <Button variant="ghost"><FaFacebook/>Facebook</Button>
            <Button variant="ghost"><FaInstagram/>Instagram</Button>
            <Button variant="ghost"><FaLinkedin/>LinkedIn</Button>
          </div>
        </div>
        <div className="w-full flex flex-row py-5">
          <div className="w-1/3 flex flex-col gap-5 items-center">
            <h2 className="text-xl font-semibold font-serif">Explore</h2>
            <div className="w-1/3 flex flex-col gap-2">
              <Button variant="ghost">Inicio</Button>
              <Button variant="ghost">Services</Button>
              <Button variant="ghost">Contact Us</Button>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-5 items-center">
            <h2 className="text-xl font-semibold font-serif">Utility Pages</h2>
            <div className="w-1/3 flex flex-col gap-2">
              <Button variant="ghost">Privacidade</Button>
              <Button variant="ghost">Termos de Uso</Button>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-5 items-center">
            <h2 className="text-xl font-semibold font-serif">Contatos</h2>
            <div className="flex flex-col gap-5 items-center">
              <div className="flex gap-5">
                <h3 className="text-base font-semibold">Endereço:</h3>
                <h4 className="text-base font-normal">Rua Fulan de tal</h4>
              </div>
              <div className="flex gap-5">
                <h3 className="text-base font-semibold">Email:</h3>
                <h4 className="text-base font-normal">email@exemplo.com</h4>
              </div>
              <div className="flex gap-5">
                <h3 className="text-base font-semibold">Telefone:</h3>
                <h4 className="text-base font-normal">(00) 00000-0000</h4>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-300">
          {t('copyright')}
        </p>
      </div>
    </footer>
  )
}