import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepProps } from '../types';
import { calculatePriceAdjustment } from '../utils';
import BackButton from '../backButton';

export default function Step4ProjectDetails({ leadData, setLeadData, setStep }: StepProps) {
    const updateProjectDetails = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const clientCount = parseInt(formData.get('clientCount') as string) || 0;
        const productCount = parseInt(formData.get('productCount') as string) || 0;
        const pageCount = parseInt(formData.get('pageCount') as string) || 0;
        const companySize = formData.get('companySize') as string;
        
        // Ajuste de preço baseado nos detalhes do projeto
        const priceAdjustment = calculatePriceAdjustment(clientCount, productCount, pageCount, companySize);
        const baseEstimate = leadData.estimatedPrice || 5000;
        
        setLeadData({
            ...leadData,
            clientCount,
            productCount,
            pageCount,
            companySize,
            estimatedPrice: Math.round(baseEstimate * priceAdjustment)
        });
        
        setStep(5);
    };

    return (
        <section className="w-full mx-auto px-4 pt-5 max-w-6xl">
            <div className="my-5 w-full flex items-center gap-5">
                <BackButton onClick={() => setStep(3)} />
                <div className="flex-1 text-center">
                    <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">
                    Detalhes do projeto
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Forneça mais informações para ajustarmos seu orçamento:
                    </p>
                </div>
            </div>
            
            <Card className="w-full max-w-5/6 md:max-w-1/2 bg-gray-50 mx-auto">
                <CardContent>
                    <form onSubmit={updateProjectDetails}>
                        <div className="flex flex-col gap-5">
                            <div className="grid gap-2">
                                <Label htmlFor="clientCount">Quantidade estimada de usuários/clientes:</Label>
                                <Input
                                    className="bg-white"
                                    id="clientCount"
                                    name="clientCount"
                                    type="number"
                                    placeholder="Ex: 500"
                                    defaultValue={leadData.clientCount || ""}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="productCount">Quantidade de produtos/itens (se aplicável):</Label>
                                <Input
                                    className="bg-white"
                                    id="productCount"
                                    name="productCount"
                                    type="number"
                                    placeholder="Ex: 50"
                                    defaultValue={leadData.productCount || ""}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="pageCount">Quantidade estimada de páginas/telas:</Label>
                                <Input
                                    className="bg-white"
                                    id="pageCount"
                                    name="pageCount"
                                    type="number"
                                    placeholder="Ex: 10"
                                    defaultValue={leadData.pageCount || ""}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="companySize">Tamanho da sua empresa:</Label>
                                <select
                                    id="companySize"
                                    name="companySize"
                                    className="w-full p-2 bg-white border rounded-md"
                                    defaultValue={leadData.companySize || ""}
                                >
                                    <option value="">Selecione...</option>
                                    <option value="pequena">Pequena (até 20 funcionários)</option>
                                    <option value="media">Média (21-100 funcionários)</option>
                                    <option value="grande">Grande (mais de 100 funcionários)</option>
                                </select>
                            </div>
                        </div>
                        <Button type="submit" className="mt-5 w-full">
                            Continuar
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
} 