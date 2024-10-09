import type { Metadata } from "next";
import { Poppins } from "@next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Adicione os pesos que deseja usar
});

export const metadata: Metadata = {
  title: "WhatsLink - Gerador de links personalizados para WhatsApp",
  description:
    "Crie e envie mensagens personalizadas no WhatsApp em segundos! Gere links rápidos e fáceis com estilos prontos.",
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
