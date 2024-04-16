import { useBrandData, useInfluencerData, usePublicKey } from "@/store";
import appwriteService from "./config";
async function getBrandData(key: string) {
  const data = await appwriteService.getBrandData(key);
  return data;
  // console.log(data);
}

async function getInfluencerData(key: string) {
  const data = await appwriteService.getInfluencerData(key);
  return data;
  // console.log(data);
}

export async function checkUserType(key: string) {
  const isBrand = await getBrandData(key);
  console.log(isBrand.total);
  const isInfluencer = await getInfluencerData(key);
  console.log(isInfluencer);
  if (isBrand.total) {
    return "brand";
  }
  if (isInfluencer.total) {
    return "influencer";
  }
}

export async function createInfluencer() {
  const influencerData = {
    key: usePublicKey.getState().publicKey,
    name: useInfluencerData.getState().name,
    bio: useInfluencerData.getState().bio,
    links: useInfluencerData.getState().links,
    niche: useInfluencerData.getState().niche,
    main_platform: useInfluencerData.getState().main_platform,
    follower_count: useInfluencerData.getState().follower_count,
  };
  appwriteService.createInfluencer(influencerData);
}

export async function createBrand() {
  console.log("create brand called");
  const brandData = {
    key: usePublicKey.getState().publicKey,
    name: useBrandData.getState().name,
    description: useBrandData.getState().description,
    website: useBrandData.getState().website,
    address: useBrandData.getState().address,
    business_reg_code: useBrandData.getState().business_reg_code,
    links: useBrandData.getState().links,
    ecommerce_platform: useBrandData.getState().ecommerce_platform,
    api_key: useBrandData.getState().api_key,
    industry: useBrandData.getState().industry,
    profile_img: useBrandData.getState().profile_img,
  };
  const data = await appwriteService.createBrand(brandData);
  console.log(data);
}

export async function updateBrandData() {
  console.log(" brand data update");
  const documentId = useBrandData.getState().documentId;
  const brandData = {
    documentId: useBrandData.getState().documentId,
    key: usePublicKey.getState().publicKey,
    name: useBrandData.getState().name,
    description: useBrandData.getState().description,

    website: useBrandData.getState().website,
    address: useBrandData.getState().address,
    business_reg_code: useBrandData.getState().business_reg_code,
    links: useBrandData.getState().links,
    ecommerce_platform: useBrandData.getState().ecommerce_platform,
    api_key: useBrandData.getState().api_key,
    industry: useBrandData.getState().industry,
    profile_img: useBrandData.getState().profile_img,
  };
  const data = await appwriteService.updateBrandData(
    documentId,
    brandData.name,
    brandData.description,
    brandData.website,
    brandData.profile_img
  );
  console.log(data);
}
