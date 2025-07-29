import React from 'react';
import { StepProps, ServiceCategory } from '../types';
import { getCategoryIcon } from '../icons';
import FunnelCard from '../funnelCard';

export default function Step1CategorySelection({ leadData, setLeadData, setStep }: StepProps) {
  const selectCategory = (category: ServiceCategory) => {
    setLeadData({ ...leadData, category });
    setStep(2);
  };

  return (
    <section className="w-full mx-auto px-4 pt-5 lg:pt-10">
      <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">O que está buscando?</h1>
      <p className="text-center mb-8 text-gray-600 text-lg max-w-2xl mx-auto">
        Nós oferecemos uma ampla gama de serviços para atender a sua necessidade.
        Selecione a opção que melhor descreve o que você está buscando.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <FunnelCard
          title="Criar algo novo"
          content="Quero desenvolver algo do zero"
          icon={getCategoryIcon("new")}
          onClick={() => selectCategory("new")}
        />

        <FunnelCard
          title="Manutenção ou expansão"
          content="Já tenho algo pronto e quero melhorar ou corrigir"
          icon={getCategoryIcon("maintenance")}
          onClick={() => selectCategory("maintenance")}
        />

        <FunnelCard
          title="Mentoria ou consultoria"
          content="Preciso de orientação ou quero treinar minha equipe"
          icon={getCategoryIcon("mentoring")}
          onClick={() => selectCategory("mentoring")}
        />
      </div>
    </section>
  );
}