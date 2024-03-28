const conf = {
  appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteDatabaseId:String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
  appwriteInfluencerId:String(process.env.NEXT_PUBLIC_APPWRITE_INFLUENCER_COLLECTION_ID),
  appwriteBrandId:String(process.env.NEXT_PUBLIC_APPWRITE_BRAND_COLLECTION_ID)
};

export default conf;
