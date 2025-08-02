import React from 'react';
import { StepProps, ServiceCategory } from '../types';
import { getCategoryIcon } from '../icons';
import FunnelCard from '../funnelCard';
import { useTranslations } from 'next-intl';

export default function Step1CategorySelection({ leadData, setLeadData, setStep }: StepProps) {
  const t = useTranslations('services.steps.step1');
  
  const selectCategory = (category: ServiceCategory) => {
    setLeadData({ ...leadData, category });
    setStep(2);
  };

  return (
    <section className="w-full mx-auto px-4 md:pt-5 lg:pt-10">
      <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">{t('title')}</h1>
      <p className="text-center mb-8 text-gray-600 text-lg max-w-2xl mx-auto">
        {t('description')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <FunnelCard
          title={t('categories.new.title')}
          content={t('categories.new.content')}
          icon={getCategoryIcon("new")}
          onClick={() => selectCategory("new")}
        />

        <FunnelCard
          title={t('categories.maintenance.title')}
          content={t('categories.maintenance.content')}
          icon={getCategoryIcon("maintenance")}
          onClick={() => selectCategory("maintenance")}
        />

        <FunnelCard
          title={t('categories.mentoring.title')}
          content={t('categories.mentoring.content')}
          icon={getCategoryIcon("mentoring")}
          onClick={() => selectCategory("mentoring")}
        />
      </div>
    </section>
  );
}