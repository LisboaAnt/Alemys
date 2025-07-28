import { ServiceCategory, ServiceType } from './types';

// Função para obter o preço base com base na categoria e tipo de serviço
export const getBasePrice = (category: ServiceCategory, serviceType: ServiceType): number => {
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

// Função para calcular o ajuste de preço baseado nos detalhes do projeto
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

// Função para enviar dados do lead (placeholder para conexão com backend)
export const submitLeadData = async (leadData: any): Promise<boolean> => {
    try {
        // TODO: Implementar conexão com backend
        console.log("Dados do lead para envio:", leadData);
        
        // Simular envio bem-sucedido
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return true;
    } catch (error) {
        console.error("Erro ao enviar dados do lead:", error);
        return false;
    }
}; 