import React from 'react';
import { Button } from "@/components/ui/button";
import { StepProps, ProjectSize } from '../types';
import { getProjectSizeIcon } from '../icons';
import { getBasePrice } from '../utils';
import FunnelCard from '../funnelCard';
import BackButton from '../backButton';

export default function Step3ProjectSizeSelection({ leadData, setLeadData, setStep }: StepProps) {
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
    <section className="w-full mx-auto px-4 pt-5 max-w-6xl relative">
        <div className="my-5 w-full flex items-center gap-5">
            <BackButton onClick={() => setStep(2)} />
            <div className="flex-1 text-center">
                <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">
                Qual o tamanho do seu projeto?
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Selecione a opção que melhor descreve a escala do seu projeto:
                </p>
            </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FunnelCard
          title="Pequeno"
          content="Projeto simples, poucos recursos, prazo curto"
          icon={getProjectSizeIcon("small")}
          onClick={() => selectProjectSize("small")}
        />
        <FunnelCard
          title="Médio"
          content="Projeto intermediário, vários recursos, prazo médio"
          icon={getProjectSizeIcon("medium")}
          onClick={() => selectProjectSize("medium")}
        />
        <FunnelCard
          title="Grande"
          content="Projeto complexo, muitos recursos, prazo extenso"
          icon={getProjectSizeIcon("large")}
          onClick={() => selectProjectSize("large")}
        />
      </div>
    </section>
  );
}