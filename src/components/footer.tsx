'use client'

import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations('footer');
  
  return (
    <footer className="bottom-0 left-0 w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white p-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          {t('copyright')}
        </p>

        <div className="flex gap-5">
          <Button variant="ghost">
            {t('terms')}
          </Button>
          <Button variant="ghost">
            {t('privacy')}
          </Button>
          <Button variant="ghost">
            {t('contact')}
          </Button>
        </div>
      </div>
    </footer>
  )
}