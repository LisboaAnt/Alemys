import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icons: ReactNode;
};

export default function ServiceCard({ title, description, icons }: ServiceCardProps) {
  const handleClick = () => {
    // Navega para a seção do ServiceFunnel usando anchor
    const element = document.getElementById('service-funnel');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Card 
      className="flex flex-col text-center justify-between bg-gray-50 h-full cursor-pointer hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
      onClick={handleClick}
    >
      <CardHeader>
        <div className="flex justify-center items-center">
          {icons}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}