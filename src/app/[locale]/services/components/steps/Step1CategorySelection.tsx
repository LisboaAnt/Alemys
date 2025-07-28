import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StepProps, ServiceCategory } from '../types';
import { getCategoryIcon } from '../icons';

export default function Step1CategorySelection({ leadData, setLeadData, setStep }: StepProps) {
    const selectCategory = (category: ServiceCategory) => {
        setLeadData({ ...leadData, category });
        setStep(2);
    };

    return (
        <section className="w-full mx-auto px-4 pt-4 lg:pt-12">
            <h1 className="text-5xl text-gray-800 font-bold text-center mb-2">O que está buscando?</h1>
            <p className="text-center mb-8 text-gray-600 text-lg max-w-2xl mx-auto">
                Nós oferecemos uma ampla gama de serviços para atender a sua necessidade.
                Selecione a opção que melhor descreve o que você está buscando.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectCategory("new")}>
                    <CardHeader className="text-center">
                        {getCategoryIcon("new")}
                        <CardTitle>Criar algo novo</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Quero desenvolver algo do zero</p>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectCategory("maintenance")}>
                    <CardHeader className="text-center">
                        {getCategoryIcon("maintenance")}
                        <CardTitle>Manutenção ou expansão</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Já tenho algo pronto e quero melhorar ou corrigir</p>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectCategory("mentoring")}>
                    <CardHeader className="text-center">
                        {getCategoryIcon("mentoring")}
                        <CardTitle>Mentoria ou consultoria</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Preciso de orientação ou quero treinar minha equipe</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
} 