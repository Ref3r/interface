import React from "react";

const CardsPastCampaigns = ({
  campaign,
  campaigndesc,
  number,
  balance,
  total,
}: {
  campaign: string;
  campaigndesc: string;
  number: any;
  balance: any;
  total: any;
}) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-2 p-4 text-white bg-[#6D7171] rounded-t-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{campaign}</h2>
          <div className="">
            <div className="py-1 text-white flex justify-center items-center w-[60%] gap-1 rounded-full">
              <div className="rounded-full border border-white p-[8px] bg-[#B50218]"></div>
              <p>Over</p>
            </div>
          </div>
        </div>

        <div className="w-[85%]">
          <p className="text-sm">{campaigndesc}</p>
        </div>

        <div>
          <p className="text-sm">{number} influencers</p>
        </div>
      </div>

      <div className="flex items-center justify-between px-8 text-sm w-full py-3 text-white bg-black rounded-b-xl">
        <div className="flex gap-2 justify-center items-center">
          <div className="rounded-full border border-white p-[10px] bg-[#27E0A6]"></div>
          <div>
            <p className="text-[#777777]">BALANCE</p>
            <p>
              ${balance} of ${total} spent
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#27E0A6]">View Campaign</p>
        </div>
      </div>
    </div>
  );
};

export default CardsPastCampaigns;
