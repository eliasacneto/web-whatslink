import Image from "next/image";
import React from "react";
import Logo from "../public/assets/wl-logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-footer bg-contain w-full h-full flex flex-col justify-center items-start pl-6 gap-4 lg:justify-around  p-10 lg:px-6 lg:py-6   lg:pt-8 lg:pb-10 text-gray-900">
      <div className="flex w-full justify-around">
        <div className="flex flex-col justify-center items-center lg:items-center  ">
          <a href="#" className="flex flex-col text-2xl items-center font-bold">
            <Image src={Logo} alt="logoo" width={80} height={80} />
            <h1>WhatsLink</h1>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="text-gray-400">
          © 2024 WhatsLink. All rights reserved.
        </h3>
        <p className="text-gray-400">
          Developed by{" "}
          <Link
            href="https://eliasacneto.vercel.app"
            target="_blank"
            className="text-green-600 hover:text-green-700 transition-all duration-500 "
          >
            @eliasacneto
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
