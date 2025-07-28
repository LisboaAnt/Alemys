import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ContactUs from "@/components/contact";
import Services from "@/components/services";

export default async function Home() {

  return (
    <div className="flex flex-col">
      <Hero/>
      <Services/>
      <ContactUs/>
    </div>
  )
}