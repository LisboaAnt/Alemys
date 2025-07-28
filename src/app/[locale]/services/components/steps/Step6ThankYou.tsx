import React from 'react';
import { Button } from "@/components/ui/button";
import { StepProps } from '../types';

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
        <section className="w-full mx-auto px-4 py-16 text-center max-w-6xl">
            <h1 className="text-4xl font-bold mb-4">Obrigado pelo seu interesse!</h1>
            <p className="text-xl mb-8">
                Recebemos suas informações e entraremos em contato em breve para discutir seu projeto.
            </p>
            
            <div className="p-6 rounded-lg mb-8 bg-gray-50 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Resumo do seu projeto</h2>
                <div className="text-left space-y-2 max-w-md mx-auto">
                    <p><strong>Tipo de serviço:</strong> {leadData.serviceType}</p>
                    <p><strong>Tamanho do projeto:</strong> {
                        leadData.projectSize === "small" ? "Pequeno" : 
                        leadData.projectSize === "medium" ? "Médio" : "Grande"
                    }</p>
                    {(() => {
                        const price = leadData.estimatedPrice ?? 0;
                        const lowerBound = price * 0.8;
                        const upperBound = price * 1.2;

                        return (
                            <>
                            <p><strong>Orçamento estimado:</strong> R$ {lowerBound.toLocaleString('pt-BR')} à R$ {upperBound.toLocaleString('pt-BR')}</p>
                            </>
                        );
                    })()}
                </div>
            </div>
            
            <Button onClick={resetFunnel} className="bg-blue-950 hover:bg-blue-900">
                Iniciar um novo orçamento
            </Button>
        </section>
    );
} 