import AboutSection from "./aboutSection";
import { Separator } from "@/components/ui/separator";

export default function AboutUs() {
  return (
    <section id="about" className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 to-blue-950 py-15 pb-20 px-4 md:gap-15 gap-10">
      <div className="max-w-7xl w-full flex flex-row justify-start items-center px-5 md:px-10">
        <h1 className="text-2xl text-gray-50 font-bold text-left">Sobre Nós</h1>
      </div>
      <AboutSection lado='l' image='https://agilize.com.br/blog/wp-content/uploads/2022/03/empreendedor-de-desenvolvimento-de-software.png' title='Nossa História' description="Fundada em 2015, nossa empresa nasceu do sonho de transformar ideias inovadoras em soluções digitais de alto impacto. Começamos como um pequeno time apaixonado por tecnologia, trabalhando em um escritório improvisado, e hoje atendemos clientes em todo o Brasil com projetos que unem criatividade, estratégia e qualidade técnica."/>
      <Separator className="md:max-w-5/6 w-full bg-gradient-to-r from-gray-100/50 via-gray-200 to-gray-100/50"/>
      <AboutSection lado='l' image='https://agilize.com.br/blog/wp-content/uploads/2022/03/empreendedor-de-desenvolvimento-de-software.png' title='Nossa História' description="Fundada em 2015, nossa empresa nasceu do sonho de transformar ideias inovadoras em soluções digitais de alto impacto. Começamos como um pequeno time apaixonado por tecnologia, trabalhando em um escritório improvisado, e hoje atendemos clientes em todo o Brasil com projetos que unem criatividade, estratégia e qualidade técnica."/>
    </section>
  );
}