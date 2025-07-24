'use client'

import { Button } from "./ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from "react"

export default function Hero() {
    const plugin = useRef(
        Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    )

    return (
        <div className="flex bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900/50 lg:min-h-[30em] justify-center items-center ">
                <div className="absolute -z-1 right-0 lg:w-[65em] h-[30em] overflow-hidden">
                    <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
                        <CarouselContent>
                            <CarouselItem>
                                <img src="https://assets-blog.pagseguro.uol.com.br/wp-content/2023/05/shutterstock_2029125182-1-min.jpg" alt="Imagem 1"/>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            
            <section className="mx-auto w-full flex flex-row items-center max-w-7xl">
                <div className="w-1/2 flex flex-col items-start gap-10 px-25">
                    <h1 className="text-4xl font-bold text-white">
                        Soluções que vão além do código, além do óbvio.
                    </h1>
                    <h4 className="text-lg">
                        Transforme ideias em resultados com tecnologia, criatividade e inovação.
                    </h4>
                    <Button variant="default" size="lg" className="px-8">
                        Fale conosco
                    </Button>
                </div>
            </section>
        </div>
    )
}