import React from "react";
import Image from "next/image";

function WorksBrand() {
  return (
    <div className="mt-2 mb-12 flex flex-col justify-center items-center">
      <div className="text-3xl text-white mb-20">BRAND</div>

      <div className="grid grid-cols-2 md:grid-cols-3 items-start justify-start justify-items-start w-[90%] gap-12">
        <div
          className={`flex flex-col p-8 items-center gap-2 bg-[#2D2D2D] w-full md:min-h-[430px] md:mt-20`}
        >
          <div className="px-3 text-3xl bg-[#00B24F] rounded-full text-white font-semibold">
            1
          </div>
          <Image
            src="/integration.svg"
            width="252"
            height="300"
            className="w-[40%] h-[40%] object-contain p-2"
            alt="Ref3r logo"
          />

          <div className="flex flex-col">
            <h4 className="font-semibold text-white text-5xl mb-1 text-center">
              API Integration
            </h4>
            <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
            Integrate our API to your online store for seamless referral process
            </p>
          </div>
        </div>

        <div
          className={`hidden md:flex flex-col p-8 items-center gap-2 bg-[#2D2D2D] w-full md:min-h-[430px]`}
        >
          <div className="px-3 text-3xl bg-[#00B24F] rounded-full text-white font-semibold">
            2
          </div>
          <Image
            src="/campaign.svg"
            width="252"
            height="300"
            className="w-[40%] h-[40%] object-contain p-2"
            alt="Ref3r logo"
          />

          <div className="flex flex-col">
            <h4 className="font-semibold text-white text-5xl mb-1 text-center">
              Create Campaign
            </h4>
            <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
            Create a custom campaign based on your criteria and budget
            </p>
          </div>
        </div>

        <div
          className={`hidden md:flex flex-col p-8 items-center gap-2 bg-[#2D2D2D] w-full md:min-h-[430px] mt-20`}
        >
          <div className="px-3 text-3xl bg-[#00B24F] rounded-full text-white font-semibold">
            3
          </div>
          <Image
            src="/analyse.svg"
            width="252"
            height="300"
            className="w-[40%] h-[40%] object-contain p-2"
            alt="Ref3r logo"
          />

          <div className="flex flex-col">
            <h4 className="font-semibold text-center text-white text-6xl mb-1">
              Track and Analyse
            </h4>
            <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
            Track and analyse the performance of the your campaign.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksBrand;
