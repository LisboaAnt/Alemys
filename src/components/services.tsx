import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel";
import ServiceCard from "./serviceCard";

export default function Services() {
    return (
        <section className="w-full flex justify-center py-5">
            <div className="w-7xl flex flex-col justify-center gap-3 py-5 px-10">
                <h1 className="text-2xl font-bold text-left text-(--foreground)">
                    Nossos Serviços
                </h1>
                <Carousel opts={{ loop: true }}>
                    <CarouselContent>
                    {[...Array(7)].map((_, i) => (
                        <CarouselItem key={i} className="md:basis-1/5 sm:basis-1/1">
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
        </section>
    );
}
