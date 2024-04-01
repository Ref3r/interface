import React from "react";
import Image from "next/image";

function FeatureAffiliate() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full">
      <div className="text-white flex flex-col items-center md:items-start text-center md:text-start">
        <Image
          src="/features-bullet.png"
          width="60"
          height="300"
          className="hidden md:flex sm:w-[9%] my-2"
          alt="Ref3r logo"
        />
        <div className="flex flex-col gap-3 items-center md:items-start">
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Unlock Your Earning Potential with Our Referral Code Tool
          </p>
          <p className="w-[85%] md:w-[70%] sm:text-lg">
            Our innovative referral code tool empowers influencers to earn
            commissions seamlessly across different marketplaces.
          </p>
          <button className="bg-[#00B24F] px-4 py-2 text-[0.8rem] text-white rounded-2xl md:rounded-lg md:w-[20%]">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/features-Padlock.svg"
          width="252"
          height="300"
          className="sm:w-[70%] md:w-[100%]"
          alt="Ref3r logo"
        />
      </div>
    </div>
  );
}

export default FeatureAffiliate;
