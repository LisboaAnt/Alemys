import React from 'react';
import { StepProps } from '../types';
import { getServiceIcon } from '../icons';
import FunnelCard from '../funnelCard';
import BackButton from '../backButton';

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
    <section className="w-full mx-auto px-4 pt-5 max-w-6xl relative">
        <div className="my-5 w-full flex items-center gap-5">
            <BackButton onClick={() => setStep(1)} />
            <div className="flex-1 text-center">
                <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">{title}</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Selecione o serviço específico que você está buscando:
                </p>
            </div>
        </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <FunnelCard
            key={service}
            title={service}
            content=""
            icon={getServiceIcon(service)}
            onClick={() => selectServiceType(service)}
          />
        ))}
      </div>
    </section>
  );
}