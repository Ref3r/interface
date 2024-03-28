"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DashHomeInfuencers from "../cards/DashHomeInfuencers";
import CardsProductForBrands from "../cards/CardsProductForBrands";
import { checkUserType } from "@/appwrite/utils";
import appwriteService from "@/appwrite/config";
import { useTestName } from "@/store";

const DashHome = () => {
  const key = "0x953ed43e99938fDD2B0c91E4521Cccc2762aF70A";
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const name = useTestName((state) => state.name);
  async function updateData(key: string) {
    const userType = await checkUserType(key);
    if (userType == "brand") {
      const data = await appwriteService.getBrandData(key);
      console.log(data);
      setData(data);
    }
    if (userType == "influencer") {
      const data = await appwriteService.getInfluencerData(key);
      console.log(data);
      setData(data);
    }
  }

  useEffect(() => {
    updateData(key);
  }, []);

  if (loading == true) return <>Fetching....</>;

  return (
    <div className="flex w-[98%] py-4">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="flex justify-center items-center gap-10 w-full">
          <div className="flex flex-col justify-center items-center gap-4 w-[75%]">
            <div className="bg-[#111111] p-6 flex flex-col rounded-lg w-full gap-4">
              <div className="flex justify-between items-center">
                <Image
                  src={`/icons/ProfileIcon.svg`}
                  width="225"
                  height="100"
                  alt="home fill"
                  className="w-[13%]"
                />

                <div className="flex justify-center items-center gap-4">
                  <Image
                    src={`/icons/send.svg`}
                    width="20"
                    height="100"
                    alt="home fill"
                  />
                  <Image
                    src={`/icons/connect.svg`}
                    width="20"
                    height="100"
                    alt="home fill"
                  />
                  <Image
                    src={`/icons/menu.svg`}
                    width="20"
                    height="100"
                    alt="home fill"
                  />
                </div>
              </div>

              <p className="text-white text-2xl font-medium">
                {data ? name : "Name"}
              </p>

              <p className="text-[#909090]">
                {data ? data.documents[0].description : "Description"}
              </p>

              <div className="flex items-center gap-8 bg-[#232528] py-2 px-6 rounded-full w-fit">
                <Image
                  src={`/icons/instagram.svg`}
                  width="25"
                  height="100"
                  alt="home fill"
                />
                <Image
                  src={`/icons/facebook.svg`}
                  width="25"
                  height="100"
                  alt="home fill"
                />
                <Image
                  src={`/icons/linkedin.svg`}
                  width="25"
                  height="100"
                  alt="home fill"
                />
                <Image
                  src={`/icons/twitter.svg`}
                  width="25"
                  height="100"
                  alt="home fill"
                />
                <Image
                  src={`/icons/tiktok.svg`}
                  width="25"
                  height="100"
                  alt="home fill"
                />
                <Image
                  src={`/icons/WebsiteUrl.svg`}
                  width="25"
                  height="100"
                  alt="home fill"
                />
              </div>
            </div>

            <div className="bg-[#111111] p-6 flex flex-col rounded-lg w-full gap-20">
              <div className="flex justify-between items-center bg-[#232528] text-white py-2 px-8 rounded-full">
                <p>Top Selling Product</p>
                <p>View all products &#62;</p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <CardsProductForBrands
                  image={"Product1.svg"}
                  name="Yamaha Bike"
                />
                <CardsProductForBrands
                  image={"Product2.svg"}
                  name="Yamaha Bike"
                />
                <CardsProductForBrands
                  image={"Product3.svg"}
                  name="Yamaha Bike"
                />
                <CardsProductForBrands
                  image={"Product4.svg"}
                  name="Yamaha Bike"
                />
                <CardsProductForBrands
                  image={"Product1.svg"}
                  name="Yamaha Bike"
                />
                {/* <CardsProductForBrands image={"Product1.svg"} name="Yamaha Bike" /> */}
              </div>
            </div>
          </div>

          <div className="w-[25%] h-full">
            <Image
              src={`/TotalSales.svg`}
              width="425"
              height="100"
              alt="home fill"
            />
            <Image
              src={`/HiredCharts.svg`}
              width="450"
              height="100"
              alt="home fill"
            />
          </div>
        </div>

        <div className="bg-[#111111] p-6 w-full rounded-xl flex flex-col gap-6">
          <div className="flex justify-between items-center bg-[#232528] text-white py-2 px-8 rounded-full">
            <p>Brand Influencer Profile</p>
            <p>View other profiles &#62;</p>
          </div>
          <div className="flex gap-6 flex-wrap">
            <DashHomeInfuencers image={`Influencer1.svg`} name="Rishi" />
            <DashHomeInfuencers image={`Influencer1.svg`} name="Rahul" />
            <DashHomeInfuencers image={`Influencer1.svg`} name="Sahil" />
            <DashHomeInfuencers image={`Influencer1.svg`} name="Sagar" />
            <DashHomeInfuencers image={`Influencer1.svg`} name="Kunj" />
            <DashHomeInfuencers image={`Influencer1.svg`} name="Mayank" />
            <DashHomeInfuencers image={`Influencer1.svg`} name="Prakhar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
