import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepProps } from '../types';
import { Label } from '@/components/ui/label';

export default function Step6ThankYou({ leadData, setLeadData, setStep }: StepProps) {
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
                        Obrigado pelo seu interesse!
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Recebemos suas informações e entraremos em contato em breve para discutir seu projeto.
                    </p>
                </div>
            </div>
            
            <Card className="bg-gray-50 max-w-lg mx-auto">
                <CardHeader className='w-full text-center'>
                    <CardTitle>Resumo do seu projeto</CardTitle>
                </CardHeader>

                <CardContent className="w-full flex flex-col gap-5">
                    <div className='flex flex-col gap-2'>
                        <Label>Tipo de serviço:</Label>
                        <p>{leadData.serviceType}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label>Tamanho do projeto:</Label>
                        <p className='text-md text-gray-800'>
                            {" "}
                            {leadData.projectSize === "small"
                            ? "Pequeno"
                            : leadData.projectSize === "medium"
                            ? "Médio"
                            : "Grande"}
                        </p>
                    </div>
                    {(() => {
                        const price = leadData.estimatedPrice ?? 0;
                        const lowerBound = price * 0.8;
                        const upperBound = price * 1.2;

                        return (
                        <div className='flex flex-col gap-2'>
                            <Label>Orçamento estimado:</Label>
                            <p className='text-md text-gray-800'>
                                R${" "}
                                {lowerBound.toLocaleString("pt-BR")} à R${" "}
                                {upperBound.toLocaleString("pt-BR")}
                            </p>
                        </div>
                        );
                    })()}
                </CardContent>

                <CardFooter>
                    <Button onClick={resetFunnel} className="w-full">
                        Novo orçamento
                    </Button>
                </CardFooter>
            </Card>
        </section>
    );
} 