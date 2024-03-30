"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LandingNavbar from "@/components/landing/LandingNavbar";
import Hero from "@/components/landing/HeroSection";
import Features from "@/components/landing/FeaturesSection";
import OfferSection from "@/components/landing/OfferSection";
import HowItWorks from "@/components/landing/HowItWorks";
import appwriteService from "@/appwrite/config";
import { usePublicKey } from "@/store";
export default function Home() {
  const router = useRouter();
  //const key = "0x953ed43e99938fDD2B0c91E4521Cccc2762aF70A";
  const key = usePublicKey.getState().publicKey;
  function updatePublicKey(key: string) {
    usePublicKey.setState({ publicKey: key });
  }
  updatePublicKey("0x4953ed43e99938fDD2B0c91E4521Cccc2762aF70A");
  async function createUser(key: string) {
    const user = await appwriteService.createUserAccount(key);
  }
  async function checkUserExist() {
    console.log("checking if user exists");
    try {
      const data = await appwriteService.getCurrentUser().then();
      console.log(data);
      return data;
    } catch (error) {
      console.log("user created");
      await createUser(key);
      router.push("/dashboard");
    }
  }
  useEffect(() => {
    const userCheck = async () => {
      const user = await checkUserExist();
      console.log(user);
      if (user) {
        router.push("/dashboard");
      }
    };
    userCheck();
  }, []);
  return (
    <main className="bg-[#111111] flex min-h-screen flex-col items-center justify-between">
      <div
        className="bg-cover bg-center w-full h-full"
        style={{ backgroundImage: "url('/hero-bg.svg')" }}
      >
        <LandingNavbar />

        <Hero />
      </div>
      <div
        className="bg-cover bg-center w-full h-full"
        style={{ backgroundImage: "url('/landing-bg.png')" }}
      >
        <Features />
      </div>
      <div
        className="bg-cover bg-center w-full h-full"
        style={{ backgroundImage: "url('/landing-bg.png')" }}
      >
        <OfferSection />
      </div>
      <div>
        <HowItWorks />
      </div>
    </main>
  );
}
