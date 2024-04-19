import React from "react";
import Image from "next/image";

const CardsInfRecentOrders = ({
  image,
  name,
}: {
  image: any;
  name: string;
}) => {
  return (
    <div className="w-[12%] bg-[#27292DCC] p-2 rounded-xl flex flex-col justify-center text-center items-center gap-4 min-h-[170px]">
      <Image
        // src={`/${image}.svg`}
        src={image}
        width="120"
        height="100"
        alt="fetch error"
        className="rounded-t-lg w-full"
      />
      <p className="text-[#C6FFE6] text-lg font-medium">{name}</p>
    </div>
  );
};

export default CardsInfRecentOrders;
