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
import { useRef, useState } from "react"

export default function Hero() {
    // Criando o plugin com um delay de 5000ms (5 segundos)
    const [api, setApi] = useState<any>()
    const autoplay = useRef(
        Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
        })
    )

    return (
        <div className="flex lg:min-h-[30em] justify-center items-center bg-gradient-to-r from-blue-950 via-blue-950 to-[rgba(0,0,0,0)]">
            <div className="absolute -z-1 right-0 lg:w-[65em] h-[30em] overflow-hidden">
                <Carousel 
                    plugins={[autoplay.current]} 
                    setApi={setApi}
                    opts={{ 
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <img src="https://assets-blog.pagseguro.uol.com.br/wp-content/2023/05/shutterstock_2029125182-1-min.jpg" alt="Imagem 1"/>
                        </CarouselItem>
                        <CarouselItem>
                            <img src="https://www.meuvademecumonline.com.br/blog/wp-content/uploads/2024/10/exemplos-de-empresas-que-usam-crm.jpeg" alt="Imagem 2"/>
                        </CarouselItem>
                        <CarouselItem>
                            <img src="https://media.licdn.com/dms/image/v2/C4D12AQFKpLurhUjnpg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1649361497775?e=2147483647&v=beta&t=nA_gEZwezvLuZi-m1OWR7QVXmuBZzvv5MDu6TaFH0T8" alt="Imagem 3"/>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                </Carousel>
            </div>
            <section className="mx-auto w-full flex flex-row items-center max-w-7xl">
                <div className="w-1/2 flex flex-col items-start gap-10 px-25">
                    <h1 className="text-4xl font-bold text-(--background)">
                        Soluções que vão além do código, além do óbvio.
                    </h1>
                    <h4 className="text-lg text-(--background)">
                        Transforme ideias em resultados com tecnologia, criatividade e inovação.
                    </h4>
                    <Button variant="default" size="lg" className="w-full">
                        Fale conosco
                    </Button>
                </div>
            </section>
        </div>
    )
}