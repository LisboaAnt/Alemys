import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function Services() {
    return(
        <section className="w-full flex justify-center">
            <Carousel className="w-7xl">
                <CarouselContent>
                    <CarouselItem>Bosta</CarouselItem>
                    <CarouselItem>Fezes</CarouselItem>
                    <CarouselItem>Merda</CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    )
}