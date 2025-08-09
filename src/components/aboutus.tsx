import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutUs() {
  return (
    <section id="about" className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-900/85 to-blue-950/85 py-15 px-4 gap-10">
      <h1 className="text-2xl font-bold text-left">Sobre Nós</h1>
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-900 px-5 to-blue-950 rounded-lg">
        <div className="w-1/2 relative flex justify-center items-center">
          <img
            className="absolute w-full rounded-lg"
            src="https://agilize.com.br/blog/wp-content/uploads/2022/03/empreendedor-de-desenvolvimento-de-software.png"
          />
        </div>
        <Card className="w-1/2 bg-transparent border-0 shadow-none p-5 md:p-10 text-slate-100">
          <CardHeader className="space-y-4">
            <h1 className="text-2xl font-bold text-center">Sobre Nós</h1>
            <CardTitle className="text-3xl font-extrabold text-justify">
              Transformamos suas ideias em experiências digitais incríveis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-slate-200 text-base leading-relaxed text-justify">
              Nossa equipe é apaixonada por tecnologia, criatividade e excelência. Fundada em 2020, nossa missão é entregar soluções de software que encantam os usuários e geram valor real para nossos clientes. 
              Acreditamos que o desenvolvimento de sistemas vai além do código: envolve empatia, visão estratégica e compromisso com resultados duradouros.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}