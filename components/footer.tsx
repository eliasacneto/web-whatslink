import Image from "next/image";
import React from "react";
import Logo from "../public/assets/zaplink.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-footer bg-contain w-full h-full flex flex-col justify-center items-start pl-6 gap-4 lg:justify-around  p-10 lg:px-6 lg:py-6   lg:pt-8 lg:pb-10 text-gray-900">
      <div className="flex w-full justify-around">
        <div className="flex flex-col justify-center items-center lg:items-center  ">
          <Image className="" src={Logo} alt="logo" width={100} height={100} />

          <span
            className="underline underline-offset-3 font-extrabold text-2xl -mt-6"
            style={{
              textDecorationColor: "#4ade80",
              textDecorationThickness: "2px",
            }}
          >
            <span className="text-green-600">Z</span>apLink
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="text-gray-400">© 2024 ZapLink. All rights reserved.</h3>
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
