import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepProps, ProjectSize } from '../types';
import { getProjectSizeIcon } from '../icons';
import { getBasePrice } from '../utils';

export default function Step3ProjectSizeSelection({ leadData, setLeadData, setStep }: StepProps) {
    const selectProjectSize = (size: ProjectSize) => {
        const basePrice = getBasePrice(leadData.category, leadData.serviceType);
        let multiplier = 1;
        
        switch(size) {
            case "small": multiplier = 1; break;
            case "medium": multiplier = 1.5; break;
            case "large": multiplier = 2.5; break;
        }
        
        setLeadData({ 
            ...leadData, 
            projectSize: size,
            estimatedPrice: basePrice * multiplier
        });
        
        setStep(4);
    };

    return (
        <section className="w-full mx-auto w-full mx-auto px-4 py-8 max-w-6xl">
            <Button variant="outline" onClick={() => setStep(2)} className="mb-6 bg-gray-100 hover:bg-gray-200">
                ← Voltar
            </Button>
            
            <h1 className="text-3xl font-bold mb-2 text-center">Qual o tamanho do seu projeto?</h1>
            <p className="mb-8 text-gray-600 text-center">
                Selecione a opção que melhor descreve a escala do seu projeto:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectProjectSize("small")}>
                    <CardHeader className="text-center">
                        {getProjectSizeIcon("small")}
                        <CardTitle>Pequeno</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Projeto simples, poucos recursos, prazo curto</p>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectProjectSize("medium")}>
                    <CardHeader className="text-center">
                        {getProjectSizeIcon("medium")}
                        <CardTitle>Médio</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Projeto intermediário, vários recursos, prazo médio</p>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectProjectSize("large")}>
                    <CardHeader className="text-center">
                        {getProjectSizeIcon("large")}
                        <CardTitle>Grande</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Projeto complexo, muitos recursos, prazo extenso</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
} 