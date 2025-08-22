import { NavigationMenuDemo } from "@/components/navbar";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/config";
import Footer from "@/components/footer";

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Props) {
  // Aguardar os parâmetros
  const { locale } = await params;
  
  // Buscar as mensagens para o locale atual
  const messages = await getMessages({locale});
  
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <NavigationMenuDemo />
      {children}
      <Footer/>
    </NextIntlClientProvider>
  );
}
