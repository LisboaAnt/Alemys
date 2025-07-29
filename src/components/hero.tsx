'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from "react"
import { useTranslations } from "next-intl"

export default function Hero() {
    const t = useTranslations('hero');
    const autoplay = useRef(
        Autoplay({
            delay: 10000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
        })
    )

    return (
        <div className="bg-blue-950 -z-0">
            <div className="flex min-h-[20em] lg:min-h-[30em] justify-center items-center bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900/1 relative overflow-hidden">
                <div className="absolute -z-1 right-0 top-0 w-[30em] sm:w-1/1 h-full lg:w-[65em] lg:h-[30em] overflow-hidden">
                    <Carousel 
                        plugins={[autoplay.current]} 
                        opts={{ 
                            loop: true,
                            duration: 200,
                            align: "start",
                            skipSnaps: false,
                        }}
                        className="w-full h-full"
                    >
                        <CarouselContent className="-ml-0">
                            <CarouselItem className="pl-0 w-full">
                                <img src="https://assets-blog.pagseguro.uol.com.br/wp-content/2023/05/shutterstock_2029125182-1-min.jpg" alt="Imagem 1" className="w-full h-full object-cover"/>
                            </CarouselItem>
                            <CarouselItem className="pl-0 w-full">
                                <img src="https://www.meuvademecumonline.com.br/blog/wp-content/uploads/2024/10/exemplos-de-empresas-que-usam-crm.jpeg" alt="Imagem 2" className="w-full h-full object-cover"/>
                            </CarouselItem>
                            <CarouselItem className="pl-0 w-full">
                                <img src="https://media.licdn.com/dms/image/v2/C4D12AQFKpLurhUjnpg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1649361497775?e=2147483647&v=beta&t=nA_gEZwezvLuZi-m1OWR7QVXmuBZzvv5MDu6TaFH0T8" alt="Imagem 3" className="w-full h-full object-cover"/>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
                <section className="mx-auto w-full flex flex-row items-center max-w-7xl relative z-10">
                    <div className="w-full px-4 md:w-1/2 flex flex-col items-start gap-6 md:gap-10 md:px-25">
                        <h1 className="text-3xl md:text-4xl font-bold text-(--background)">
                            {t('title')}
                        </h1>
                        <h4 className="text-base md:text-lg text-(--background)">
                            {t('subtitle')}
                        </h4>
                        <Link href="#contact" className="w-full">
                            <Button variant="default" size="lg" className="w-full">
                                {t('button')}
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}