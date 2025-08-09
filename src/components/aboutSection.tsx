import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface AboutSectionProps {
    image: string;
    title: string;
    description: string;
    lado:string
}

export default function AboutSection({image, title, description, lado = "l"} : AboutSectionProps) {
    return(
        <section className="max-w-6xl w-full flex flex-col md:flex-row items-center bg-gradient-to-b md:bg-gradient-to-r from-gray-100 to-gray-200 px-5 py-5 md:px-0 md:py-0 gap-6 md:gap-10 overflow-visible md:pb-0 rounded-lg">
            
            {lado=="l" && (
            <div className="w-full md:w-1/2 h-full md:h-0 md:relative flex justify-center items-center md:-bottom-35 md:mb-0">
                <img
                    className="block md:absolute w-full md:w-10/11 md:ml-25 md:-bottom-7 rounded-lg"
                    src={image}
                />
            </div>
            )}
            <Card className="w-full md:w-1/2 bg-transparent px-0 border-0 shadow- pb-0 mt-0 pt-0 md:p-10 gap-0 text-slate-100 border-none shadow-none">
                <CardHeader className="gap-0 md:space-y-4 p-0 m-0">
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
            <div className="w-full md:w-1/2 h-full md:h-0 md:relative flex justify-center items-center md:-bottom-35 md:mb-0">
                <img
                    className="hidden md:block md:absolute w-full md:w-10/11 md:-ml-20 md:-bottom-7 md:rounded-lg"
                    src={image}
                />
            </div>
            )}
            
        </section>
    )
}