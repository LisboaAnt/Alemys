import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { IoMdArrowRoundBack } from "react-icons/io";

type BackButtonProps = {
  onClick: () => void;
  label?: string;
};

export default function BackButton({ onClick, label = 'Voltar' }: BackButtonProps) {
  const t = useTranslations('services.steps');
  
  return (
    <Button variant="ghost" onClick={onClick} className="md:absolute flex items-center md:mb-5 hover:bg-blue-900 hover:text-gray-50">
      <IoMdArrowRoundBack/>
      <p className="font-bold uppercase">{t('backButton')}</p>
    </Button>
  );
}