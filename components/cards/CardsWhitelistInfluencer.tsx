import React from "react";
import Image from "next/image";

const CardsWhitelistInfluencer = ({
  image,
  name,
}: {
  image: any;
  name: string;
}) => {
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
              <p className="text-[#909090] text-sm">Truncated Description</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center pt-4">
          <button className="text-sm py-2 px-4 rounded-xl text-white bg-[#00B24F]">
            Whitelist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsWhitelistInfluencer;
