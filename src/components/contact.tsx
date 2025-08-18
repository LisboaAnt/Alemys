import ContactForm from "./contactForm";
import ContactCard from "./contactCard";
import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="w-full flex flex-col justify-center items-center py-10 md:py-15">
      <div className="w-full max-w-7xl flex flex-col md:px-10 md:gap-5">
        <h1 className="text-2xl font-bold text-left text-foreground pl-8 md:pl-0">
          {t("sectionName")}
        </h1>

        <div className="flex flex-col md:flex-row m-1 ">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <ContactCard />
          </div>
          <div
            className="w-full md:w-1/2 flex justify-center items-center
              border-t-2 border-blue-950 md:border-t-0 md:border-l-2 md:border-blue-950 pt-5 md:pt-0"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}