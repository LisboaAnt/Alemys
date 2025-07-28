"use client"

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
// Importando ícones do react-icons
import { 
    FaCode, FaTools, FaUserGraduate, FaLaptopCode, FaShoppingCart, FaBlog, 
    FaStore, FaMobile, FaCog, FaUsers, FaDesktop, FaCalendarAlt, FaPlug,
    FaBug, FaPaintBrush, FaRocket, FaPlus, FaEdit, FaTabletAlt, FaLock,
    FaSync, FaExchangeAlt, FaServer, FaArrowUp, FaMobileAlt, FaBuilding,
    FaChartLine, FaUserTie, FaLightbulb, FaGraduationCap, FaHandsHelping,
    FaPalette, FaLayerGroup, FaUsersCog, FaCheck, FaClock
} from "react-icons/fa";


// Tipos para o funil de leads
type ServiceCategory = "new" | "maintenance" | "mentoring" | null;
type ServiceType = string | null;
type ProjectSize = "small" | "medium" | "large" | null;
type LeadData = {
  category: ServiceCategory;
  serviceType: ServiceType;
  projectSize: ProjectSize;
  clientCount?: number;
  productCount?: number;
  pageCount?: number;
  companySize?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  estimatedPrice?: number;
};

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

    // Componente de indicador de progresso
    const ProgressIndicator = () => {
        const steps = [
            { number: 1, label: "Categoria", completed: step > 1 },
            { number: 2, label: "Serviço", completed: step > 2 },
            { number: 3, label: "Tamanho", completed: step > 3 },
            { number: 4, label: "Detalhes", completed: step > 4 },
            { number: 5, label: "Contato", completed: step > 5 },
            { number: 6, label: "Finalizado", completed: step >= 6 }
        ];

        return (
            <div className="w-full">
                <div className="flex items-end justify-end">
                    {steps.map((stepItem, index) => (
                        <div key={stepItem.number} className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div className={`w-10 mx-2 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                                    stepItem.completed 
                                        ? 'bg-blue-900 text-white' 
                                        : step === stepItem.number 
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
    };

    // Função para obter ícone da categoria
    const getCategoryIcon = (category: string) => {
        switch(category) {
            case "new": return <FaCode className="text-3xl text-blue-600 mb-4" />;
            case "maintenance": return <FaTools className="text-3xl text-orange-600 mb-4" />;
            case "mentoring": return <FaUserGraduate className="text-3xl text-green-600 mb-4" />;
            default: return null;
        }
    };

    // Função para obter ícone do serviço
    const getServiceIcon = (service: string) => {
        const iconMap: Record<string, React.ReactElement> = {
            "Landing Page de Campanha": <FaLaptopCode className="text-2xl text-purple-600 mb-3" />,
            "Loja Virtual (E-commerce)": <FaShoppingCart className="text-2xl text-green-600 mb-3" />,
            "Blog ou Portal de Conteúdo": <FaBlog className="text-2xl text-blue-600 mb-3" />,
            "Marketplace": <FaStore className="text-2xl text-orange-600 mb-3" />,
            "Aplicativo Mobile": <FaMobile className="text-2xl text-pink-600 mb-3" />,
            "Sistema Web Personalizado": <FaCog className="text-2xl text-gray-600 mb-3" />,
            "Plataforma com Assinatura": <FaUsers className="text-2xl text-indigo-600 mb-3" />,
            "Progressive Web App (PWA)": <FaDesktop className="text-2xl text-teal-600 mb-3" />,
            "Site para Eventos": <FaCalendarAlt className="text-2xl text-red-600 mb-3" />,
            "Integrações com APIs": <FaPlug className="text-2xl text-yellow-600 mb-3" />,
            
            // Manutenção
            "Correção de bugs": <FaBug className="text-2xl text-red-600 mb-3" />,
            "Atualização visual": <FaPaintBrush className="text-2xl text-pink-600 mb-3" />,
            "Otimização de performance": <FaRocket className="text-2xl text-blue-600 mb-3" />,
            "Adição de funcionalidades": <FaPlus className="text-2xl text-green-600 mb-3" />,
            "Manutenção de conteúdo": <FaEdit className="text-2xl text-orange-600 mb-3" />,
            "Responsividade": <FaTabletAlt className="text-2xl text-purple-600 mb-3" />,
            "Backup e segurança": <FaLock className="text-2xl text-green-700 mb-3" />,
            "Atualização de plugins": <FaSync className="text-2xl text-blue-500 mb-3" />,
            "Integração com novos serviços": <FaExchangeAlt className="text-2xl text-indigo-600 mb-3" />,
            "Migração para nova hospedagem": <FaServer className="text-2xl text-gray-600 mb-3" />,
            "Transformação de site antigo": <FaArrowUp className="text-2xl text-teal-600 mb-3" />,
            "Evolução para aplicativo": <FaMobileAlt className="text-2xl text-pink-600 mb-3" />,
            
            // Mentoria
            "Consultoria em Arquitetura": <FaBuilding className="text-2xl text-blue-600 mb-3" />,
            "Planejamento técnico": <FaChartLine className="text-2xl text-green-600 mb-3" />,
            "Avaliação de código": <FaUserTie className="text-2xl text-purple-600 mb-3" />,
            "Treinamentos em tecnologias": <FaLightbulb className="text-2xl text-yellow-600 mb-3" />,
            "Mentoria para times": <FaGraduationCap className="text-2xl text-orange-600 mb-3" />,
            "Workshops de UX/UI": <FaPalette className="text-2xl text-pink-600 mb-3" />,
            "Apoio na escolha de stack": <FaLayerGroup className="text-2xl text-indigo-600 mb-3" />,
            "Mentoria para Product Owners": <FaUsersCog className="text-2xl text-teal-600 mb-3" />
        };
        
        return iconMap[service] || <FaCog className="text-2xl text-gray-600 mb-3" />;
    };

    // Função para obter ícone do tamanho do projeto
    const getProjectSizeIcon = (size: string) => {
        switch(size) {
            case "small": return <FaClock className="text-3xl text-green-600 mb-4" />;
            case "medium": return <FaRocket className="text-3xl text-blue-600 mb-4" />;
            case "large": return <FaBuilding className="text-3xl text-purple-600 mb-4" />;
            default: return null;
        }
    };
    
    // Função para selecionar a categoria de serviço
    const selectCategory = (category: ServiceCategory) => {
        setLeadData({ ...leadData, category });
        setStep(2);
    };
    
    // Função para selecionar o tipo de serviço
    const selectServiceType = (serviceType: string) => {
        setLeadData({ ...leadData, serviceType });
        setStep(3);
    };
    
    // Função para selecionar o tamanho do projeto
    const selectProjectSize = (size: ProjectSize) => {
        const basePrice = getBasePrice(leadData.category, leadData.serviceType);
        let multiplier = 1;
        
        switch(size) {
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
    
    // Função para obter o preço base com base na categoria e tipo de serviço
    const getBasePrice = (category: ServiceCategory, serviceType: ServiceType): number => {
        if (!category || !serviceType) return 0;
        
        const prices: Record<string, number> = {
            "Landing Page de Campanha": 3000,
            "Loja Virtual (E-commerce)": 8000,
            "Blog ou Portal de Conteúdo": 5000,
            "Marketplace": 15000,
            "Aplicativo Mobile": 12000,
            "Sistema Web Personalizado": 10000,
            "Plataforma com Assinatura": 12000,
            "Progressive Web App (PWA)": 7000,
            "Site para Eventos": 4000,
            "Integrações com APIs": 6000,
            "Correção de bugs": 2000,
            "Atualização visual": 3500,
            "Otimização de performance": 2500,
            "Adição de funcionalidades": 4000,
            "Manutenção de conteúdo": 1500,
            "Responsividade": 2000,
            "Backup e segurança": 1800,
            "Atualização de plugins": 1500,
            "Integração com novos serviços": 3000,
            "Migração para nova hospedagem": 2000,
            "Transformação de site antigo": 6000,
            "Evolução para aplicativo": 8000,
            "Consultoria em Arquitetura": 5000,
            "Planejamento técnico": 4500,
            "Avaliação de código": 3000,
            "Treinamentos em tecnologias": 4000,
            "Mentoria para times": 5500,
            "Workshops de UX/UI": 3500,
            "Apoio na escolha de stack": 2500,
            "Mentoria para Product Owners": 4500,
        };
        
        return prices[serviceType] || 5000; // Valor padrão se não encontrar
    };
    
    // Função para atualizar os detalhes do projeto
    const updateProjectDetails = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const clientCount = parseInt(formData.get('clientCount') as string) || 0;
        const productCount = parseInt(formData.get('productCount') as string) || 0;
        const pageCount = parseInt(formData.get('pageCount') as string) || 0;
        const companySize = formData.get('companySize') as string;
        
        // Ajuste de preço baseado nos detalhes do projeto
        let priceAdjustment = 1;
        
        if (clientCount > 1000) priceAdjustment += 0.3;
        if (productCount > 100) priceAdjustment += 0.2;
        if (pageCount > 10) priceAdjustment += 0.2;
        if (companySize === "grande") priceAdjustment += 0.3;
        
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
    
    // Função para enviar o contato final
    const submitContact = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        setLeadData({
            ...leadData,
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
        });
        
        // Aqui você poderia enviar os dados para um backend
        // Por enquanto apenas avançamos para a tela de agradecimento
        setStep(6);
    };
    
    // Função para reiniciar o processo
    const resetFunnel = () => {
        localStorage.removeItem('serviceLeadData');
        setLeadData({
            category: null,
            serviceType: null,
            projectSize: null,
        });
        setStep(1);
    };
    
    // Renderizar a etapa atual do funil
    const renderStep = () => {
        switch (step) {
            case 1:
                return renderCategorySelection();
            case 2:
                return renderServiceTypeSelection();
            case 3:
                return renderProjectSizeSelection();
            case 4:
                return renderProjectDetailsForm();
            case 5:
                return renderContactForm();
            case 6:
                return renderThankYouScreen();
            default:
                return renderCategorySelection();
        }
    };
    
    // Etapa 1: Seleção de categoria
    const renderCategorySelection = () => (
        <section className="w-full mx-auto px-4 pt-4 lg:pt-12 max-w-6xl">
            <h1 className="text-5xl text-gray-800 font-bold text-center mb-2">O que está buscando?</h1>
            <p className="text-center mb-8 text-gray-600 text-lg max-w-2xl mx-auto">
                Nós oferecemos uma ampla gama de serviços para atender a sua necessidade.
                Selecione a opção que melhor descreve o que você está buscando.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectCategory("new")}>
                    <CardHeader className="text-center">
                        {getCategoryIcon("new")}
                        <CardTitle>Criar algo novo</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Quero desenvolver algo do zero</p>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectCategory("maintenance")}>
                    <CardHeader className="text-center">
                        {getCategoryIcon("maintenance")}
                        <CardTitle>Manutenção ou expansão</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Já tenho algo pronto e quero melhorar ou corrigir</p>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectCategory("mentoring")}>
                    <CardHeader className="text-center">
                        {getCategoryIcon("mentoring")}
                        <CardTitle>Mentoria ou consultoria</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Preciso de orientação ou quero treinar minha equipe</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
    
    // Etapa 2: Seleção de tipo de serviço
    const renderServiceTypeSelection = () => {
        let services: string[] = [];
        let title = "";
        
        switch (leadData.category) {
            case "new":
                title = "Criar algo novo";
                services = [
                    "Landing Page de Campanha",
                    "Loja Virtual (E-commerce)",
                    "Blog ou Portal de Conteúdo",
                    "Marketplace",
                    "Aplicativo Mobile",
                    "Sistema Web Personalizado",
                    "Plataforma com Assinatura",
                    "Progressive Web App (PWA)",
                    "Site para Eventos",
                    "Integrações com APIs"
                ];
                break;
            case "maintenance":
                title = "Manutenção ou expansão";
                services = [
                    "Correção de bugs",
                    "Atualização visual",
                    "Otimização de performance",
                    "Adição de funcionalidades",
                    "Manutenção de conteúdo",
                    "Responsividade",
                    "Backup e segurança",
                    "Atualização de plugins",
                    "Integração com novos serviços",
                    "Migração para nova hospedagem",
                    "Transformação de site antigo",
                    "Evolução para aplicativo"
                ];
                break;
            case "mentoring":
                title = "Mentoria ou consultoria";
                services = [
                    "Consultoria em Arquitetura",
                    "Planejamento técnico",
                    "Avaliação de código",
                    "Treinamentos em tecnologias",
                    "Mentoria para times",
                    "Workshops de UX/UI",
                    "Apoio na escolha de stack",
                    "Mentoria para Product Owners"
                ];
                break;
        }
        
        return (
            <section className="w-full mx-auto px-4 py-8 max-w-6xl">
                <Button variant="outline" onClick={() => setStep(1)} className="mb-6 bg-gray-100 hover:bg-gray-200">
                    ← Voltar
                </Button>
                
                <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
                <p className="mb-8 text-gray-600 text-center">
                    Selecione o serviço específico que você está buscando:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                        <Card 
                            key={service}
                            className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" 
                            onClick={() => selectServiceType(service)}
                        >
                            <CardContent className="p-6 text-center">
                                {getServiceIcon(service)}
                                <p className="font-medium">{service}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        );
    };
    
    // Etapa 3: Seleção de tamanho do projeto
    const renderProjectSizeSelection = () => (
        <section className="w-full mx-auto px-4 py-8 max-w-6xl">
            <Button variant="outline" onClick={() => setStep(2)} className="mb-6 bg-gray-100 hover:bg-gray-200">
                ← Voltar
            </Button>
            
            <h1 className="text-3xl font-bold mb-2 text-center">Qual o tamanho do seu projeto?</h1>
            <p className="mb-8 text-gray-600 text-center">
                Selecione a opção que melhor descreve a escala do seu projeto:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectProjectSize("small")}>
                    <CardHeader className="text-center">
                        {getProjectSizeIcon("small")}
                        <CardTitle>Pequeno</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Projeto simples, poucos recursos, prazo curto</p>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectProjectSize("medium")}>
                    <CardHeader className="text-center">
                        {getProjectSizeIcon("medium")}
                        <CardTitle>Médio</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Projeto intermediário, vários recursos, prazo médio</p>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => selectProjectSize("large")}>
                    <CardHeader className="text-center">
                        {getProjectSizeIcon("large")}
                        <CardTitle>Grande</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Projeto complexo, muitos recursos, prazo extenso</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
    
    // Etapa 4: Formulário de detalhes do projeto
    const renderProjectDetailsForm = () => (
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
                                <Label htmlFor="clientCount">Quantidade estimada de usuários/clientes mensais</Label>
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
    
    // Etapa 5: Formulário de contato
    const renderContactForm = () => (
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
                    <form onSubmit={submitContact} className="space-y-6">
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
    
    // Etapa 6: Tela de agradecimento
    const renderThankYouScreen = () => (
        <ThankYouScreen/>
    );
    
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex lg:justify-end justify-center">
                <div className="lg:absolute mt-2">
                    <ProgressIndicator />
                </div>
            </div>
            {renderStep()}
        </div>
    );
} 