import React from 'react';
import { StepProps, ProjectSize } from '../types';
import { getProjectSizeIcon } from '../icons';
import { getBasePrice } from '../utils';
import FunnelCard from '../funnelCard';
import BackButton from '../backButton';
import { useTranslations } from 'next-intl';

export default function Step3ProjectSizeSelection({ leadData, setLeadData, setStep }: StepProps) {
  const t = useTranslations('services.steps.step3');
  const selectProjectSize = (size: ProjectSize) => {
    const basePrice = getBasePrice(leadData.category, leadData.serviceType);
    let multiplier = 1;

    switch (size) {
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
    <section className="w-full mx-auto px-4 md:pt-5 max-w-6xl relative">
        <div className="md:my-5 mb-5 w-full md:flex items-center gap-5">
            <BackButton onClick={() => setStep(2)} />
            <div className="flex-1 text-center">
                <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">
                  {t('title')}
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {t('description')}
                </p>
            </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FunnelCard
          title={t('sizes.small.title')}
          content={t('sizes.small.content')}
          icon={getProjectSizeIcon("small")}
          onClick={() => selectProjectSize("small")}
        />
        <FunnelCard
          title={t('sizes.medium.title')}
          content={t('sizes.medium.content')}
          icon={getProjectSizeIcon("medium")}
          onClick={() => selectProjectSize("medium")}
        />
        <FunnelCard
          title={t('sizes.large.title')}
          content={t('sizes.large.content')}
          icon={getProjectSizeIcon("large")}
          onClick={() => selectProjectSize("large")}
        />
      </div>
    </section>
  );
}