import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepProps, LeadDataUpdate, LeadData } from '../types';
import { calculatePriceAdjustment } from '../utils';
import BackButton from '../backButton';
import { useTranslations } from 'next-intl';

export default function Step4ProjectDetails({ leadData, setLeadData, setStep }: StepProps) {
    const t = useTranslations('services.steps.step4');
    
    const updateProjectDetails = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
                // Campos comuns
        let updateData: LeadDataUpdate = { ...leadData };
        
        // Campos específicos baseados na categoria
        if (leadData.category === 'new') {
        const clientCount = parseInt(formData.get('clientCount') as string) || 0;
        const productCount = parseInt(formData.get('productCount') as string) || 0;
        const pageCount = parseInt(formData.get('pageCount') as string) || 0;
        const companySize = formData.get('companySize') as string;
        
            updateData = {
                ...updateData,
            clientCount,
            productCount,
            pageCount,
                companySize
            };
            
            // Ajuste de preço para projetos novos
            const priceAdjustment = calculatePriceAdjustment(clientCount, productCount, pageCount, companySize);
            const baseEstimate = leadData.estimatedPrice || 5000;
            updateData.estimatedPrice = Math.round(baseEstimate * priceAdjustment);
            
        } else if (leadData.category === 'maintenance') {
            const currentComplexity = formData.get('currentComplexity') as string;
            const affectedFunctionalities = parseInt(formData.get('affectedFunctionalities') as string) || 0;
            const urgencyLevel = formData.get('urgencyLevel') as string;
            const hasDocumentation = formData.get('hasDocumentation') as string;
            
            updateData = {
                ...updateData,
                currentComplexity,
                affectedFunctionalities,
                urgencyLevel,
                hasDocumentation
            };
            
            // Ajuste de preço para manutenção
            let priceAdjustment = 1;
            if (currentComplexity === 'alta') priceAdjustment += 0.4;
            else if (currentComplexity === 'media') priceAdjustment += 0.2;
            if (affectedFunctionalities > 5) priceAdjustment += 0.3;
            if (urgencyLevel === 'alta') priceAdjustment += 0.5;
            if (hasDocumentation === 'nao') priceAdjustment += 0.3;
            
            const baseEstimate = leadData.estimatedPrice || 3000;
            updateData.estimatedPrice = Math.round(baseEstimate * priceAdjustment);
            
        } else if (leadData.category === 'mentoring') {
            const teamSize = parseInt(formData.get('teamSize') as string) || 0;
            const experienceLevel = formData.get('experienceLevel') as string;
            const sessionDuration = formData.get('sessionDuration') as string;
            const mentorshipType = formData.get('mentorshipType') as string;
            
            updateData = {
                ...updateData,
                teamSize,
                experienceLevel,
                sessionDuration,
                mentorshipType
            };
            
            // Ajuste de preço para mentoria
            let priceAdjustment = 1;
            if (teamSize > 5) priceAdjustment += 0.3;
            if (experienceLevel === 'iniciante') priceAdjustment += 0.2;
            if (sessionDuration === 'longa') priceAdjustment += 0.4;
            if (mentorshipType === 'personalizada') priceAdjustment += 0.3;
            
            const baseEstimate = leadData.estimatedPrice || 4000;
            updateData.estimatedPrice = Math.round(baseEstimate * priceAdjustment);
        }
        
        setLeadData(updateData as LeadData);
        setStep(5);
    };

    // Função para obter título e descrição específicos
    const getStepInfo = () => {
        if (!leadData.category) {
            return {
                title: 'Detalhes do projeto',
                description: 'Forneça mais informações para ajustarmos seu orçamento:'
            };
        }
        
        return {
            title: t(`${leadData.category}.title`),
            description: t(`${leadData.category}.description`)
        };
    };

    const { title, description } = getStepInfo();

    // Função para renderizar campos específicos por categoria
    const renderCategoryFields = () => {
        switch (leadData.category) {
            case 'new':
    return (
                    <>
                            <div className="grid gap-2">
                            <Label htmlFor="clientCount">{t('new.fields.clientCount')}</Label>
                                <Input
                                    className="bg-white focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                    id="clientCount"
                                    name="clientCount"
                                    type="number"
                                placeholder={t('new.fields.clientCountPlaceholder')}
                                    defaultValue={leadData.clientCount || ""}
                                />
                            </div>

                            <div className="grid gap-2">
                            <Label htmlFor="productCount">{t('new.fields.productCount')}</Label>
                                <Input
                                    className="bg-white focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                    id="productCount"
                                    name="productCount"
                                    type="number"
                                placeholder={t('new.fields.productCountPlaceholder')}
                                    defaultValue={leadData.productCount || ""}
                                />
                            </div>

                            <div className="grid gap-2">
                            <Label htmlFor="pageCount">{t('new.fields.pageCount')}</Label>
                                <Input
                                    className="bg-white focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                    id="pageCount"
                                    name="pageCount"
                                    type="number"
                                placeholder={t('new.fields.pageCountPlaceholder')}
                                    defaultValue={leadData.pageCount || ""}
                                />
                            </div>

                            <div className="grid gap-2">
                            <Label htmlFor="companySize">{t('new.fields.companySize')}</Label>
                                <select
                                    id="companySize"
                                    name="companySize"
                                    className="w-full p-2 bg-white border rounded-md focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                    defaultValue={leadData.companySize || ""}
                                >
                                <option value="">{t('new.fields.companySizeOptions.select')}</option>
                                <option value="pequena">{t('new.fields.companySizeOptions.small')}</option>
                                <option value="media">{t('new.fields.companySizeOptions.medium')}</option>
                                <option value="grande">{t('new.fields.companySizeOptions.large')}</option>
                            </select>
                        </div>
                    </>
                );

            case 'maintenance':
                return (
                    <>
                        <div className="grid gap-2">
                            <Label htmlFor="currentComplexity">{t('maintenance.fields.currentComplexity')}</Label>
                            <select
                                id="currentComplexity"
                                name="currentComplexity"
                                className="w-full p-2 bg-white border rounded-md focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                defaultValue={leadData.currentComplexity || ""}
                            >
                                <option value="">{t('maintenance.fields.currentComplexityOptions.select')}</option>
                                <option value="baixa">{t('maintenance.fields.currentComplexityOptions.low')}</option>
                                <option value="media">{t('maintenance.fields.currentComplexityOptions.medium')}</option>
                                <option value="alta">{t('maintenance.fields.currentComplexityOptions.high')}</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="affectedFunctionalities">{t('maintenance.fields.affectedFunctionalities')}</Label>
                            <Input
                                className="bg-white focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                id="affectedFunctionalities"
                                name="affectedFunctionalities"
                                type="number"
                                placeholder={t('maintenance.fields.affectedFunctionalitiesPlaceholder')}
                                defaultValue={leadData.affectedFunctionalities || ""}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="urgencyLevel">{t('maintenance.fields.urgencyLevel')}</Label>
                            <select
                                id="urgencyLevel"
                                name="urgencyLevel"
                                className="w-full p-2 bg-white border rounded-md focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                defaultValue={leadData.urgencyLevel || ""}
                            >
                                <option value="">{t('maintenance.fields.urgencyLevelOptions.select')}</option>
                                <option value="baixa">{t('maintenance.fields.urgencyLevelOptions.low')}</option>
                                <option value="media">{t('maintenance.fields.urgencyLevelOptions.medium')}</option>
                                <option value="alta">{t('maintenance.fields.urgencyLevelOptions.high')}</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="hasDocumentation">{t('maintenance.fields.hasDocumentation')}</Label>
                            <select
                                id="hasDocumentation"
                                name="hasDocumentation"
                                className="w-full p-2 bg-white border rounded-md focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                defaultValue={leadData.hasDocumentation || ""}
                            >
                                <option value="">{t('maintenance.fields.hasDocumentationOptions.select')}</option>
                                <option value="sim">{t('maintenance.fields.hasDocumentationOptions.yes')}</option>
                                <option value="parcial">{t('maintenance.fields.hasDocumentationOptions.partial')}</option>
                                <option value="nao">{t('maintenance.fields.hasDocumentationOptions.no')}</option>
                            </select>
                        </div>
                    </>
                );

            case 'mentoring':
                return (
                    <>
                        <div className="grid gap-2">
                            <Label htmlFor="teamSize">{t('mentoring.fields.teamSize')}</Label>
                            <Input
                                className="bg-white focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                id="teamSize"
                                name="teamSize"
                                type="number"
                                placeholder={t('mentoring.fields.teamSizePlaceholder')}
                                defaultValue={leadData.teamSize || ""}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="experienceLevel">{t('mentoring.fields.experienceLevel')}</Label>
                            <select
                                id="experienceLevel"
                                name="experienceLevel"
                                className="w-full p-2 bg-white border rounded-md focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                defaultValue={leadData.experienceLevel || ""}
                            >
                                <option value="">{t('mentoring.fields.experienceLevelOptions.select')}</option>
                                <option value="iniciante">{t('mentoring.fields.experienceLevelOptions.beginner')}</option>
                                <option value="intermediario">{t('mentoring.fields.experienceLevelOptions.intermediate')}</option>
                                <option value="avancado">{t('mentoring.fields.experienceLevelOptions.advanced')}</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="sessionDuration">{t('mentoring.fields.sessionDuration')}</Label>
                            <select
                                id="sessionDuration"
                                name="sessionDuration"
                                className="w-full p-2 bg-white border rounded-md focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                defaultValue={leadData.sessionDuration || ""}
                            >
                                <option value="">{t('mentoring.fields.sessionDurationOptions.select')}</option>
                                <option value="curta">{t('mentoring.fields.sessionDurationOptions.short')}</option>
                                <option value="media">{t('mentoring.fields.sessionDurationOptions.medium')}</option>
                                <option value="longa">{t('mentoring.fields.sessionDurationOptions.long')}</option>
                            </select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="mentorshipType">{t('mentoring.fields.mentorshipType')}</Label>
                            <select
                                id="mentorshipType"
                                name="mentorshipType"
                                className="w-full p-2 bg-white border rounded-md focus-visible:border-blue-800 focus-visible:ring-blue-700/75 focus-visible:ring-[3px]"
                                defaultValue={leadData.mentorshipType || ""}
                            >
                                <option value="">{t('mentoring.fields.mentorshipTypeOptions.select')}</option>
                                <option value="grupo">{t('mentoring.fields.mentorshipTypeOptions.group')}</option>
                                <option value="individual">{t('mentoring.fields.mentorshipTypeOptions.individual')}</option>
                                <option value="personalizada">{t('mentoring.fields.mentorshipTypeOptions.custom')}</option>
                                </select>
                            </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <section className="w-full mx-auto px-4 md:pt-5 max-w-6xl relative">
            <div className="md:my-5 mb-5 w-full md:flex items-center gap-5">
                <BackButton onClick={() => setStep(3)} />
                <div className="flex-1 text-center">
                    <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">
                        {title}
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
            </div>
            
            <Card className="w-full max-w-5/6 md:max-w-1/2 bg-gray-50 mx-auto">
                <CardContent>
                    <form onSubmit={updateProjectDetails}>
                        <div className="flex flex-col gap-5">
                            {renderCategoryFields()}
                        </div>
                        <Button type="submit" className="mt-5 w-full bg-blue-950 text-white hover:bg-blue-950/95">
                            {t('continueButton')}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}