import appwriteService from "@/appwrite/config";
import { useBrandData, useInfluencerData, useIsInfluencer } from "@/store";

export const useUserActions = () => {
  async function createUser(key: string) {
    const user = await appwriteService.createUserAccount(key);
  }

  async function checkUserExist(key: string) {
    console.log("checking if user exists otherwise registering new user");
    try {
      const data = await appwriteService.getCurrentUser().then();
      console.log(data);
      return data;
    } catch (error) {
      console.log("error logong in ", error);
    }
    try {
      const data = await createUser(key);
      console.log(data);
      await appwriteService.login(key);
      return data;
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  async function getInfluencerData(key: string) {
    const data = await appwriteService.getInfluencerData(key);
    return data;
  }

  async function getBrandData(key: string) {
    const data = await appwriteService.getBrandData(key);
    return data;
  }

  async function checkUserSetup(key: string) {
    const brandData = await appwriteService.getBrandData(key);
    if (brandData.total) {
      console.log("brand data", brandData);
      useIsInfluencer.setState({
        isInfluencer: false,
      });
      useBrandData.setState({
        documentId: brandData.documents[0].$id,
        key: brandData.documents[0].key,
        name: brandData.documents[0].name,
        description: brandData.documents[0].description,
        website: brandData.documents[0].website,
        address: brandData.documents[0].address,
        business_reg_code: brandData.documents[0].business_reg_code,
        links: brandData.documents[0].links,
        ecommerce_platform: brandData.documents[0].ecommerce_platform,
        api_key: brandData.documents[0].api_key,
        industry: brandData.documents[0].industry,
        profile_img: brandData.documents[0].profile_img,
        connections: brandData.documents[0].connections,
      });
    }

    const influencerData = await getInfluencerData(key);
    if (influencerData.total) {
      console.log(influencerData);
      useIsInfluencer.setState({
        isInfluencer: true,
      });
      useInfluencerData.setState({
        documentId: influencerData.documents[0].$id,
        key: influencerData.documents[0].key,
        name: influencerData.documents[0].name,
        bio: influencerData.documents[0].bio,
        links: influencerData.documents[0].links,
        niche: influencerData.documents[0].niche,
        main_platform: influencerData.documents[0].main_platform,
        follower_count: influencerData.documents[0].follower_count,
        connections: influencerData.documents[0].connections,
      });
    }

    if (brandData.total || influencerData.total) {
      return true;
    }
  }

  return {
    checkUserExist,
    checkUserSetup,
  };
};
