import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepProps } from '../types';
import { calculatePriceAdjustment } from '../utils';

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
        <section className="w-full mx-auto px-4 py-8 max-w-6xl">
            <Button variant="outline" onClick={() => setStep(3)} className="mb-6 bg-gray-100 hover:bg-gray-200">
                ← Voltar
            </Button>
            
            <h1 className="text-3xl font-bold mb-2 text-center">Detalhes do projeto</h1>
            <p className="mb-8 text-gray-600 text-center">
                Forneça mais informações para ajustarmos seu orçamento:
            </p>
            
            <Card className="max-w-4xl mx-auto">
                <CardContent className="p-6">
                    <form onSubmit={updateProjectDetails} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="clientCount">Quantidade estimada de usuários/clientes</Label>
                                <Input 
                                    id="clientCount" 
                                    name="clientCount" 
                                    type="number" 
                                    placeholder="Ex: 500"
                                    defaultValue={leadData.clientCount || ""}
                                />
                            </div>
                            
                            <div>
                                <Label htmlFor="productCount">Quantidade de produtos/itens (se aplicável)</Label>
                                <Input 
                                    id="productCount" 
                                    name="productCount" 
                                    type="number" 
                                    placeholder="Ex: 50"
                                    defaultValue={leadData.productCount || ""}
                                />
                            </div>
                            
                            <div>
                                <Label htmlFor="pageCount">Quantidade estimada de páginas/telas</Label>
                                <Input 
                                    id="pageCount" 
                                    name="pageCount" 
                                    type="number" 
                                    placeholder="Ex: 10"
                                    defaultValue={leadData.pageCount || ""}
                                />
                            </div>
                            
                            <div>
                                <Label htmlFor="companySize">Tamanho da sua empresa</Label>
                                <select 
                                    id="companySize" 
                                    name="companySize" 
                                    className="w-full p-2 border rounded-md"
                                    defaultValue={leadData.companySize || ""}
                                >
                                    <option value="">Selecione...</option>
                                    <option value="pequena">Pequena (até 20 funcionários)</option>
                                    <option value="media">Média (21-100 funcionários)</option>
                                    <option value="grande">Grande (mais de 100 funcionários)</option>
                                </select>
                            </div>
                        </div>
                        
                        <Button type="submit" className="w-full">
                            Continuar
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
} 