// Tipos para o funil de leads
export type ServiceCategory = "new" | "maintenance" | "mentoring" | null;
export type ServiceType = string | null;
export type ProjectSize = "small" | "medium" | "large" | null;

export type LeadData = {
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

export type StepProps = {
  leadData: LeadData;
  setLeadData: (data: LeadData) => void;
  setStep: (step: number) => void;
}; 