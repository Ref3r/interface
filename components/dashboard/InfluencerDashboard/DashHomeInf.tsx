"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import CardsInfDashHomeInfluencers from "@/components/cards/influencers/CardsInfDashHomeInfluencers";
import CardsInfProductForBrands from "@/components/cards/influencers/CardsInfProductForBrands";

function DashHomeInf() {
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

              <p className="text-white text-2xl font-medium">Influencer Name</p>

              <p className="text-[#909090]">
                Lorem ipsum dolor sit amet consectetur. Lectus scelerisque ac
                sollicitudin nibh consequat neque senectus quis. Volutpat
                pulvinar id sed lacus ut. Duis amet porttitor quisque nunc arcu.
                Sit a gravida faucibus amet libero non.
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
                <CardsInfProductForBrands
                  image={"Product1.svg"}
                  name="Yamaha Bike"
                />
                <CardsInfProductForBrands
                  image={"Product2.svg"}
                  name="Yamaha Bike"
                />
                <CardsInfProductForBrands
                  image={"Product3.svg"}
                  name="Yamaha Bike"
                />
                <CardsInfProductForBrands
                  image={"Product4.svg"}
                  name="Yamaha Bike"
                />
                <CardsInfProductForBrands
                  image={"Product1.svg"}
                  name="Yamaha Bike"
                />
                {/* <CardsInfProductForBrands image={"Product1.svg"} name="Yamaha Bike" /> */}
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
            <CardsInfDashHomeInfluencers image={`Influencer1.svg`} name="Rishi" />
            <CardsInfDashHomeInfluencers image={`Influencer1.svg`} name="Rahul" />
            <CardsInfDashHomeInfluencers image={`Influencer1.svg`} name="Sahil" />
            <CardsInfDashHomeInfluencers image={`Influencer1.svg`} name="Sagar" />
            <CardsInfDashHomeInfluencers image={`Influencer1.svg`} name="Kunj" />
            <CardsInfDashHomeInfluencers image={`Influencer1.svg`} name="Mayank" />
            <CardsInfDashHomeInfluencers image={`Influencer1.svg`} name="Prakhar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHomeInf;
