"use client";
import { useState } from "react";
import Image from "next/image";
import CardsViewCampaigns from "../cards/CardsViewCampaigns";

const ViewCampaign = () =>
  // {
  //     campaign_name,
  //     spent,
  //     total,
  //     campaign_desc,
  // }: {
  //     campaign_name: string;
  //     spent: any;
  //     total: any;
  //     campaign_desc: string;
  // }
  {
    return (
      <div className={`w-[98%] flex flex-col pt-10 pb-6 gap-10 px-4`}>
        <div className="flex justify-between items-center gap-4">
          <div>
            <h2 className="text-4xl font-semibold text-white">
              Campaigns Name
            </h2>
            <p className="text-[#909090] mt-2">
              Lorem ipsum dolor sit amet consectetur. Lobortis turpis ipsum sem
              amet proin vitae proin.
            </p>
          </div>

          <div>
            <button className="text-sm py-2 px-4 rounded-lg text-white bg-[#00B24F] flex justify-center items-center gap-2">
              <Image
                src="/icons/Edit.svg"
                width="25"
                height="30"
                alt="home fill"
                className=""
              />
              Edit Campaign
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col items-center justify-center w-[80%] gap-10">
            <div className="w-[90%] flex flex-col">
              <Image
                src="/ProgressBar.svg"
                width="25"
                height="25"
                alt="home fill"
                className="w-full"
              />
              <p className="flex justify-end text-[#C6FFE6] font-semibold text-lg">
                $20 of $200 spent
              </p>
            </div>

            <div className="bg-[#27292D] w-full rounded-xl flex flex-col gap-4">
              <div className="w-full bg-[#2D2D2D] px-6 py-4 flex justify-between items-center rounded-t-xl">
                <div className="">
                  <p className="text-white text-lg font-semibold">NAME</p>
                </div>
              </div>

              <CardsViewCampaigns
                image={"/icons/ProfileIcon.svg"}
                name="Jane Cooper"
              />
              <CardsViewCampaigns
                image={"/icons/ProfileIcon.svg"}
                name="Jane Cooper"
              />

              <div className="w-full bg-[#2D2D2D] px-6 py-3 flex items-center justify-center text-center rounded-b-xl">
                <p className="text-gray-400">Showing 6 of 6 people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ViewCampaign;
