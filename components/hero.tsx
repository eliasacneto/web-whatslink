import React from "react";
import { Download, Link } from "lucide-react";
import Image from "next/image";
import HeroLogo from "../public/assets/zaplink.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-hero bg-cover min-h-full lg:p-10 pt-20 lg:pt-0 flex flex-col-reverse items-center lg:flex-row lg:justify-evenly lg:items-end w-full"
    >
      <div className="flex flex-col justify-evenly items-center w-full">
        <div className="flex flex-col items-center lg:items-start lg:mt-10">
          {/* <p className="text-center lg:text-start bg-emerald-500 w-fit px-4 py-2 rounded-full text-white font-bold mb-5">
            #01 Cleaning Service
          </p> */}

          <h1 className="text-3xl text-gray-900 text-center px-1 lg:px-0 font-bold lg:text-[60px] lg:w-[563px] lg:leading-none lg:text-start">
            Envie mensagens personalizadas no WhatsApp em segundos!
          </h1>
          <p className="mt-5 text-base lg:text-lg px-4 lg:px-0 text-center lg:w-[563px] lg:text-start">
            Com o{" "}
            <span
              className="underline underline-offset-3 font-semibold"
              style={{
                textDecorationColor: "#4ade80",
                textDecorationThickness: "2px",
              }}
            >
              ZapLink
            </span>
            , você cria links prontos para o WhatsApp com mensagens formatadas,
            de forma rápida e sem complicações.
          </p>
          <div className="flex lg:w-[600px] mt-6 mb-6 gap-4">
            <a
              href="#zaplink"
              className="flex bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 lg:px-7 lg:py-4 text-base lg:text-lg h-fit rounded-lg transition-all duration-500 "
            >
              <Link className="mr-2" size={24} />
              Criar agora
            </a>
            <a
              href="#"
              className="flex bg-gray-600 hover:bg-gray-800 text-white font-semibold px-4 py-2 lg:px-7 lg:py-4 lg:text-lg h-fit rounded-lg transition-all duration-500 "
            >
              <Download className="mr-2" /> Extensão
            </a>
          </div>
        </div>
      </div>
      <div className="flex -mt-2 -mb-10 lg:-mb-0 lg:mt-0 lg:py-0 bg-transparent flex-col lg:flex-row w-[40%] justify-center items-center lg:items-start lg:justify-center">
        <div className="lg:w-[100%] flex lg:items-start lg:justify-start">
          <Image
            className="flex items-center justify-center lg:min-w-full h-auto lg:h-[600px] "
            src={HeroLogo}
            width={0}
            height={0}
            alt="hero-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
