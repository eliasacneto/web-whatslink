import Image from "next/image";
import React from "react";
import BenefitsImg from "../public/assets/example1.png";

const Benefits = () => {
  return (
    <div
      className="bg-dark bg-cover w-full justify-center items-center h-full text-white mb-20"
      id="benefits"
    >
      <div className="flex">
        <div className="flex flex-col w-fit">
          <span className="bg-green-100 text-green-500 px-4 py-1 w-fit rounded-full">
            Benefícios
          </span>
          <h1 className="w-[600px] font-bold lg:leading-none lg:text-[48px] mt-4">
            Gain more insight into how people use your
          </h1>
          <p className="w-[600px] text-gray-400 mt-6">
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage your business in one secure
            platform.
          </p>
        </div>
        <div className="flex">
          <Image
            src={BenefitsImg}
            alt="benefits-img "
            width={550}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
