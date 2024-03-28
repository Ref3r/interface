import appwriteService from "./config";
async function getBrandData(key: string) {
  const data = await appwriteService.getBrandData(key);
  return data;
  console.log(data);
}

async function getInfluencerData(key: string) {
  const data = await appwriteService.getInfluencerData(key);
  return data;
  console.log(data);
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




