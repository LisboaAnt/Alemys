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
        <section className="w-full flex flex-col justify-center items-center bg-slate-100 py-10">
            <div className="max-w-7xl w-4/5 flex md:flex-row flex-col justify-center items-center bg-gradient-to-r from-blue-900 to-blue-950">
                <div className="w-full flex justify-center items-center">
                    <img
                        className="absolute w-2/6"
                        src="https://agilize.com.br/blog/wp-content/uploads/2022/03/empreendedor-de-desenvolvimento-de-software.png"
                    />
                </div>
                <Card className="w-full bg-transparent border-0 shadow-none">
                    <CardHeader>
                        <h1 className="text-2xl font-bold text-left text-slate-100">About Us</h1>
                        <CardTitle></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription></CardDescription>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}