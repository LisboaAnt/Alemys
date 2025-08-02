import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"

export default function AboutUs() {
    return(
        <section className="w-full flex flex-col justify-center items-center bg-gradient-to-l from-blue-900 to-blue-950 pb-5">
            <Card className="flex justify-center items-center max-w-7xl w-5/6 bg-transparent border-0 shadow-none">
                <CardHeader className="flex justify-center items-center w-3/4">
                    <CardTitle className="text-3xl font-bold text-white">Sobre Nós</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center w-5/6">
                    <Separator className="w-full bg-white py-0.25"/>
                    <Card className="justify-center text-justify md:w-1/3 w-2/3">
                        <CardTitle className="w-2/3 text-center font-semibold text-lg">1. Nossa História</CardTitle>
                        <CardContent>
                            /*adicione uma história ficticia aqui*/
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </section>
    )
}