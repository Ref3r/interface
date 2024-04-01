import React from "react";
import Image from "next/image";
import Link from "next/link";

function OfferSection() {
  return (
    <div className="mt-10 mb-32 flex flex-col justify-center items-center">
      <div className="py-2 px-4 bg-[#61BC8463] rounded-3xl text-sm text-white font-semibold mb-20">
        What we offer
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center justify-items-center w-[90%] gap-5">
        {/* <div className="flex flex-row flex-wrap sm:flex-nowrap gap-5 justify-center"> */}
        <div
          className={`flex flex-col md:py-8 py-8 border-[3px] border-[#00B24F] rounded-2xl items-center gap-2 bg-[#2D2D2D] w-full md:min-h-[510px]`}
        >
          <Image
            src="/BrandSetup.svg"
            width="252"
            height="300"
            className="w-[70%] h-[70%] min-h-[240px] object-contain p-2"
            alt="Ref3r logo"
          />

          <div className="flex flex-col">
            <h4 className="font-semibold text-white text-[18px] leading-[23.4px] mb-1 text-center">
              Brand Account Setup
            </h4>
            <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
              Set up your brand account effortlessly. Provide your brand name,
              logo, and referral details to start your referral journey.
            </p>
          </div>

          {/* <Link className="" href="/dashboard">
            <button className="bg-[#00B24F] hover:bg-white px-4 py-2 text-[0.8rem] text-white hover:text-black rounded-2xl md:rounded-lg">
              Connect
            </button>
          </Link> */}
        </div>

        <div
          className={`flex flex-col md:py-8 py-8 border-[3px] border-[#00B24F] rounded-2xl items-center gap-2 bg-[#2D2D2D] w-full md:min-h-[510px]`}
        >
          <Image
            src="/InfluencerSetup.svg"
            width="252"
            height="300"
            className="w-[70%] h-[70%] min-h-[240px] object-contain p-2"
            alt="Ref3r logo"
          />

          <div className="flex flex-col">
            <h4 className="font-semibold text-white text-[18px] leading-[23.4px] mb-1 text-center">
              Influencer Account Setup
            </h4>
            <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
              Influencers, integrate your Web2 accounts, manage your details,
              and generate a unique ID for your wallet. It&#39;s all about
              simplicity.
            </p>
          </div>

          {/* <Link className="" href="/dashboard">
            <button className="bg-[#00B24F] hover:bg-white px-4 py-2 text-[0.8rem] text-white hover:text-black rounded-2xl md:rounded-lg">
              Connect
            </button>
          </Link> */}
        </div>

        <div
          className={`flex flex-col md:py-8 py-8 border-[3px] border-[#00B24F] rounded-2xl items-center gap-2 bg-[#2D2D2D] w-full md:min-h-[510px]`}
        >
          <Image
            src="/Ecosystem.svg"
            width="252"
            height="300"
            className="w-[70%] h-[70%] min-h-[240px] object-contain p-2"
            alt="Ref3r logo"
          />

          <div className="flex flex-col">
            <h4 className="font-semibold text-center text-white text-[18px] leading-[23.4px] mb-1">
              Ecosystem
            </h4>
            <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
              Become a part of an ever-growing network of brands and affiliates
              Discover suitable partners wit ease through the use of various
              filters such as Tags, Niches and analytics.
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col md:py-8 py-8 border-[3px] border-[#00B24F] rounded-2xl items-center gap-2 bg-[#2D2D2D] w-full md:min-h-[510px]`}
        >
          <Image
            src="/AnalyticTool.svg"
            width="252"
            height="300"
            className="w-[70%] h-[70%] min-h-[240px] object-contain p-2"
            alt="Ref3r logo"
          />

          <div className="flex flex-col">
            <h4 className="font-semibold text-white text-[18px] leading-[23.4px] mb-1 text-center">
              Analytic Tool
            </h4>
            <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
              Track and analyze campaign performance and referrals with all
              relevant metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
