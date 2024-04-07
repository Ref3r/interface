import zustand from "zustand";
import { create } from "zustand";

type InfluencerData = {
  documentId: string;
  key: string;
  name: string;
  bio: string;
  links: string;
  niche: string;
  main_platform: string;
  follower_count: number;
  connections:string
  //   setKey: (key: string) => void;
  //   setName: (name: string) => void;
  //   setBio: (bio: string) => void;
  //   setLinks: (links: string) => void;
  //   setNiche: (niche: string) => void;
  //   setMain_platform: (mainPlatform: string) => void;
  //   setFollower_count: (followerCounr: string) => void;
};

type BrandData = {
  documentId: string;
  key: string;
  name: string;
  description: string;
  website: string;
  address: string;
  business_reg_code: string;
  links: string;
  ecommerce_platform: string;
  api_key: string;
  industry: string;
  profile_img: string;
  connections:string
};

type PublicKey = {
  publicKey: string;
};

type isInfluencer = {
  isInfluencer: boolean;
  setIsInfluencer: (isInfluencer: boolean) => void;
};

export const usePublicKey = create<PublicKey>((set) => ({
  publicKey: "",
}));

export const useIsInfluencer = create<isInfluencer>((set) => ({
  isInfluencer: true,
  setIsInfluencer: (_isInfluencer: boolean) => {
    set(() => ({ isInfluencer: _isInfluencer }));
  },
}));

export const useInfluencerData = create<InfluencerData>((set) => ({
  documentId: "",
  key: "key",
  name: "",
  bio: "",
  links: "{}",
  niche: "",
  main_platform: "",
  follower_count: 0,
  connections:"",
  setKey: (key: string) => {
    set(() => ({ key: key }));
  },
  setName: (name: string) => {},
  setBio: (bio: string) => {},
  setLinks: (links: string) => {},
  setNiche: (niche: string) => {},
  setMain_platform: (mainPlatform: string) => {},
  setFollower_count: (followerCounr: string) => {},
}));

export const useBrandData = create<BrandData>((set) => ({
  documentId: "",
  key: "",
  name: "",
  description: "",
  website: "",
  address: "",
  business_reg_code: "",
  links: "",
  ecommerce_platform: "",
  api_key: "",
  industry: "",
  profile_img: "",
  connections:"",
  setKey: (key: string) => {
    set(() => ({ key: key }));
  },
}));
