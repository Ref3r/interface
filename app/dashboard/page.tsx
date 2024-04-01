"use client";
import appwriteService from "@/appwrite/config";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandSetup1 from "@/components/dashboard/BrandSetup1";
import InfluencerSetup1 from "@/components/dashboard/InfluencerSetup1";
import DashboardComponent from "@/components/dashboard/DashboardComponent";
import {
  useBrandData,
  useInfluencerData,
  useIsInfluencer,
  usePublicKey,
} from "@/store";

function Dashboard() {
  const key = usePublicKey.getState().publicKey;
  const [choose, setChoose] = useState(true);
  const [brand, setBrand] = useState(false);
  const [influencer, setInfluencer] = useState(false);
  // const [isUserExist, setIsUserExist] = useState(false);

  // async function getInfluencerData(key: string) {
  //   const data = await appwriteService.getInfluencerData(key);
  //   return data;
  // }

  // async function getBrandData(key: string) {
  //   const data = await appwriteService.getBrandData(key);
  //   return data;
  // }

  // async function checkUserSetup(key: string) {
  //   const brandData = await appwriteService.getBrandData(key);
  //   if (brandData.total) {
  //     console.log("brand data", brandData);
  //     useIsInfluencer.setState({
  //       isInfluencer: false,
  //     });
  //     useBrandData.setState({
  //       documentId: brandData.documents[0].$id,
  //       key: brandData.documents[0].key,
  //       name: brandData.documents[0].name,
  //       description: brandData.documents[0].description,
  //       website: brandData.documents[0].website,
  //       address: brandData.documents[0].address,
  //       business_reg_code: brandData.documents[0].business_reg_code,
  //       links: brandData.documents[0].links,
  //       ecommerce_platform: brandData.documents[0].ecommerce_platform,
  //       api_key: brandData.documents[0].api_key,
  //       industry: brandData.documents[0].industry,
  //       profile_img: brandData.documents[0].profile_img,
  //       connections: brandData.documents[0].connections,
  //     });
  //   }

  //   const influencerData = await getInfluencerData(key);
  //   if (influencerData.total) {
  //     console.log(influencerData);
  //     useIsInfluencer.setState({
  //       isInfluencer: true,
  //     });
  //     useInfluencerData.setState({
  //       documentId: influencerData.documents[0].$id,
  //       key: influencerData.documents[0].key,
  //       name: influencerData.documents[0].name,
  //       bio: influencerData.documents[0].bio,
  //       links: influencerData.documents[0].links,
  //       niche: influencerData.documents[0].niche,
  //       main_platform: influencerData.documents[0].main_platform,
  //       follower_count: influencerData.documents[0].follower_count,
  //       connections: influencerData.documents[0].connections,
  //     });
  //   }

  //   if (brandData.total || influencerData.total) {
  //     return true;
  //   }
  // }

  // if (useBrandData.getState().key || useInfluencerData.getState().key) {
  //   setIsUserExist(true);
  // }

  // useEffect(() => {
  //   const userCheck = async () => {
  //     const user = await checkUserSetup(key);
  //     console.log(user);
  //     if (user) {
  //       setIsUserExist(true);
  //       //router.push("/dashboard");
  //     }
  //   };
  //   userCheck();
  // }, []);

  return (
    <>
      {useBrandData.getState().key || useInfluencerData.getState().key ? (
        <DashboardComponent />
      ) : (
        <>
          <div
            className={`bg-[#111111] h-screen flex-col items-center justify-center gap-10 ${
              choose ? "flex" : "hidden"
            }`}
          >
            
            <div className="text-center text-white flex flex-col gap-2">
              <div className="text-4xl font-semibold">
                Who do you want to sign up as?
              </div>
              <p>We'll personalize your setup experience accordingly.</p>
            </div>
            <div className="flex w-[50%] justify-center items-center gap-[20%]">
              <div
                onClick={() => {
                  setBrand(true);
                  setChoose(false);
                }}
                className="flex flex-col md:py-8 py-8 border-[2px] border-transparent hover:border-[#00B24F] rounded-2xl items-center gap-2 bg-[#2D2D2D] w-full cursor-pointer"
              >
                <Image
                  src="/DashboardBrand.svg"
                  width="252"
                  height="300"
                  className="w-[50%] h-[50%] object-contain p-2"
                  alt="Ref3r logo"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-white text-3xl leading-[23.4px] mb-1 text-center">
                    Brand
                  </p>
                  <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  setInfluencer(true);
                  setChoose(false);
                }}
                className="flex flex-col md:py-8 py-8 border-[2px] border-transparent hover:border-[#00B24F] rounded-2xl items-center gap-2 bg-[#2D2D2D] w-full cursor-pointer"
              >
                <Image
                  src="/DashboardAffiliate.svg"
                  width="252"
                  height="300"
                  className="w-[50%] h-[50%] object-contain p-2"
                  alt="Ref3r logo"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-white text-3xl leading-[23.4px] mb-1 text-center">
                    Influencer
                  </p>
                  <p className="font-normal text-center text-white text-dimWhite text-[15px] leading-[20px] p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`bg-[#111111] min-h-screen flex justify-center items-center ${
              choose ? "hidden" : "flex"
            }`}
          >
            {brand && <BrandSetup1 />}
            {influencer && <InfluencerSetup1 />}
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;

//  {isUserExist ? <DashboardComponent /> : ""}
