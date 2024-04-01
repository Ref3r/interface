import React from "react";
import Image from "next/image";

function FeatureBrand() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full">
      <div className="text-white flex flex-col items-center md:items-start text-center md:text-start md:w-[60%]">
        <Image
          src="/features-bullet.png"
          width="60"
          height="300"
          className="hidden md:flex sm:w-[9%] my-2"
          alt="Ref3r logo"
        />
        <div className="flex flex-col gap-3 items-center md:items-start">
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Tap into the ever-growing Pool affiliates and marketers to grow your
            brand reach
          </p>
          {/* <p className="w-[85%] md:w-[70%] sm:text-lg">
            Our innovative referral code tool empowers influencers to earn
            commissions seamlessly across different marketplaces.
          </p> */}
          <button className="bg-[#00B24F] px-4 py-2 text-[0.8rem] text-white rounded-2xl md:rounded-lg md:w-[20%]">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center md:w-[40%]">
        <Image
          src="/features-Magnifying-Glass.svg"
          width="252"
          height="300"
          className="sm:w-[70%] md:w-[88%]"
          alt="Ref3r logo"
        />
      </div>
    </div>
  );
}

export default FeatureBrand;
