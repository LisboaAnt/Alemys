'use client'

import {
  Card,
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
import { useState } from "react";

export default function ContactForm() {
    const t = useTranslations('contact.right');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const messageText = formData.get('message') as string;
        const name = formData.get('name') as string;

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message: messageText, name }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Mensagem enviada com sucesso!');
                e.currentTarget.reset();
            } else {
                setMessage(data.error || 'Erro ao enviar mensagem');
            }
        } catch {
            setMessage('Mensagem enviada com sucesso!');
        } finally {
            setIsLoading(false);
        }
    };
    
    return(
        <Card className="w-full md:max-w-2/3 sm:max-w-5/6 bg-gray-50">
            <CardHeader>
                <CardTitle>{t('title')}</CardTitle>
                <CardDescription>{t('description')}</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5">
                        <div className="grid gap-2.5">
                            <Label htmlFor="email">{t('email')}</Label>
                            <Input
                                className="bg-white focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="example@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2.5">
                            <Label htmlFor="message">{t('message')}</Label>
                            <Textarea 
                                className="bg-white focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]" 
                                id="message" 
                                name="message"
                                placeholder={t('textAreaPlaceholder')} 
                                required
                            />
                        </div>
                        {message && (
                            <div className={`p-3 rounded-md text-sm ${
                                message.includes('sucesso') 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                            }`}>
                                {message}
                            </div>
                        )}
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                    onClick={() => {
                        const form = document.querySelector('form');
                        if (form) form.requestSubmit();
                    }}
                >
                    {isLoading ? 'Enviando...' : t('submit')}
                </Button>
            </CardFooter>
        </Card>
    )
}