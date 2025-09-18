import { ServiceCategory, ServiceType, LeadData } from './types';

// Função para obter o preço base com base na categoria e tipo de serviço
export const getBasePrice = (category: ServiceCategory, serviceType: ServiceType): number => {
    if (!category || !serviceType) return 0;
    
    const prices: Record<string, number> = {
                "Landing Page de Campanha": 1200,
        "Loja Virtual (E-commerce)": 4000,
        "Blog ou Portal de Conteúdo": 2500,
        "Marketplace": 12000,
        "Aplicativo Mobile": 7000,
        "Sistema Web Personalizado": 5000,
        "Plataforma com Assinatura": 6000,
        "Progressive Web App (PWA)": 4000,
        "Site para Eventos": 900,
        "Integrações com APIs": 1000,
        "Correção de bugs": 900,
        "Atualização visual": 700,
        "Otimização de performance": 1200,
        "Adição de funcionalidades": 900,
        "Manutenção de conteúdo": 350,
        "Responsividade": 1000,
        "Backup e segurança": 800,
        "Atualização de plugins": 700,
        "Integração com novos serviços": 1500,
        "Migração para nova hospedagem": 400,
        "Transformação de site antigo": 1200,
        "Evolução para aplicativo": 3000,
        "Consultoria em Arquitetura": 2000,
        "Planejamento técnico": 1500,
        "Avaliação de código": 700,
        "Treinamentos em tecnologias": 5000,
        "Mentoria para times": 7000,
        "Workshops de UX/UI": 4500,
        "Apoio na escolha de stack": 3500,
        "Mentoria para Product Owners": 6000,
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
    
<<<<<<< HEAD
    if (clientCount > 1000) priceAdjustment += 0.3;
    if (productCount > 100) priceAdjustment += 0.2;
    if (pageCount > 1) priceAdjustment += (pageCount * 0.1);
    if (companySize === "grande") priceAdjustment += 0.3;
=======
    if (clientCount > 1000) priceAdjustment += 0.2;
    if (productCount > 100) priceAdjustment += 0.15;
    if (pageCount > 10) priceAdjustment += 0.15;
    if (companySize === "grande") priceAdjustment += 0.2;
>>>>>>> 42024913e8565473f0716ccc2ad7177d811ff767
    
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