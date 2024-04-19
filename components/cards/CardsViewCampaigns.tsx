import React from "react";
import Image from "next/image";
import ChatPop from "../dashboard/ChatPop";

const CardsViewCampaigns = ({ image, name }: { image: any; name: string }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[1px] w-full bg-[#909090]"></div>
      <div className="w-full flex justify-between items-center px-12">
        <div className="">
          <div className="flex items-center gap-6 pt-4">
            <div>
              <Image
                src={image}
                width="40"
                height="65"
                alt="home fill"
                className="rounded-full"
              />
            </div>

            <div>
              <p className="text-white font-semibold">{name}</p>
              <p className="text-[#909090] text-sm">Pending Request</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center pt-4">
          <button className="">
            {/* <Image
              src="/icons/Message.svg"
              width="30"
              height="65"
              alt="home fill"
              className=""
            /> */}
            <ChatPop />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsViewCampaigns;
