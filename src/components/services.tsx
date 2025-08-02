import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ServiceCard from "./serviceCard";

import {
  IoCodeSlash,
  IoPhonePortraitOutline,
  IoColorPaletteOutline,
  IoCartOutline,
  IoSettingsOutline,
  IoSearchOutline,
  IoHardwareChipOutline,
} from "react-icons/io5";


export default function Services() {
  const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criamos sites e aplicações modernas, rápidas e responsivas.",
    icon: <IoCodeSlash className="mx-auto text-3xl text-primary" />,
  },
  {
    title: "Aplicativos Mobile",
    description: "Desenvolvemos apps Android e iOS com excelente performance.",
    icon: <IoPhonePortraitOutline className="mx-auto text-3xl text-primary" />,
  },
  {
    title: "Design UI/UX",
    description: "Projetamos interfaces intuitivas e atraentes para o seu público.",
    icon: <IoColorPaletteOutline className="mx-auto text-3xl text-primary" />,
  },
  {
    title: "E-commerce",
    description: "Montamos lojas virtuais completas e seguras para seu negócio.",
    icon: <IoCartOutline className="mx-auto text-3xl text-primary" />,
  },
  {
    title: "Consultoria Técnica",
    description: "Ajudamos sua empresa a tomar decisões tecnológicas estratégicas.",
    icon: <IoHardwareChipOutline className="mx-auto text-3xl text-primary" />,
  },
  {
    title: "SEO e Marketing Digital",
    description: "Melhore seu alcance com otimização e campanhas digitais.",
    icon: <IoSearchOutline className="mx-auto text-3xl text-primary" />,
  },
  {
    title: "Automação",
    description: "Automatizamos tarefas repetitivas para ganho de produtividade.",
    icon: <IoSettingsOutline className="mx-auto text-3xl text-primary" />,
  },
];
  return (
    <section className="flex justify-center pt-10 md:py-15 py-10">
      <div className="w-full max-w-7xl flex flex-col gap-8 px-5 md:px-10">
        <h1 className="text-2xl font-bold text-left text-foreground">
          Nossos Serviços
        </h1>
        <div className="w-full flex justify-center items-center">
            <Carousel className="w-4/6 md:w-full" opts={{ loop: true }}>
                <CarouselContent>
                    {services.map((service, i) => (
  <CarouselItem
    key={i}
    className="h-1rem basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
  >
    <ServiceCard
      title={service.title}
      description={service.description}
      icons={service.icon}
    />
  </CarouselItem>
))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
      </div>
    </section>
  );
}