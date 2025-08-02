import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ReactNode } from "react";
import { useTranslations } from 'next-intl';

type FunnelCardProps = {
  title: string;
  content: string;
  onClick: () => void;
  icon?: ReactNode;
  disabled?: boolean;
};

export default function FunnelCard({ title, content, onClick, icon, disabled = false }: FunnelCardProps) {
  const t = useTranslations('services.steps');
  
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <Card
      className={`flex flex-col text-center transition-all ${
        disabled
          ? "bg-gray-200 opacity-90 cursor-not-allowed"
          : "hover:shadow-lg hover:bg-gray-50 cursor-pointer hover:scale-105"
      }`}
      onClick={handleClick}
    >
      <CardHeader className="w-full flex flex-col">
        <div className="w-full flex justify-center">
            <div className={disabled ? "" : ""}>{icon}</div>
        </div>
        <CardTitle className={`w-full flex flex-col justify-center uppercase font-semibold ${
          disabled ? "text-gray-800" : ""
        }`}>
          {title}
          {disabled && <span className="ml-2 text-xs normal-case">{t('disabledServices')}</span>}
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <CardDescription className={`w-full flex items-center justify-center text-md ${
          disabled ? "text-gray-400" : ""
        }`}>
          {content}
        </CardDescription>
      </CardContent>
    </Card>
  );
}