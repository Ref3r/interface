"use client";
import { useState } from "react";
import Image from "next/image";

const CardsInfDashHomeInfluencers = ({
  image,
  name,
}: {
  image: any;
  name: string;
}) => {
  return (
    <div className="w-[12%] bg-[#27292DCC] p-2 rounded-xl flex flex-col justify-center text-center items-center gap-4 min-h-[220px]">
      <Image
        // src={`/${image}.svg`}
        src={image}
        width="120"
        height="100"
        alt="fetch error"
        className="rounded-t-lg w-full"
      />
      <p className="text-white text-lg font-medium">{name}</p>
      <button className="rounded bg-[#00B24F] text-white px-2 py-1 text-sm">
        Connect
      </button>
    </div>
  );
};

export default CardsInfDashHomeInfluencers;
