import React from 'react';
import { StepProps } from '../types';
import { getServiceIcon } from '../icons';
import FunnelCard from '../funnelCard';
import BackButton from '../backButton';
import { useTranslations } from 'next-intl';

// Mapeamento dos serviços para as chaves de tradução
const SERVICE_MAPPINGS = {
  new: {
    'Landing Page de Campanha': 'landingPage',
    'Loja Virtual (E-commerce)': 'ecommerce',
    'Blog ou Portal de Conteúdo': 'blog',
    'Marketplace': 'marketplace',
    'Aplicativo Mobile': 'mobileApp',
    'Sistema Web Personalizado': 'customSystem',
    'Plataforma com Assinatura': 'subscription',
    'Progressive Web App (PWA)': 'pwa',
    'Site para Eventos': 'events',
    'Integrações com APIs': 'apiIntegration'
  },
  maintenance: {
    'Correção de bugs': 'bugFix',
    'Atualização visual': 'visualUpdate',
    'Otimização de performance': 'performance',
    'Adição de funcionalidades': 'newFeatures',
    'Manutenção de conteúdo': 'contentMaintenance',
    'Responsividade': 'responsive',
    'Backup e segurança': 'security',
    'Atualização de plugins': 'pluginUpdate',
    'Integração com novos serviços': 'serviceIntegration',
    'Migração para nova hospedagem': 'hosting',
    'Transformação de site antigo': 'transformation',
    'Evolução para aplicativo': 'appEvolution'
  },
  mentoring: {
    'Consultoria em Arquitetura': 'architecture',
    'Planejamento técnico': 'planning',
    'Avaliação de código': 'codeReview',
    'Treinamentos em tecnologias': 'training',
    'Mentoria para times': 'teamMentoring',
    'Workshops de UX/UI': 'uxWorkshops',
    'Apoio na escolha de stack': 'stackSupport',
    'Mentoria para Product Owners': 'productOwner'
  }
};

// Configuração fácil: adicione aqui os serviços que devem ficar desabilitados
const DISABLED_SERVICES: string[] = [
  // Exemplos - descomente ou adicione os serviços que quiser desabilitar:
  "Marketplace",
  "Plataforma com Assinatura",
  "Mentoria para Product Owners",
  "Treinamentos em tecnologias",
  "Mentoria para times",
  "Workshops de UX/UI",
  "Apoio na escolha de stack"

];

export default function Step2ServiceTypeSelection({ leadData, setLeadData, setStep }: StepProps) {
  const t = useTranslations('services.steps.step2');
  
  const selectServiceType = (serviceType: string) => {
    setLeadData({ ...leadData, serviceType });
    setStep(3);
  };

  const getServicesForCategory = () => {
    switch (leadData.category) {
      case "new":
        return Object.keys(SERVICE_MAPPINGS.new);
      case "maintenance":
        return Object.keys(SERVICE_MAPPINGS.maintenance);
      case "mentoring":
        return Object.keys(SERVICE_MAPPINGS.mentoring);
      default:
        return [];
    }
  };

  const getTranslatedService = (service: string) => {
    if (!leadData.category) return service;
    
    const mapping = SERVICE_MAPPINGS[leadData.category as keyof typeof SERVICE_MAPPINGS];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const key = (mapping as any)[service];
    
    if (key) {
      return t(`services.${leadData.category}.${key}`);
    }
    return service;
  };

  const services = getServicesForCategory();
  const title = leadData.category ? t(`categories.${leadData.category}`) : "";

  return (
    <section className="w-full  mx-auto px-4 md:pt-5 max-w-6xl relative">
        <div className="md:my-5 mb-5 w-full md:flex items-center gap-5">
            <BackButton onClick={() => setStep(1)} />
            <div className="flex-1 text-center">
                <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">{title}</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {t('description')}
                </p>
            </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => {
          const isDisabled = DISABLED_SERVICES.includes(service);
          const translatedService = getTranslatedService(service);
          return (
            <FunnelCard
              key={service}
              title={translatedService}
              content=""
              icon={getServiceIcon(service)}
              onClick={() => selectServiceType(service)}
              disabled={isDisabled}
            />
          );
        })}
      </div>
    </section>
  );
}