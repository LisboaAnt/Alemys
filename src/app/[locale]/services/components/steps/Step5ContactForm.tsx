import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StepProps } from '../types';
import { submitLeadData } from '../utils';
import BackButton from '../backButton';
import { useTranslations } from 'next-intl';

export default function Step5ContactForm({ leadData, setLeadData, setStep }: StepProps) {
    const t = useTranslations('services.steps.step5');
    const handleSubmitContact = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const updatedLeadData = {
            ...leadData,
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        };

        setLeadData(updatedLeadData);
        
        // Enviar dados para o backend
        const success = await submitLeadData(updatedLeadData);
        
        if (success) {
            setStep(6);
        } else {
            // TODO: Tratar erro de envio
            alert("Erro ao enviar dados. Tente novamente.");
        }
    };

        return (
        <section className="w-full mx-auto px-4 py-5 max-w-6xl">
            <div className="my-5 w-full flex items-center gap-5">
                <BackButton onClick={() => setStep(4)} />
                <div className="flex-1 text-center">
                    <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">
                        {t('title')}
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>
            </div>

            <p className="text-3xl font-bold text-blue-600 mb-6 text-center">
                {(() => {
                    const price = leadData.estimatedPrice ?? 0;
                    const lowerBound = price * 0.7;
                    const upperBound = price * 1.3;

                    return (
                        <>
                        <p>{t('priceRange', { 
                            lowerBound: lowerBound.toLocaleString('pt-BR'), 
                            upperBound: upperBound.toLocaleString('pt-BR') 
                        })}</p>
                        </>
                    );
                })()}
            </p>
            <p className="text-md text-gray-600 mb-8 text-center">
                {t('disclaimer')}
            </p>
            
            <Card className="w-full max-w-5/6 md:max-w-4/6 bg-gray-50 mx-auto">
                <CardHeader>
                    <CardTitle>{t('contact.title')}</CardTitle>
                    <CardDescription>
                        {t('contact.description')}
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmitContact}>
                    <div className="flex flex-col gap-5">
                        <div className="grid gap-2">
                        <Label htmlFor="name">{t('contact.fields.name')}</Label>
                        <Input
                            className="bg-white"
                            id="name"
                            name="name"
                            required
                            placeholder={t('contact.fields.namePlaceholder')}
                            defaultValue={leadData.name || ""}
                        />
                        </div>

                        <div className="grid gap-2">
                        <Label htmlFor="email">{t('contact.fields.email')}</Label>
                        <Input
                            className="bg-white"
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder={t('contact.fields.emailPlaceholder')}
                            defaultValue={leadData.email || ""}
                        />
                        </div>

                        <div className="grid gap-2">
                        <Label htmlFor="phone">{t('contact.fields.phone')}</Label>
                        <Input
                            className="bg-white"
                            id="phone"
                            name="phone"
                            placeholder={t('contact.fields.phonePlaceholder')}
                            defaultValue={leadData.phone || ""}
                        />
                        </div>

                        <div className="grid gap-2">
                        <Label htmlFor="message">{t('contact.fields.message')}</Label>
                        <Textarea
                            className="bg-white"
                            id="message"
                            name="message"
                            placeholder={t('contact.fields.messagePlaceholder')}
                            defaultValue={leadData.message || ""}
                        />
                        </div>
                    </div>

                    <Button type="submit" className="mt-5 w-full bg-blue-900 text-white hover:bg-blue-950">
                        {t('contact.submitButton')}
                    </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
} 