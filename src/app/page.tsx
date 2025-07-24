import { Footer } from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col max-w-">
      <Hero/>
      <Footer/>
    </div>
  )
}