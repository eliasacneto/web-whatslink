import type { Metadata } from "next";
import { Poppins } from "@next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "WhatsLink - Gerador de links personalizados para WhatsApp",
  description:
    "Crie e envie mensagens personalizadas no WhatsApp em segundos! Gere links rápidos e fáceis com estilos prontos.",
};

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${poppins.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
