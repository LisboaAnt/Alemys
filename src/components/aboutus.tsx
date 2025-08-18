import AboutSection from "./aboutSection";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("about");
  return (
    <section id="about" className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 to-blue-950 py-15 pb-20 px-4 md:gap-15 gap-10">
      <div className="max-w-7xl w-full flex flex-row justify-start items-center px-5 md:px-10">
        <h1 className="text-2xl text-gray-50 font-bold text-left">{t("sectionName")}</h1>
      </div>
      <AboutSection lado='l' image='/imgs/AboutUs/history.jpg' title={t("history.title")} description={t("history.description")}/>
      <Separator className="md:max-w-5/6 w-full bg-gradient-to-r from-gray-100/50 via-gray-200 to-gray-100/50"/>
      <AboutSection lado='l' image='/imgs/AboutUs/goals.jpg' title={t("goals.title")} description={t("goals.description")}/>
      <Separator className="md:max-w-5/6 w-full bg-gradient-to-r from-gray-100/50 via-gray-200 to-gray-100/50"/>
      <AboutSection lado='l' image='/imgs/aboutUs/team.jpg' title={t("team.title")} description={t("team.description")}/>
    </section>
  );
}