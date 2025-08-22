import { ServiceCategory, ServiceType, LeadData } from './types';

// Função para obter o preço base com base na categoria e tipo de serviço
export const getBasePrice = (category: ServiceCategory, serviceType: ServiceType): number => {
    if (!category || !serviceType) return 0;
    
    const prices: Record<string, number> = {
        "Landing Page de Campanha": 1500,
        "Loja Virtual (E-commerce)": 5000,
        "Blog ou Portal de Conteúdo": 3000,
        "Marketplace": 15000,
        "Aplicativo Mobile": 8000,
        "Sistema Web Personalizado": 6000,
        "Plataforma com Assinatura": 7500,
        "Progressive Web App (PWA)": 5000,
        "Site para Eventos": 1000,
        "Integrações com APIs": 1200,
        "Correção de bugs": 1000,
        "Atualização visual": 800,
        "Otimização de performance": 1500,
        "Adição de funcionalidades": 1000,
        "Manutenção de conteúdo": 400,
        "Responsividade": 1200,
        "Backup e segurança": 900,
        "Atualização de plugins": 800,
        "Integração com novos serviços": 2000,
        "Migração para nova hospedagem": 500,
        "Transformação de site antigo": 1500,
        "Evolução para aplicativo": 3500,
        "Consultoria em Arquitetura": 2500,
        "Planejamento técnico": 2000,
        "Avaliação de código": 800,
        "Treinamentos em tecnologias": 7000,
        "Mentoria para times": 9000,
        "Workshops de UX/UI": 6000,
        "Apoio na escolha de stack": 4500,
        "Mentoria para Product Owners": 7500,
    };
    
    return prices[serviceType] || 1300; 
};

export const calculatePriceAdjustment = (
    clientCount: number,
    productCount: number,
    pageCount: number,
    companySize: string
): number => {
    let priceAdjustment = 1;
    
    if (clientCount > 1000) priceAdjustment += 0.3;
    if (productCount > 100) priceAdjustment += 0.2;
    if (pageCount > 10) priceAdjustment += 0.2;
    if (companySize === "grande") priceAdjustment += 0.3;
    
    return priceAdjustment;
};

// Função para enviar dados do lead para a API de proposta
export const submitLeadData = async (leadData: LeadData): Promise<boolean> => {
    try {
        const response = await fetch('/api/send-proposal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Proposta enviada com sucesso:", data);
            return true;
        } else {
            console.error("Erro ao enviar proposta:", data.error);
            return false;
        }
    } catch (error) {
        console.error("Erro ao enviar dados do lead:", error);
        return false;
    }
}; 