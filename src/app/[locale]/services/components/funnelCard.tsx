import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ReactNode } from "react";

type FunnelCardProps = {
  title: string;
  content: string;
  onClick: () => void;
  icon?: ReactNode;
};

export default function FunnelCard({ title, content, onClick, icon }: FunnelCardProps) {
  return (
    <Card
      className="flex flex-col text-center hover:shadow-lg hover:bg-gray-50 transition-all cursor-pointer hover:scale-105"
      onClick={onClick}
    >
      <CardHeader className="w-full flex flex-col">
        <div className="w-full flex justify-center">
            {icon}
        </div>
        <CardTitle className="w-full flex justify-center uppercase font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <CardDescription className="w-full flex items-center justify-center text-md">{content}</CardDescription>
      </CardContent>
    </Card>
  );
}