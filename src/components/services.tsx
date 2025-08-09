import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ServiceCard from "./serviceCard";
import { useTranslations } from "next-intl";
import { getServiceIconByKey } from "@/app/[locale]/services/components/icons";

const SERVICE_KEYS = {
  new: [
    "landingPage",
    "ecommerce",
    "blog",
    "marketplace",
    "mobileApp",
    "customSystem",
    "subscription",
    "pwa",
    "events",
    "apiIntegration",
  ],
  maintenance: [
    "bugFix",
    "visualUpdate",
    "performance",
    "newFeatures",
    "contentMaintenance",
    "responsive",
    "security",
    "pluginUpdate",
    "serviceIntegration",
    "hosting",
    "transformation",
    "appEvolution",
  ],
  mentoring: [
    "architecture",
    "planning",
    "codeReview",
    "training",
    "teamMentoring",
    "uxWorkshops",
    "stackSupport",
    "productOwner",
  ],
} as const;

type CategoryKey = keyof typeof SERVICE_KEYS;

export default function Services() {
  const tStep2 = useTranslations("services.steps.step2");
  const tRoot = useTranslations("services");

  const allServices = (Object.keys(SERVICE_KEYS) as CategoryKey[]).flatMap(
    (category) => {
      const categoryLabel = tStep2(`categories.${category}`);
      return SERVICE_KEYS[category].map((key) => {
        const title = tStep2(`services.${category}.${key}`);
        return {
          title,
          description: categoryLabel,
          icon: getServiceIconByKey(key),
        };
      });
    }
  );

  return (
    <section className="flex justify-center pt-10 md:py-15 py-10">
      <div className="w-full max-w-7xl flex flex-col gap-8 px-5 md:px-10">
        <h1 className="text-2xl font-bold text-left text-foreground">
          {tRoot("title")}
        </h1>
        <div className="w-full flex justify-center items-center">
          <Carousel className="w-4/6 md:w-full" opts={{ loop: true }}>
            <CarouselContent>
              {allServices.map((service, i) => (
                <CarouselItem
                  key={i}
                  className="h-1rem basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icons={service.icon}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}