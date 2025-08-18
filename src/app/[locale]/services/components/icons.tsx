import React from 'react';
import { 
    FaCode, FaTools, FaUserGraduate, FaLaptopCode, FaShoppingCart, FaBlog, 
    FaStore, FaMobile, FaCog, FaUsers, FaDesktop, FaCalendarAlt, FaPlug,
    FaBug, FaPaintBrush, FaRocket, FaPlus, FaEdit, FaTabletAlt, FaLock,
    FaSync, FaExchangeAlt, FaServer, FaArrowUp, FaMobileAlt, FaBuilding,
    FaChartLine, FaUserTie, FaLightbulb, FaGraduationCap,
    FaPalette, FaLayerGroup, FaUsersCog,  FaClock
} from "react-icons/fa";

// Função para obter ícone da categoria
export const getCategoryIcon = (category: string) => {
    switch(category) {
        case "new": return <FaCode className="text-3xl text-blue-600 mb-4" />;
        case "maintenance": return <FaTools className="text-3xl text-orange-600 mb-4" />;
        case "mentoring": return <FaUserGraduate className="text-3xl text-green-600 mb-4" />;
        default: return null;
    }
};

// Função para obter ícone do serviço
export const getServiceIcon = (service: string) => {
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

// Mapeamento por chave (independente de idioma)
export const getServiceIconByKey = (key: string) => {
    const keyMap: Record<string, React.ReactElement> = {
        // Novos
        landingPage: <FaLaptopCode className="text-2xl text-purple-600 mb-3" />,
        ecommerce: <FaShoppingCart className="text-2xl text-green-600 mb-3" />,
        blog: <FaBlog className="text-2xl text-blue-600 mb-3" />,
        marketplace: <FaStore className="text-2xl text-orange-600 mb-3" />,
        mobileApp: <FaMobile className="text-2xl text-pink-600 mb-3" />,
        customSystem: <FaCog className="text-2xl text-gray-600 mb-3" />,
        subscription: <FaUsers className="text-2xl text-indigo-600 mb-3" />,
        pwa: <FaDesktop className="text-2xl text-teal-600 mb-3" />,
        events: <FaCalendarAlt className="text-2xl text-red-600 mb-3" />,
        apiIntegration: <FaPlug className="text-2xl text-yellow-600 mb-3" />,

        // Manutenção
        bugFix: <FaBug className="text-2xl text-red-600 mb-3" />,
        visualUpdate: <FaPaintBrush className="text-2xl text-pink-600 mb-3" />,
        performance: <FaRocket className="text-2xl text-blue-600 mb-3" />,
        newFeatures: <FaPlus className="text-2xl text-green-600 mb-3" />,
        contentMaintenance: <FaEdit className="text-2xl text-orange-600 mb-3" />,
        responsive: <FaTabletAlt className="text-2xl text-purple-600 mb-3" />,
        security: <FaLock className="text-2xl text-green-700 mb-3" />,
        pluginUpdate: <FaSync className="text-2xl text-blue-500 mb-3" />,
        serviceIntegration: <FaExchangeAlt className="text-2xl text-indigo-600 mb-3" />,
        hosting: <FaServer className="text-2xl text-gray-600 mb-3" />,
        transformation: <FaArrowUp className="text-2xl text-teal-600 mb-3" />,
        appEvolution: <FaMobileAlt className="text-2xl text-pink-600 mb-3" />,

        // Mentoria
        architecture: <FaBuilding className="text-2xl text-blue-600 mb-3" />,
        planning: <FaChartLine className="text-2xl text-green-600 mb-3" />,
        codeReview: <FaUserTie className="text-2xl text-purple-600 mb-3" />,
        training: <FaLightbulb className="text-2xl text-yellow-600 mb-3" />,
        teamMentoring: <FaGraduationCap className="text-2xl text-orange-600 mb-3" />,
        uxWorkshops: <FaPalette className="text-2xl text-pink-600 mb-3" />,
        stackSupport: <FaLayerGroup className="text-2xl text-indigo-600 mb-3" />,
        productOwner: <FaUsersCog className="text-2xl text-teal-600 mb-3" />,
    };

    return keyMap[key] || <FaCog className="text-2xl text-gray-600 mb-3" />;
};

// Função para obter ícone do tamanho do projeto
export const getProjectSizeIcon = (size: string) => {
    switch(size) {
        case "small": return <FaClock className="text-3xl text-green-600 mb-4" />;
        case "medium": return <FaRocket className="text-3xl text-blue-600 mb-4" />;
        case "large": return <FaBuilding className="text-3xl text-purple-600 mb-4" />;
        default: return null;
    }
}; 