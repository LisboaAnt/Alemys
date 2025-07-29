import { Button } from "@/components/ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";

type BackButtonProps = {
  onClick: () => void;
  label?: string;
};

export default function BackButton({ onClick, label = 'Voltar' }: BackButtonProps) {
  return (
    <Button variant="ghost" onClick={onClick} className="md:absolute flex items-center mb-5 hover:bg-blue-950 hover:text-gray-50">
      <IoMdArrowRoundBack/>
      <p className="font-bold uppercase">{label}</p>
    </Button>
  );
}