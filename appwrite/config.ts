import conf from "@/conf/config";
import { Query, Client, Account, ID, Databases } from "appwrite";

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

const database = new Databases(appwriteClient);

export class AppwriteService {
  // creating user
  async createUserAccount(key: string) {
    const email = key + "@ref.com";
    const password = key;
    try {
      const userAccount = await account.create(ID.unique(), email, password);
      if (userAccount) {
        return this.login(key);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(key: string) {
    const email = key + "@ref.com";
    const password = key;
    try {
      return await account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {}
    return false;
  }
  async getCurrentUser() {
    try {
      return account.get();
    } catch (error) {
      console.log("getuser error" + error);
    }
    return null;
  }
  async createInfluencer(influencerData: any) {
    try {
      return database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInfluencerId,
        ID.unique(),
        influencerData
      );
    } catch (error) {
      console.log(error);
    }
  }

  async createBrand(brandData: any) {
    try {
      return database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBrandId,
        ID.unique(),
        brandData
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getBrandData(key: string) {
    try {
      return database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteBrandId,
        [Query.equal("key", key)]
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getInfluencerData(key: string) {
    try {
      return database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteInfluencerId,
        [Query.equal("key", key)]
      );
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("logout error" + error);
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
