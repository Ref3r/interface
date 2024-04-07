import zustand from "zustand";
import { create } from "zustand";

type TestName = {
  name: string;
};

type InfluencerData = {
  key: string;
  name: string;
  bio: string;
  links: string;
  niche: string;
  main_platform: string;
  follower_count: number;
};

type BrandData = {
    key: string,
    name: string,
    description: string,
    website: string,
    address: string,
    business_reg_code: string,
    links: string,
    exommerce_platform: string,
    api_key: string,
    industry: string,
    profile_img: string,
  }


export const useTestName = create<TestName>(() => ({ name: "TestName" }));
