import ServiceCard from "@/components/serviceCard";
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
  /* 
  mentoring: [
    "architecture",
    "planning",
    "codeReview",
    "training",
    "teamMentoring",
    "uxWorkshops",
    "stackSupport",
    "productOwner",
  ],*/
} as const;

type CategoryKey = keyof typeof SERVICE_KEYS;

export default function ServicesGrid() {
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
    <section className="flex justify-center py-10 md:pb-10 md:pt-0">
      <div className="w-full max-w-7xl flex flex-col gap-8 px-5 md:px-10">
        <h1 className="text-2xl font-bold text-left text-foreground">
          {tRoot("title")}
        </h1>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allServices.map((service, i) => (
              <div key={i} className="h-full">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icons={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}