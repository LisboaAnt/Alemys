import React from 'react';
import { StepProps } from '../types';
import { getServiceIconByKey } from '../icons';
import FunnelCard from '../funnelCard';
import BackButton from '../backButton';
import { useTranslations } from 'next-intl';

// Chaves dos serviços disponíveis por categoria
const SERVICE_KEYS = {
  new: [
    'landingPage',
    'ecommerce', 
    'blog',
    //'marketplace',
    'mobileApp',
    'customSystem',
    //'subscription',
    'pwa',
    'events',
    'apiIntegration'
  ],
  maintenance: [
    'bugFix',
    'visualUpdate',
    'performance',
    'newFeatures',
    'contentMaintenance',
    'responsive',
    'security',
    'pluginUpdate',
    'serviceIntegration',
    'hosting',
    'transformation',
    'appEvolution'
  ],
  mentoring: [
    'architecture',
    'planning',
    'codeReview',
    //'training',
    //'teamMentoring',
    //'uxWorkshops',
    //'stackSupport',
    //'productOwner'
  ]
};

// Configuração fácil: adicione aqui as chaves dos serviços que devem ficar desabilitados
const DISABLED_SERVICES: string[] = [
  // Exemplos - descomente ou adicione as chaves dos serviços que quiser desabilitar:
  //"marketplace",
  //"subscription",
  //"productOwner",
  //"training",
  //"teamMentoring",
  //"uxWorkshops",
  //"stackSupport"

];

export default function Step2ServiceTypeSelection({ leadData, setLeadData, setStep }: StepProps) {
  const t = useTranslations('services.steps.step2');
  
  const selectServiceType = (serviceType: string) => {
    // serviceType já é a chave do serviço
    setLeadData({ ...leadData, serviceType });
    setStep(3);
  };

  const getServicesForCategory = () => {
    switch (leadData.category) {
      case "new":
        return SERVICE_KEYS.new;
      case "maintenance":
        return SERVICE_KEYS.maintenance;
      case "mentoring":
        return SERVICE_KEYS.mentoring;
      default:
        return [];
    }
  };

  const getTranslatedService = (serviceKey: string) => {
    if (!leadData.category) return serviceKey;
    
    try {
      return t(`services.${leadData.category}.${serviceKey}`);
    } catch {
      return serviceKey;
    }
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const isDisabled = DISABLED_SERVICES.includes(service);
          const translatedService = getTranslatedService(service);
          return (
            <FunnelCard
              key={service}
              title={translatedService}
              content=""
              icon={getServiceIconByKey(service)}
              onClick={() => selectServiceType(service)}
              disabled={isDisabled}
            />
          );
        })}
      </div>
    </section>
  );
}