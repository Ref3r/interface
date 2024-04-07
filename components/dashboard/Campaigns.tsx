"use client";
import { useState } from "react";
import ActiveCampaigns from "./ActiveCampaigns";
import PastCampaigns from "./PastCampaigns";
import CreateCampaign from "./CreateCampaign";

const Campaigns = () => {
  const [choose, setChoose] = useState(false);
  const [whitelist, setWhitelist] = useState(true);

  return (
    <>
      <div
        className={`w-[98%] flex flex-col pt-10 pb-6 gap-10 pl-4 ${
          whitelist ? "flex" : "hidden"
        } `}
      >
        <div className="flex justify-between items-center">
          <p className="text-5xl font-semibold text-white">Campaigns</p>
          <button
            className="py-2 px-3 bg-[#00B24F] text-white text-sm rounded-lg cursor-pointer"
            onClick={() => {
              setWhitelist(false);
            }}
          >
            Create Campaign
          </button>
        </div>

        <div className="w-[30%] flex justify-center items-center gap-2">
          <button
            className={`flex justify-center items-center p-1 w-[50%] rounded-full text-sm ${
              choose
                ? "bg-[#909090] text-black font-medium"
                : "bg-[#00B24F] text-white"
            }`}
            onClick={() => setChoose(false)}
          >
            Active Campaigns
          </button>
          <button
            className={`flex justify-center items-center p-1 w-[50%] rounded-full text-sm ${
              choose
                ? "bg-[#00B24F] text-white"
                : "bg-[#909090] text-black font-medium"
            }`}
            onClick={() => setChoose(true)}
          >
            Past Campaigns
          </button>
        </div>

        <div className="w-[85%]">
          {choose ? <PastCampaigns /> : <ActiveCampaigns />}
        </div>
      </div>

      {whitelist ? "" : <CreateCampaign />}
    </>
  );
};

export default Campaigns;
