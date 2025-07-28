"use client"

import React, { useState, useEffect } from "react";
import { LeadData } from './types';
import ProgressIndicator from './ProgressIndicator';
import Step1CategorySelection from './steps/Step1CategorySelection';
import Step2ServiceTypeSelection from './steps/Step2ServiceTypeSelection';
import Step3ProjectSizeSelection from './steps/Step3ProjectSizeSelection';
import Step4ProjectDetails from './steps/Step4ProjectDetails';
import Step5ContactForm from './steps/Step5ContactForm';
import Step6ThankYou from './steps/Step6ThankYou';

export default function ServiceFunnel() {
    // Estado para controlar a etapa atual do funil
    const [step, setStep] = useState(1);
    
    // Estado para armazenar os dados do lead
    const [leadData, setLeadData] = useState<LeadData>({
        category: null,
        serviceType: null,
        projectSize: null,
    });
    
    // Efeito para salvar os dados no localStorage
    useEffect(() => {
        if (Object.values(leadData).some(value => value !== null)) {
            localStorage.setItem('serviceLeadData', JSON.stringify(leadData));
        }
    }, [leadData]);
    
    // Efeito para carregar os dados do localStorage
    useEffect(() => {
        const savedData = localStorage.getItem('serviceLeadData');
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                setLeadData(parsedData);
            } catch (e) {
                console.error("Erro ao carregar dados salvos:", e);
            }
        }
    }, []);
    
    // Renderizar a etapa atual do funil
    const renderStep = () => {
        const stepProps = { leadData, setLeadData, setStep };
        
        switch (step) {
            case 1:
                return <Step1CategorySelection {...stepProps} />;
            case 2:
                return <Step2ServiceTypeSelection {...stepProps} />;
            case 3:
                return <Step3ProjectSizeSelection {...stepProps} />;
            case 4:
                return <Step4ProjectDetails {...stepProps} />;
            case 5:
                return <Step5ContactForm {...stepProps} />;
            case 6:
                return <Step6ThankYou {...stepProps} />;
            default:
                return <Step1CategorySelection {...stepProps} />;
        }
    };
    
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex lg:justify-end justify-center">
                <div className="lg:absolute mt-2">
                    <ProgressIndicator currentStep={step} />
                </div>
            </div>
            {renderStep()}
        </div>
    );
} 