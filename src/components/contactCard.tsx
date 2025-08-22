import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { PiHouseLineFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

import { useTranslations } from "next-intl";

export default function ContactCard() {
    const t = useTranslations('contact.left');

  return (
    <Card className="w-full md:max-w-2/3 sm:max-w-5/6 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold text-blue-950">
          {t('title')}
        </CardTitle>
        <CardDescription className="text-base font-normal text-(--foreground)">
          {t('description')}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
            <Button className="bg-blue-950 hover:bg-blue-950 cursor-default">
                <PiHouseLineFill/>
            </Button>
          <div>
            <Label className="text-sm text-blue-950">{t('address')}</Label>
            <p className="text-base text-foreground">Av. Araújo Lima 1348 Russas - CE</p>
          </div>
        </div>
        <div className="w-full flex gap-5 items-center">
          <Button className="bg-blue-950 hover:bg-blue-950 cursor-default">
            <IoMdMail className="w-5 h-5" />
          </Button>
          <div>
            <Label className="text-sm text-blue-950">{t('email')}</Label>
            <p className="text-base text-foreground">alemsys.digital@gmail.com</p>
          </div>
        </div>
        <div className="w-full flex gap-5 items-center">
          <Button className="bg-blue-950 hover:bg-blue-950 cursor-default">
            <FaPhoneVolume className="w-5 h-5" />
          </Button>
          <div>
            <Label className="text-sm text-blue-950">{t('phone')}</Label>
            <p className="text-base text-foreground">+55 (69) 99241-0109</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}