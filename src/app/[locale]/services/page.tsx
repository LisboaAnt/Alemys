import ServiceFunnel from "./components/serviceFunnel";
import ServicesGrid from "./components/servicesgrid";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl = 'https://www.alemsys.digital';
  const currentUrl = `${baseUrl}/${locale}/services`;

  return {
    title: t('services.title'),
    description: t('services.description'),
    keywords: t('services.keywords').split(','),
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt': `${baseUrl}/pt/services`,
        'en': `${baseUrl}/en/services`,
        'es': `${baseUrl}/es/services`,
        'de': `${baseUrl}/de/services`,
      },
    },
    openGraph: {
      title: t('services.title'),
      description: t('services.description'),
      url: currentUrl,
      siteName: 'Alemsys',
      locale: locale === 'pt' ? 'pt_BR' : locale,
      type: 'website',
      images: [
        {
          url: '/og-services.jpg',
          width: 1200,
          height: 630,
          alt: t('services.title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('services.title'),
      description: t('services.description'),
      images: ['/twitter-services.jpg'],
    },
    other: {
      'article:published_time': '2024-01-01T00:00:00.000Z',
      'article:modified_time': new Date().toISOString(),
    },
  };
}

export default function Services() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen">
            <section id="service-funnel" className="md:min-h-[88vh] w-full">
                <ServiceFunnel />
            </section>
            <section className="w-full">
                <ServicesGrid/>
            </section>
        </div>
    );
}