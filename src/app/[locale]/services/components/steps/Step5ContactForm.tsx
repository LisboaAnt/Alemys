import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StepProps } from '../types';
import { submitLeadData } from '../utils';
import BackButton from '../backButton';

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
        <section className="w-full mx-auto px-4 py-5 max-w-6xl">
            <div className="my-5 w-full flex items-center gap-5">
                <BackButton onClick={() => setStep(4)} />
                <div className="flex-1 text-center">
                    <h1 className="text-5xl text-gray-800 font-bold text-center mb-5">
                    Quase lá!
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Baseado nas suas escolhas, o orçamento estimado para o seu projeto é:
                    </p>
                </div>
            </div>

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
            <p className="text-md text-gray-600 mb-8 text-center">
                *Este é apenas um valor estimado. O orçamento final pode variar após análise detalhada.
            </p>
            
            <Card className="w-full max-w-5/6 md:max-w-4/6 bg-gray-50 mx-auto">
                <CardHeader>
                    <CardTitle>Seus dados para contato</CardTitle>
                    <CardDescription>
                    Preencha seus dados para que possamos entrar em contato e discutir seu projeto em detalhes.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmitContact}>
                    <div className="flex flex-col gap-5">
                        <div className="grid gap-2">
                        <Label htmlFor="name">Nome completo:</Label>
                        <Input
                            className="bg-white"
                            id="name"
                            name="name"
                            required
                            placeholder="Seu nome"
                            defaultValue={leadData.name || ""}
                        />
                        </div>

                        <div className="grid gap-2">
                        <Label htmlFor="email">E-mail:</Label>
                        <Input
                            className="bg-white"
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="seu@email.com"
                            defaultValue={leadData.email || ""}
                        />
                        </div>

                        <div className="grid gap-2">
                        <Label htmlFor="phone">Telefone/WhatsApp</Label>
                        <Input
                            className="bg-white"
                            id="phone"
                            name="phone"
                            placeholder="(00) 00000-0000"
                            defaultValue={leadData.phone || ""}
                        />
                        </div>

                        <div className="grid gap-2">
                        <Label htmlFor="message">Mensagem adicional (opcional):</Label>
                        <Textarea
                            className="bg-white"
                            id="message"
                            name="message"
                            placeholder="Detalhes adicionais sobre seu projeto..."
                            defaultValue={leadData.message || ""}
                        />
                        </div>
                    </div>

                    <Button type="submit" className="mt-5 w-full">
                        Solicitar orçamento
                    </Button>
                    </form>
                </CardContent>
                </Card>
        </section>
    );
} 