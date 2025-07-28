import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StepProps } from '../types';
import { submitLeadData } from '../utils';

export default function Step5ContactForm({ leadData, setLeadData, setStep }: StepProps) {
    const handleSubmitContact = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const updatedLeadData = {
            ...leadData,
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        };

        setLeadData(updatedLeadData);
        
        // Enviar dados para o backend
        const success = await submitLeadData(updatedLeadData);
        
        if (success) {
            setStep(6);
        } else {
            // TODO: Tratar erro de envio
            alert("Erro ao enviar dados. Tente novamente.");
        }
    };

    return (
        <section className="w-full mx-auto px-4 py-8 max-w-6xl">
            <Button variant="outline" onClick={() => setStep(4)} className="mb-6 bg-gray-100 hover:bg-gray-200">
                ← Voltar
            </Button>
            
            <h1 className="text-3xl font-bold mb-2 text-center">Quase lá!</h1>
            <p className="mb-2 text-gray-600 text-center">
                Baseado nas suas escolhas, o orçamento estimado para o seu projeto é:
            </p>
            <p className="text-3xl font-bold text-blue-600 mb-6 text-center">
                {(() => {
                    const price = leadData.estimatedPrice ?? 0;
                    const lowerBound = price * 0.7;
                    const upperBound = price * 1.3;

                    return (
                        <>
                        <p>Varia entre: R$ {lowerBound.toLocaleString('pt-BR')} e R$ {upperBound.toLocaleString('pt-BR')}</p>
                        </>
                    );
                })()}
            </p>
            <p className="text-sm text-gray-500 mb-8 text-center">
                *Este é apenas um valor estimado. O orçamento final pode variar após análise detalhada.
            </p>
            
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Seus dados para contato</CardTitle>
                    <CardDescription>
                        Preencha seus dados para que possamos entrar em contato e discutir seu projeto em detalhes.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmitContact} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="name">Nome completo</Label>
                                <Input 
                                    id="name" 
                                    name="name" 
                                    required 
                                    placeholder="Seu nome"
                                    defaultValue={leadData.name || ""}
                                />
                            </div>
                            
                            <div>
                                <Label htmlFor="email">E-mail</Label>
                                <Input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    required 
                                    placeholder="seu@email.com"
                                    defaultValue={leadData.email || ""}
                                />
                            </div>
                            
                            <div>
                                <Label htmlFor="phone">Telefone/WhatsApp</Label>
                                <Input 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="(00) 00000-0000"
                                    defaultValue={leadData.phone || ""}
                                />
                            </div>
                            
                            <div className="md:col-span-2">
                                <Label htmlFor="message">Mensagem adicional (opcional)</Label>
                                <Textarea 
                                    id="message" 
                                    name="message" 
                                    placeholder="Detalhes adicionais sobre seu projeto..."
                                    defaultValue={leadData.message || ""}
                                />
                            </div>
                        </div>
                        
                        <Button type="submit" className="w-full">
                            Enviar e solicitar orçamento
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
} 