"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DashHomeInfuencers from "../cards/DashHomeInfuencers";
import CardsInfluencersForBrands from "../cards/CardsInfluencersForBrands";
import CardsProductForBrands from "../cards/CardsProductForBrands";
import { checkUserType } from "@/appwrite/utils";
import appwriteService from "@/appwrite/config";
import {
  useBrandData,
  useInfluencerData,
  useIsInfluencer,
  usePublicKey,
} from "@/store";

const DashHome = () => {
  const isInfluencer = useIsInfluencer((state) => state.isInfluencer);
  console.log(isInfluencer);
  const key = usePublicKey.getState().publicKey;
  const [data, setData] = useState();
  const [name, setName] = useState<string>();
  const [userDescription, setUserDescription] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [allBrands, setAllBrands] = useState();
  const [allInfluencers, setAllInfluencers] = useState();
  const [currentUserDocumentId, setCurrentUserDocumentId] = useState<string>();

  const description = useBrandData((state) => state.description);
  async function updateData(key: string) {
    const userType = await checkUserType(key);
    console.log(userType)
    if (userType == "brand") {
      setName(useBrandData.getState().name);
      console.log("name fetched", useBrandData.getState().name);
      setUserDescription(useBrandData.getState().description);
      setCurrentUserDocumentId(useBrandData.getState().documentId);
    }
    if (userType == "influencer") {
      setName(useInfluencerData.getState().name);
      console.log("name fetched", useInfluencerData.getState().name);
      setUserDescription(useInfluencerData.getState().bio);
      setCurrentUserDocumentId(useInfluencerData.getState().documentId);
    }

    console.log(currentUserDocumentId);

    const allBrands = await appwriteService.getAllBrands();
    setAllBrands(allBrands);
    //console.log(allBrands.documents[0].$collectionId);
    const allInfluencers = await appwriteService.getAllInfluencers();
    setAllInfluencers(allInfluencers);
    //console.log(allInfluencers);
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

              {/* <p className="text-white text-2xl font-medium">
                {data ? data.documents[0].name : "Name"}
              </p> */}

              <p className="text-white text-2xl font-medium">
                {key ? name : "Name"}
              </p>

              <p className="text-[#909090]">
                {key ? userDescription : "Description"}
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
            {!isInfluencer &&
              allInfluencers &&
              (allInfluencers ? (
                allInfluencers.documents.length > 0 ? (
                  allInfluencers.documents.map((e) => (
                    <DashHomeInfuencers
                      image={`Influencer1.svg`}
                      name={e.name}
                      currentUserDocumentId={currentUserDocumentId}
                      cardDocumentId={e.$id}
                      cardUserKey={e.key}
                    />
                  ))
                ) : (
                  <p>No influencers found.</p>
                )
              ) : (
                <p>Invalid data format for influencers.</p>
              ))}
            {isInfluencer &&
              allBrands &&
              (allInfluencers ? (
                allBrands.documents.length > 0 ? (
                  allBrands.documents.map((e) => (
                    <DashHomeInfuencers
                      image={`Influencer1.svg`}
                      name={e.name}
                      currentUserDocumentId={currentUserDocumentId}
                      cardDocumentId={e.$id}
                      cardUserKey={e.key}
                    />
                  ))
                ) : (
                  <p>No influencers found.</p>
                )
              ) : (
                <p>Invalid data format for influencers.</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
