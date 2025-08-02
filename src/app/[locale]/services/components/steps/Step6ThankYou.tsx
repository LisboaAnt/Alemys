import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepProps } from '../types';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';

export default function Step6ThankYou({ leadData, setLeadData, setStep }: StepProps) {
    const t = useTranslations('services.steps.step6');
    const resetFunnel = () => {
        localStorage.removeItem('serviceLeadData');
        setLeadData({
            category: null,
            serviceType: null,
            projectSize: null,
        });
        setStep(1);
    };

    return (
        <section className="w-full mx-auto px-4 py-5 max-w-6xl">
            <div className="my-5 w-full flex items-center gap-5">
                <div className="flex-1 text-center">
                    <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">
                        {t('title')}
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>
            </div>
            
            <Card className="bg-gray-50 max-w-lg mx-auto">
                <CardHeader className='w-full text-center'>
                    <CardTitle>{t('summary.title')}</CardTitle>
                </CardHeader>

                <CardContent className="w-full flex flex-col gap-5">
                    <div className='flex flex-col gap-2'>
                        <Label>{t('summary.serviceType')}</Label>
                        <p>{leadData.serviceType}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label>{t('summary.projectSize')}</Label>
                        <p className='text-md text-gray-800'>
                            {" "}
                            {leadData.projectSize === "small"
                            ? t('summary.projectSizes.small')
                            : leadData.projectSize === "medium"
                            ? t('summary.projectSizes.medium')
                            : t('summary.projectSizes.large')}
                        </p>
                    </div>
                    {(() => {
                        const price = leadData.estimatedPrice ?? 0;
                        const lowerBound = price * 0.8;
                        const upperBound = price * 1.2;

                        return (
                        <div className='flex flex-col gap-2'>
                            <Label>{t('summary.estimatedBudget')}</Label>
                            <p className='text-md text-gray-800'>
                                {t('summary.priceRange', {
                                    lowerBound: lowerBound.toLocaleString("pt-BR"),
                                    upperBound: upperBound.toLocaleString("pt-BR")
                                })}
                            </p>
                        </div>
                        );
                    })()}
                </CardContent>

                <CardFooter>
                    <Button onClick={resetFunnel} className="w-full">
                        {t('newQuoteButton')}
                    </Button>
                </CardFooter>
            </Card>
        </section>
    );
} 