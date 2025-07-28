import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepProps } from '../types';
import { getServiceIcon } from '../icons';

export default function Step2ServiceTypeSelection({ leadData, setLeadData, setStep }: StepProps) {
    const selectServiceType = (serviceType: string) => {
        setLeadData({ ...leadData, serviceType });
        setStep(3);
    };

    let services: string[] = [];
    let title = "";
    
    switch (leadData.category) {
        case "new":
            title = "Criar algo novo";
            services = [
                "Landing Page de Campanha",
                "Loja Virtual (E-commerce)",
                "Blog ou Portal de Conteúdo",
                "Marketplace",
                "Aplicativo Mobile",
                "Sistema Web Personalizado",
                "Plataforma com Assinatura",
                "Progressive Web App (PWA)",
                "Site para Eventos",
                "Integrações com APIs"
            ];
            break;
        case "maintenance":
            title = "Manutenção ou expansão";
            services = [
                "Correção de bugs",
                "Atualização visual",
                "Otimização de performance",
                "Adição de funcionalidades",
                "Manutenção de conteúdo",
                "Responsividade",
                "Backup e segurança",
                "Atualização de plugins",
                "Integração com novos serviços",
                "Migração para nova hospedagem",
                "Transformação de site antigo",
                "Evolução para aplicativo"
            ];
            break;
        case "mentoring":
            title = "Mentoria ou consultoria";
            services = [
                "Consultoria em Arquitetura",
                "Planejamento técnico",
                "Avaliação de código",
                "Treinamentos em tecnologias",
                "Mentoria para times",
                "Workshops de UX/UI",
                "Apoio na escolha de stack",
                "Mentoria para Product Owners"
            ];
            break;
    }
    
    return (
        <section className="w-full mx-auto px-4 py-8 max-w-6xl">
            <Button variant="outline" onClick={() => setStep(1)} className="mb-6 bg-gray-100 hover:bg-gray-200">
                ← Voltar
            </Button>
            
            <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
            <p className="mb-8 text-gray-600 text-center">
                Selecione o serviço específico que você está buscando:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <Card 
                        key={service}
                        className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" 
                        onClick={() => selectServiceType(service)}
                    >
                        <CardContent className="p-6 text-center">
                            {getServiceIcon(service)}
                            <p className="font-medium">{service}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
} 