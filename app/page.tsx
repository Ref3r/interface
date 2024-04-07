"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import LandingNavbar from "@/components/landing/LandingNavbar";
import Hero from "@/components/landing/HeroSection";
import Features from "@/components/landing/FeaturesSection";
import OfferSection from "@/components/landing/OfferSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";
import appwriteService from "@/appwrite/config";
import { usePublicKey } from "@/store";


export default function Home() {
  
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
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
