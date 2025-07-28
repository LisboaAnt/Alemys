'use client'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea }  from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ContactForm() {
    const t = useTranslations('contact.right');
    
    return(
        <Card className="w-full md:max-w-2/3 sm:max-w-5/6 bg-gray-50">
            <CardHeader>
                <CardTitle>{t('title')}</CardTitle>
                <CardDescription>{t('description')}</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-5">
                        <div className="grid gap-2">
                            <Label htmlFor="email">{t('email')}</Label>
                            <Input
                                className="bg-white"
                                id="email"
                                type="email"
                                placeholder="example@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">{t('message')}</Label>
                            <Textarea className="bg-white" id="message" placeholder={t('textAreaPlaceholder')} required/>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button type="submit" className="w-full">
                    {t('submit')}
                </Button>
            </CardFooter>
        </Card>
    )
}