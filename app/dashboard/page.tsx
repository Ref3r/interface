
"use client";

import { useState } from "react";

import Image from "next/image";
import BrandSetup1 from "@/components/dashboard/BrandSetup1";
import InfluencerSetup1 from "@/components/dashboard/InfluencerSetup1";
import DashboardComponent from "@/components/dashboard/DashboardComponent";
import { useBrandData, useInfluencerData, usePublicKey } from "@/store";

function Dashboard() {
  const key = usePublicKey.getState().publicKey;

  const [choose, setChoose] = useState(true);
  const [brand, setBrand] = useState(false);
  const [influencer, setInfluencer] = useState(false);
  console.log("setup data");
  console.log(useBrandData.getState().key);
  console.log(useInfluencerData.getState().key);
  return (
    <>
      {useBrandData.getState().key || useInfluencerData.getState().key ? (
        <DashboardComponent />
      ) : (
        <>
          <div
            className={`bg-[#111111] h-screen flex-col items-center justify-center gap-10 ${
              choose ? "flex" : "hidden"
            }`}
          >
            <div className="text-center text-white flex flex-col gap-2">
              <div className="text-4xl font-semibold">
                Who do you want to sign up as?
              </div>
              <p>We'll personalize your setup experience accordingly.</p>
            </div>
            <div className="flex w-[50%] justify-center items-center gap-[20%]">
              <div
                onClick={() => {
                  setBrand(true);
                  setChoose(false);
                }}
                className="flex flex-col md:py-8 py-8 border-[2px] border-transparent hover:border-[#00B24F] rounded-2xl items-center gap-2 bg-[#2D2D2D] w-full cursor-pointer"
              >
                <Image
                  src="/DashboardBrand.svg"
                  width="252"
                  height="300"
                  className="w-[50%] h-[50%] object-contain p-2"
                  alt="Ref3r logo"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-white text-3xl leading-[23.4px] mb-1 text-center">
                    Brand
                  </p>
                  <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  setInfluencer(true);
                  setChoose(false);
                }}
                className="flex flex-col md:py-8 py-8 border-[2px] border-transparent hover:border-[#00B24F] rounded-2xl items-center gap-2 bg-[#2D2D2D] w-full cursor-pointer"
              >
                <Image
                  src="/DashboardAffiliate.svg"
                  width="252"
                  height="300"
                  className="w-[50%] h-[50%] object-contain p-2"
                  alt="Ref3r logo"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-white text-3xl leading-[23.4px] mb-1 text-center">
                    Influencer
                  </p>
                  <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-[#111111] min-h-screen flex justify-center items-center ${
              choose ? "hidden" : "flex"
            }`}
          >
            {brand && <BrandSetup1 />}
            {influencer && <InfluencerSetup1 />}
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;

//  {isUserExist ? <DashboardComponent /> : ""}

//  {isUserExist ? <DashboardComponent /> : ""}
