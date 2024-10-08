"use client";

import Hero from "@/components/hero";
import Loader from "@/components/loader";
import ZapCard from "@/components/zapCard";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import HowWorks from "@/components/howWorks";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scrollToTop";
import CTA from "@/components/cta";
import { Badge } from "@/components/ui/badge";
import Logo from "../public/assets/wl-logo.png";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex fixed items-center z-40 bg-white w-full lg:hidden px-6 py-6 ">
        <a href="#" className="flex items-center font-bold">
          <Image src={Logo} alt="logoo" width={50} height={50} />
          <h1>WhatsLink</h1>
        </a>

        <button
          onClick={toggleMenu}
          className="fixed flex items-center top-2 right-0 p-4 z-40 lg:hidden lg:bg-none  rounded-lg"
        >
          <MenuIcon size={28} className="text-green-500 font-bold" />
        </button>
      </div>

      {/* Menu */}
      <header className="fixed w-full lg:bg-white bg-transparent h-12 md:h-24 px-8 md:px-12 lg:px-8 xl:px-28 flex gap-8 items-center bg-white-900 text-white antialiased font-bold mb-6 lg:mb-0 shadow-lg">
        <a
          href="#"
          className="flex items-center font-bold text-gray-800 text-xl"
        >
          <Image src={Logo} alt="logoo" width={50} height={50} />
          <h1>WhatsLink</h1>
        </a>

        <div
          className={`fixed lg:relative top-0 left-0 bg-green-50 z-20 lg:bg-transparent bg-opacity-95 text-center overflow-hidden transition-all duration-500 flex flex-col lg:flex-row gap-8 items-center justify-center w-full lg:h-full lg:opacity-100 ${
            isMenuOpen ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
        >
          <nav className="lg:flex-1 justify-center flex gap-8 flex-col lg:flex-row text-center lg:ml-16">
            <a
              className=" text-green-500 text-base font-semibold transition-all duration-500"
              href="/"
              onClick={() => closeMenuOnClick("#")}
            >
              Início
            </a>

            <a
              className=" text-gray-500 hover:text-green-500 text-base font-medium transition-all duration-500"
              href="#how-to-use"
              onClick={() => closeMenuOnClick("#how")}
            >
              Como Funciona
            </a>

            {/* <a
              className=" text-gray-500 hover:text-green-500 text-base font-medium transition-all duration-500"
              href="#benefits"
              onClick={() => closeMenuOnClick("#about")}
            >
              Porque usar
            </a> */}

            <a
              className=" text-gray-500 hover:text-green-500 text-base font-medium transition-all duration-500"
              href="#extension"
              onClick={() => closeMenuOnClick("#services")}
            >
              Nossa Extensão{" "}
              <Badge className="bg-green-100 text-green-500 font-medium hover:bg-green-200 hover:text-green-600">
                em breve
              </Badge>
            </a>
          </nav>

          <div className="flex items-center flex-col gap-5 lg:flex-row lg:gap-5">
            {/* <a
              href="#whatslink"
              className="flex w-full px-4 py-4 lg:px-2 lg:py-2 rounded-lg text-base text-center justify-center items-center font-semibold text-slate-500 hover:text-green-500 transition-all duration-500  hover:font-semibold"
              onClick={() => closeMenuOnClick("#hero")}
            >
              Experimentar
            </a> */}
            <a
              href="#whatslink"
              className="flex w-full px-4 py-4 bg-green-500 rounded-lg text-base font-semibold text-white hover:bg-green-600 transition-all duration-500 hover:font-semibold"
              onClick={() => closeMenuOnClick("#hero")}
            >
              Experimentar
            </a>
            {/* <a
              href="#extension"
              className="flex w-full px-4 py-4 bg-green-500 rounded-lg text-base font-semibold text-white hover:bg-green-600 transition-all duration-500 hover:font-semibold"
              onClick={() => closeMenuOnClick("#hero")}
            >
              <Download className="mr-2" />
              Extensão
            </a> */}
          </div>
        </div>
      </header>
      <Hero />
      <HowWorks />
      {/* <Benefits /> */}
      <ZapCard />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}
