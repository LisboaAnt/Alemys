import React from 'react';
import { FaCheck } from "react-icons/fa";

type ProgressIndicatorProps = {
    currentStep: number;
};

export default function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
    const steps = [
        { number: 1, label: "Categoria", completed: currentStep > 1 },
        { number: 2, label: "Serviço", completed: currentStep > 2 },
        { number: 3, label: "Tamanho", completed: currentStep > 3 },
        { number: 4, label: "Detalhes", completed: currentStep > 4 },
        { number: 5, label: "Contato", completed: currentStep > 5 },
        { number: 6, label: "Finalizado", completed: currentStep >= 6 }
    ];

    return (
        <div className="w-full">
            <div className="flex items-end justify-end">
                {steps.map((stepItem, index) => (
                    <div key={stepItem.number} className="flex items-center">
                        <div className="flex flex-col items-center">
                            <div className={`w-8 md:w-10 h-8 md:h-10 mx-2 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                                stepItem.completed 
                                    ? 'bg-blue-900 text-white' 
                                    : currentStep === stepItem.number 
                                        ? 'bg-blue-900 text-white' 
                                        : 'bg-white text-gray-600'
                            }`}>
                                {stepItem.completed ? <FaCheck /> : stepItem.number}
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className="flex ">
                                <div className={`absolute z-[-1] flex-1 h-0.5 -ml-10 transition-all min-w-20 ${
                                    stepItem.completed ? 'bg-blue-900' : 'bg-gray-500/50'
                                }`}/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
} 