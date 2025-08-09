import {
  Card,
  CardContent,
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
  return (
    <Card className="flex flex-col text-center justify-between bg-gray-50 h-full">
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