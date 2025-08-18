import Hero from "@/components/hero";
import ContactUs from "@/components/contact";
import Services from "@/components/services";
import AboutUs from "@/components/aboutus"
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl = 'https://alemsys.digital';
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: t('home.title'),
    description: t('home.description'),
    keywords: t('home.keywords').split(','),
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt': `${baseUrl}/pt`,
        'en': `${baseUrl}/en`,
        'es': `${baseUrl}/es`,
        'de': `${baseUrl}/de`,
      },
    },
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      url: currentUrl,
      siteName: 'Alemsys',
      locale: locale === 'pt' ? 'pt_BR' : locale,
      type: 'website',
      images: [
        {
          url: '/og-home.jpg',
          width: 1200,
          height: 630,
          alt: t('home.title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
      images: ['/twitter-home.jpg'],
    },
    other: {
      'article:published_time': '2024-01-01T00:00:00.000Z',
      'article:modified_time': new Date().toISOString(),
    },
  };
}

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