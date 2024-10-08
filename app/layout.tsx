import type { Metadata } from "next";
import { Poppins } from "@next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos que deseja usar
});

export const metadata: Metadata = {
  title: "ZapLink - Gerador de Link para o WhatsApp",
  description: "Envie mensagens personalizadas no WhatsApp em segundos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
