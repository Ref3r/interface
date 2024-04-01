import React from "react";
import Image from "next/image";

const CardsReports = ({
  image,
  name,
  mail,
  amount,
}: // status,
{
  image: any;
  name: string;
  mail: string;
  amount: any;
  // status: boolean;
}) => {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[1px] w-full bg-white"></div>
      <div className="w-full flex items-center px-6">
        <div className="w-[40%]">
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
              <p className="text-white text-sm">{name}</p>
              <p className="text-white text-sm">{mail}</p>
            </div>
          </div>
        </div>

        <div className="w-[25%]">
          <p className="text-white text-sm">${amount}</p>
        </div>

        <div className="w-[15%]">
          <div className="pl-[2px] py-1 bg-[#00B24F] text-white text-sm flex justify-center items-center w-[60%] gap-2 rounded-full">
            <div className="rounded-full p-[6px] bg-[#34D399]"></div>
            <p>Active</p>
          </div>
        </div>

        <div className="w-[20%] flex justify-end">
          <p className="text-sm text-[#00B24F]">View</p>
        </div>
      </div>
    </div>
  );
};

export default CardsReports;
