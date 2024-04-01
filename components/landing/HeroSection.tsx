import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <div className="absolute z-0 w-full hidden md:flex flex-col justify-center items-center top-[50%] xl:top-[25%] gap-8">
        <div className="flex justify-between w-[70%]">
          <Image
            src="/adidas.svg"
            width="252"
            height="300"
            className="w-[8%] ml-4 my-2"
            alt="Ref3r logo"
          />

          <Image
            src="/reddit.svg"
            width="252"
            height="300"
            className="w-[70%] md:w-[8%] md:ml-4 my-2 "
            alt="Ref3r logo"
          />
        </div>

        <div className="flex justify-between w-[85%]">
          <Image
            src="/zara.svg"
            width="252"
            height="300"
            className="w-[70%] md:w-[8%] md:ml-4 my-2 "
            alt="Ref3r logo"
          />

          <Image
            src="/facebook.svg"
            width="252"
            height="300"
            className="w-[70%] md:w-[8%] md:ml-4 my-2 "
            alt="Ref3r logo"
          />
        </div>

        <div className="flex justify-between w-[70%]">
          <Image
            src="/puma.svg"
            width="252"
            height="300"
            className="w-[70%] md:w-[8%] md:ml-4 my-2 "
            alt="Ref3r logo"
          />

          <Image
            src="/be.svg"
            width="252"
            height="300"
            className="w-[70%] md:w-[8%] md:ml-4 my-2 "
            alt="Ref3r logo"
          />
        </div>
      </div>

      <div className="relative z-1 flex flex-col justify-center items-center w-full mt-12 md:mt-32">
        <p className="text-white font-bold text-2xl md:text-5xl text-center w-[70%]">
          <span className="text-[#61BC84]">Ref3r</span> Connecting influencers
          and brands for seamless collaborations
        </p>
        <p className="text-white font-semibold mt-10 md:text-xl w-[60%] md:w-[45%] text-center">
          Our unique platform features automate commissions and streamline
          influencer sponsorship.
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-[85%] md:w-[75%] justify-center items-center md:items-end mt-20 mb-20 md:mb-10">
          <div className="flex justify-between items-center gap-4 bg-[#2D2D2D] md:w-[50%] rounded-3xl md:rounded-2xl p-5 md:p-10">
            <div className="text-white w-[65%]">
              <p className="md:text-[1.5rem] font-bold">For Reference</p>
              <p className="text-[0.5rem] text-[#909090] md:text-xs font-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <Link className="" href="/dashboard">
              <button className="bg-[#00B24F] hover:bg-white px-4 py-2 text-[0.8rem] text-white hover:text-black rounded-2xl md:rounded-lg">
                Connect
              </button>
            </Link>
          </div>

          <div className="flex justify-between items-center gap-4 bg-[#2D2D2D] md:bg-[#058E41] md:w-[50%] rounded-3xl md:rounded-2xl p-5 md:py-16 md:px-10">
            <div className="text-white w-[65%]">
              <p className="md:text-[1.5rem] font-bold">For Brands</p>
              <p className="text-[0.5rem] md:text-xs font-bold text-[#909090] md:text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <Link className="" href="/dashboard">
              <button className="bg-[#00B24F] md:bg-white md:hover:bg-black px-4 py-2 text-[0.8rem] text-white md:text-black md:hover:text-white rounded-2xl md:rounded-lg">
                Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
