import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepProps } from '../types';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function Step6ThankYou({ leadData, setLeadData, setStep }: StepProps) {
    const t = useTranslations('services.steps.step6');
    const tStep2 = useTranslations('services.steps.step2');
    
    // Função para traduzir o serviceType
    const getTranslatedServiceType = () => {
        if (!leadData.category || !leadData.serviceType) {
            return leadData.serviceType || '';
        }
        
        try {
            return tStep2(`services.${leadData.category}.${leadData.serviceType}`);
        } catch {
            // Se a tradução falhar, retorna o serviceType original
            return leadData.serviceType;
        }
    };
    
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
        <section className="w-full mx-auto px-4 py-8 max-w-4xl">
            {/* Header elegante */}
            <div className="text-center mb-12 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 animate-scale-in">
                    <FaCheckCircle className="text-3xl text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {t('title')}
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    {t('description')}
                </p>
            </div>

            {/* Card principal */}
            <Card className="bg-white border border-gray-200 shadow-lg animate-slide-in">
                <CardHeader className="text-center pb-6 border-b border-gray-100">
                    <CardTitle className="text-2xl font-semibold text-gray-900">
                        {t('summary.title')}
                    </CardTitle>
                    <p className="text-gray-600 mt-2">
                        {t('summary.title')}
                    </p>
                </CardHeader>

                <CardContent className="space-y-6 pt-6">
                    {/* Resumo do serviço */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <Label className="text-sm font-medium text-gray-700 mb-2 block">
                                {t('summary.serviceType')}
                            </Label>
                                                         <p className="text-lg font-medium text-gray-900">
                                 {getTranslatedServiceType()}
                             </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <Label className="text-sm font-medium text-gray-700 mb-2 block">
                                {t('summary.projectSize')}
                            </Label>
                            <p className="text-lg font-medium text-gray-900">
                                {leadData.projectSize === "small"
                                    ? t('summary.projectSizes.small')
                                    : leadData.projectSize === "medium"
                                    ? t('summary.projectSizes.medium')
                                    : t('summary.projectSizes.large')}
                            </p>
                        </div>
                    </div>

                    {/* Orçamento */}
                    {(() => {
                        const price = leadData.estimatedPrice ?? 0;
                        const lowerBound = price * 0.8;
                        const upperBound = price * 1.2;

                        return (
                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <Label className="text-lg font-semibold text-gray-900 mb-3 block">
                                    {t('summary.estimatedBudget')}
                                </Label>
                                <div className="bg-white p-4 rounded border border-blue-300">
                                    <p className="text-2xl font-bold text-gray-900 mb-1">
                                        {t('summary.priceRange', {
                                            lowerBound: lowerBound.toLocaleString("pt-BR"),
                                            upperBound: upperBound.toLocaleString("pt-BR")
                                        })}
                                    </p>
                                                                         <p className="text-sm text-gray-600">
                                         {t('estimatedDisclaimer')}
                                     </p>
                                </div>
                            </div>
                        );
                    })()}

                    {/* Informações importantes */}
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div className="flex items-start gap-3">
                            <FaCheckCircle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    {t('nextSteps')}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {t('nextStepsDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="pt-6 border-t border-gray-100">
                    <Button 
                        onClick={resetFunnel} 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 text-base rounded-lg transition-colors duration-200"
                    >
                        <FaArrowRight className="mr-2" />
                        {t('newQuoteButton')}
                    </Button>
                </CardFooter>
            </Card>

            {/* Informação adicional */}
            <div className="text-center mt-8">
                <p className="text-gray-500 text-sm">
                    {t('thankYouMessage')}
                </p>
            </div>
        </section>
    );
} 