import Hero from "@/components/hero";
import ContactUs from "@/components/contact";
import Services from "@/components/services";
import AboutUs from "@/components/aboutus"

export default async function Home() {

  return (
    <div className="flex flex-col">
      <Hero/>
      <Services/>
      <AboutUs/>
      <ContactUs/>
    </div>
  )
}