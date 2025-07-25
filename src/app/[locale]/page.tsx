import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ContactUs from "@/components/contact";

export default async function Home() {

  return (
    <div className="flex flex-col">
      <Hero/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}