"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandSetup3 from "./BrandSetup3";

function BrandSetup2() {
  const [choose, setChoose] = useState(true);
  return (
    <>
      <div
        className={`w-[90%] justify-center gap-10 ${
          choose ? "flex" : "hidden"
        } `}
      >
        <div className="w-[50%] text-white flex flex-col gap-4 my-10">
          <p className="text-3xl font-semibold">Connect Your Social</p>

          <div className="ml-2 flex flex-col gap-4">
            <div className="flex flex-col gap-3 w-[70%] bg-[#27292D] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/instagram.svg"
                    width="252"
                    height="300"
                    className="w-[50%]"
                    alt="Ref3r logo"
                  />
                  <p>Instagram</p>
                </div>
                <button className="bg-[#00B24F] px-4 py-2 text-white rounded-2xl w-[30%]">
                  Authorise
                </button>
              </div>
              <p className="text-[#909090]">
                Captivate your audience with visually stunning stories and build
                deeper connections.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-[70%] bg-[#27292D] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/facebook.svg"
                    width="252"
                    height="300"
                    className="w-[50%]"
                    alt="Ref3r logo"
                  />
                  <p>Facebook</p>
                </div>
                <button className="bg-[#00B24F] px-4 py-2 text-white rounded-2xl w-[30%]">
                  Authorise
                </button>
              </div>
              <p className="text-[#909090]">
                Targeted advertising, massive user base, and diverse engagement
                tools for building communities.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-[70%] bg-[#27292D] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/twitter.svg"
                    width="252"
                    height="300"
                    className="w-[50%]"
                    alt="Ref3r logo"
                  />
                  <p>Twitter</p>
                </div>
                <button className="bg-[#00B24F] px-4 py-2 text-white rounded-2xl w-[30%]">
                  Authorise
                </button>
              </div>
              <p className="text-[#909090]">
                Real-time conversations, breaking news, and cultural pulse -
                connect directly with your audience.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-[70%] bg-[#27292D] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/tiktok.svg"
                    width="252"
                    height="300"
                    className="w-[50%]"
                    alt="Ref3r logo"
                  />
                  <p>Tiktok</p>
                </div>
                <button className="bg-[#00B24F] px-4 py-2 text-white rounded-2xl w-[30%]">
                  Authorise
                </button>
              </div>
              <p className="text-[#909090]">
                Unleash viral potential & real connections through creative,
                bite-sized content.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-[70%] bg-[#27292D] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/linkedin.svg"
                    width="252"
                    height="300"
                    className="w-[50%]"
                    alt="Ref3r logo"
                  />
                  <p>LinkedIn</p>
                </div>
                <button className="bg-[#00B24F] px-4 py-2 text-white rounded-2xl w-[30%]">
                  Authorise
                </button>
              </div>
              <p className="text-[#909090]">
                Connect with professionals, build thought leadership, and access
                targeted B2B audiences.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-[70%] bg-[#27292D] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/Spaceship.svg"
                    width="252"
                    height="300"
                    className="w-[10%]"
                    alt="Ref3r logo"
                  />
                  <p>Youtube</p>
                </div>
                <button className="bg-[#00B24F] px-4 py-2 text-white rounded-2xl w-[30%]">
                  Authorise
                </button>
              </div>
              <p className="text-[#909090]">
                Connecting you with professionals in your industries, fostering
                thought leadership, and driving B2B opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-[70%] bg-[#27292D] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/Spaceship.svg"
                    width="252"
                    height="300"
                    className="w-[10%]"
                    alt="Ref3r logo"
                  />
                  <p>Mailchamp</p>
                </div>
                <button className="bg-[#00B24F] px-4 py-2 text-white rounded-2xl w-[30%]">
                  Authorise
                </button>
              </div>
              <p className="text-[#909090]">
                Connecting you with professionals in your industries, fostering
                thought leadership, and driving B2B opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-[70%] bg-[#27292D] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/Spaceship.svg"
                    width="252"
                    height="300"
                    className="w-[10%]"
                    alt="Ref3r logo"
                  />
                  <p>Beehiive</p>
                </div>
                <button className="bg-[#00B24F] px-4 py-2 text-white rounded-2xl w-[30%]">
                  Authorise
                </button>
              </div>
              <p className="text-[#909090]">
                Connecting you with professionals in your industries, fostering
                thought leadership, and driving B2B opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-[70%] bg-[#27292D] rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/Spaceship.svg"
                    width="252"
                    height="300"
                    className="w-[10%]"
                    alt="Ref3r logo"
                  />
                  <p>Medium</p>
                </div>

                <button className="bg-[#00B24F] px-4 py-2 text-white rounded-2xl w-[30%]">
                  Authorise
                </button>
              </div>

              <p className="text-[#909090]">
                Connecting you with professionals in your industries, fostering
                thought leadership, and driving B2B opportunities.
              </p>
            </div>

            <button
              className="bg-[#00B24F] px-4 py-2 text-white rounded-2xl md:rounded-lg w-[30%]"
              onClick={() => {
                setChoose(false);
              }}
            >
              Continue
            </button>
          </div>
        </div>


        <div className="w-[50%] h-[94vh] top-[3%] sticky rounded-2xl bg-[#15A145] flex justify-center items-center">
          <Image
            src="/Spaceship.svg"
            width="252"
            height="300"
            className="w-[100%]"
            alt="Ref3r logo"
          />
        </div>
      </div>
      {choose ? "" : <BrandSetup3/>}
    </>
  );
}

export default BrandSetup2;
