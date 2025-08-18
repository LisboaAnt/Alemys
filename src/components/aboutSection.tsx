"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface AboutSectionProps {
    image: string;
    title: string;
    description: string;
    lado:string
}

export default function AboutSection({image, title, description, lado = "l"} : AboutSectionProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState(400);
    const [isMobile, setIsMobile] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const updateImageSize = () => {
            if (cardRef.current) {
                const cardHeight = cardRef.current.offsetHeight;
                const newImageHeight = cardHeight * 1.2; // 20% maior que o card
                
                setImageHeight(newImageHeight);
            }
        };

        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        updateImageSize();
        checkScreenSize();
        
        // Atualiza quando a janela é redimensionada
        window.addEventListener('resize', () => {
            updateImageSize();
            checkScreenSize();
        });
        
        // Atualiza após um pequeno delay para garantir que o conteúdo foi renderizado
        const timeoutId = setTimeout(() => {
            updateImageSize();
            setImageLoaded(true); // Mostra a imagem após calcular o tamanho
        }, 100);
        
        return () => {
            window.removeEventListener('resize', updateImageSize);
            clearTimeout(timeoutId);
        };
    }, [title, description]); // Recalcula quando o conteúdo muda

    return(
        <section className="max-w-6xl w-full flex flex-col md:flex-row items-center bg-gradient-to-b md:bg-gradient-to-r from-gray-100 to-gray-200 px-5 py-5 md:px-0 md:py-0 gap-6 md:gap-10 overflow-visible rounded-lg">
            
            {lado=="l" && (
            <div className="w-full md:w-1/2 md:relative flex justify-center items-center">
                {imageLoaded && (
                    <Image
                        className="block md:absolute w-full md:w-10/12 md:ml-20 rounded-lg object-cover"
                        style={{
                            height: `${imageHeight}px`,
                            top: '50%',
                            transform: isMobile ? 'none' : 'translateY(-50%)'
                        }}
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        priority={false}
                        unoptimized={false}
                    />
                )}
            </div>
            )}
            
            <Card ref={cardRef} className="w-full md:w-1/2 bg-transparent px-0 border-0 shadow-none pb-0 mt-0 pt-0 md:p-10 gap-0 text-slate-100">
                <CardHeader className="gap-1 md:gap-2 md:space-y-4 p-0 m-0">
                    <CardTitle className="text-lg p-0 m-0 md:text-3xl font-extrabold text-justify text-blue-950">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <CardDescription className="md:text-base leading-relaxed text-justify px-0 text-blue-950">
                        {description}
                    </CardDescription>
                </CardContent>
            </Card>

            {lado=="r" && (
            <div className="w-full md:w-1/2 md:relative flex justify-center items-center">
                {imageLoaded && (
                    <Image
                        className="block md:absolute w-full md:w-10/12 md:-ml-20 rounded-lg object-cover"
                        style={{
                            height: `${imageHeight}px`,
                            top: '50%',
                            transform: isMobile ? 'none' : 'translateY(-50%)'
                        }}
                        src={image}
                        alt={title}
                        width={600}
                        height={imageHeight}
                        priority={false}
                        unoptimized={true}
                    />
                )}
            </div>
            )}
            
        </section>
    )
}