import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ServiceCard from "./serviceCard";

export default function Services() {
  return (
    <section className="flex justify-center pt-10 md:pt-15">
      <div className="w-full max-w-7xl flex flex-col gap-8 px-5 md:px-10">
        <h1 className="text-2xl font-bold text-left text-foreground">
          Nossos Serviços
        </h1>
        <div className="w-full flex justify-center items-center">
            <Carousel className="w-4/6 md:w-full" opts={{ loop: true }}>
                <CarouselContent>
                    {[...Array(7)].map((_, i) => (
                    <CarouselItem
                        key={i}
                        className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                    >
                        <ServiceCard
                        title="Desenvolvimento Web"
                        description="Criamos sites modernos, rápidos e responsivos."
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