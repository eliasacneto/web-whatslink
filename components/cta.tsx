import { Download, Link } from "lucide-react";
import React from "react";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-800 mx-4 md:mx-10 lg:mx-14 px-20 lg:px-5 py-10 rounded-2xl shadow-xl">
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-4">
        <div className="flex flex-col justify-around items-center w-full gap-4">
          <h1 className="text-white font-bold text-2xl text-center lg:text-start lg:text-4xl lg:w-[500px]">
            Crie o seu{" "}
            <span
              className="underline underline-offset-3 font-semibold"
              style={{
                textDecorationColor: "#4ade80",
                textDecorationThickness: "2px",
              }}
            >
              WhatsLink
            </span>{" "}
            gratuitamente!
          </h1>
          <p className="text-gray-400 font-medium text-center lg-sm lg:text-start lg:text-lg md:w-[300px] lg:w-[500px]">
            Seja para negócios ou conversas pessoais, criamos a ferramenta ideal
            para personalizar suas mensagens e compartilhar no WhatsApp.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full h-fit gap-4 ">
          <a
            href="#whatslink"
            className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 lg:px-7 py-4 lg:text-lg rounded-lg transition-all duration-500 "
          >
            <Link />
            Criar agora
          </a>

          <a
            href="#"
            className="flex justify-center items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 lg:px-7 py-4 lg:text-lg rounded-lg transition-all duration-500 "
          >
            <Download />
            Baixar extensão
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
