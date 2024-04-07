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
import Footer from "@/components/landing/Footer";

export default function Home() {
  const router = useRouter();
  const key = "0x953ed43e99938fDD2B0c91E4521Cccc2762aF70A";
  function createUser(key: string) {
    appwriteService.createUserAccount(key);
  }
  async function checkUserExist() {
    const data = await appwriteService.getCurrentUser().then();
    console.log(data);
    return data;
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
      <div>
        <button onClick={() => createUser(key)}>create user</button>
      </div>
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
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
