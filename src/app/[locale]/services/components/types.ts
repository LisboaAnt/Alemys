// Tipos para o funil de leads
export type ServiceCategory = "new" | "maintenance" | "mentoring" | null;
export type ServiceType = string | null;
export type ProjectSize = "small" | "medium" | "large" | null;

export type LeadData = {
  category: ServiceCategory;
  serviceType: ServiceType;
  projectSize: ProjectSize;
  
  // Campos para projetos novos
  clientCount?: number;
  productCount?: number;
  pageCount?: number;
  companySize?: string;
  
  // Campos para manutenção
  currentComplexity?: string;
  affectedFunctionalities?: number;
  urgencyLevel?: string;
  hasDocumentation?: string;
  
  // Campos para mentoria
  teamSize?: number;
  experienceLevel?: string;
  sessionDuration?: string;
  mentorshipType?: string;
  
  // Campos comuns
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  estimatedPrice?: number;
};

// Tipo para dados de atualização do lead
export type LeadDataUpdate = Partial<LeadData>;

export type StepProps = {
  leadData: LeadData;
  setLeadData: (data: LeadData) => void;
  setStep: (step: number) => void;
}; 