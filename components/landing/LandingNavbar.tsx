"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import appwriteService from "@/appwrite/config";

import {
  DynamicConnectButton,
  DynamicWidget,
  getAuthToken,
  useDynamicContext,
  useIsLoggedIn,
} from "@/lib/dynamic";
import {
  useBrandData,
  usePublicKey,
  useInfluencerData,
  useIsInfluencer,
} from "@/store";

function LandingNavbar() {
  const [Toggle, setToggle] = useState(true);

  const router = useRouter();
  const { user, authToken, isAuthenticated, setShowAuthFlow, handleLogOut } =
    useDynamicContext();
  // const isUserLoggedIn = useIsLoggedIn()
  // console.log(isUserLoggedIn)
  async function createUser(key: string) {
    const user = await appwriteService.createUserAccount(key);
  }
  async function checkUserExist(key: string) {
    console.log("checking if user exists otherwise registering new user");
    try {
      //await appwriteService.login(key);
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
  // if (isAuthenticated) {
  //   console.log("user payload data", user?.email);

  //   usePublicKey.setState({ publicKey: user?.email });
  //   const key = usePublicKey.getState().publicKey;
  //   console.log(key);
  //   const userCheck = async () => {
  //     console.log("key being added", key);
  //     const user = await checkUserExist(key);
  //     console.log(user);
  //     if (user) {
  //       router.push("/dashboard");
  //     }
  //   };
  //   userCheck();
  // }
  const handleClick = () => {
    setToggle(!Toggle);
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("user payload data", user?.email);

      usePublicKey.setState({ publicKey: user?.email });
      const key = usePublicKey.getState().publicKey;
      console.log(key);

      const userCheck = async () => {
        console.log("key being added", key);
        const user = await checkUserExist(key);
        const setup = await checkUserSetup(key);
        console.log(user);
        console.log(setup);
        if (user) {
          router.push("/dashboard");
        }
      };

      userCheck();
    }
  }, [isAuthenticated]); // Only re-run when isAuthenticated changes

  //const key = "0x953ed43e99938fDD2B0c91E4521Cccc2762aF70A";
  //const key = usePublicKey.getState().publicKey;
  // function updatePublicKey(key: string) {
  //   usePublicKey.setState({ publicKey: key });
  // }
  // updatePublicKey("0x495yg3ed43e99938fDD2B0c91E4521Cccc2762aF70A");

  // useEffect(() => {
  //   const userCheck = async () => {
  //     const user = await checkUserExist();
  //     console.log(user);
  //     if (user) {
  //       // router.push("/dashboard");
  //     }
  //   };
  //   userCheck();
  // }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <nav className="z-10 md:bg-[#4A4A4A] mt-2 md:mt-10 w-[90%] rounded-md items-center justify-between text-[0.75rem] lg:text-sm font-semibold text-white flex">
        <Link href="/" className="md:w-[10%]">
          <Image
            src="/refer-logo.png"
            width="252"
            height="300"
            className="w-[70%] md:w-[60%] md:ml-4 my-2"
            alt="Ref3r logo"
          />
        </Link>

        <div className="md:flex w-[90%] justify-evenly items-center hidden">
          <div className="flex gap-[2rem] justify-center items-center w-[80%]">
            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">Home</p>
            </Link>

            <Link
              // target="_blank"
              href="/"
            >
              <p className="hoverUnderline hover:text-[#00B24F]">Benefits</p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                What we offer
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                How it works
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                Testimonials
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">Contact us</p>
            </Link>
          </div>

          <div className="mr-4">
            {/* <Link href="/" className="">
              <Image
                src="/login.svg"
                width="252"
                height="300"
                className="w-[70%] md:ml-4 my-2"
                alt="Ref3r logo"
              />
            </Link> */}
            {/* <DynamicWidget /> */}
            {/* <DynamicConnectButton> {isAuthenticated ? 'logout' : 'login'}</DynamicConnectButton> */}

            <button
              className="border px-6 py-2 rounded hover:bg-white hover:text-black"
              onClick={() =>
                isAuthenticated ? handleLogOut() : setShowAuthFlow(true)
              }
            >
              {isAuthenticated ? "sign out" : "login"}
            </button>
          </div>
        </div>

        {Toggle ? (
          <Image
            src="/small.svg"
            alt="menu"
            width="65"
            height="30"
            className="z-0 md:hidden"
            onClick={handleClick}
          />
        ) : (
          <Image
            src="/close.png"
            alt="close"
            width="20"
            height="30"
            className="z-0 md:hidden"
            onClick={handleClick}
          />
        )}

        <div
          className={`delay-300 md:hidden text-center flex justify-center items-center gap-8 py-12 h-screen bg-black/70 w-full fixed top-[55px] text-white flex-col ${
            Toggle ? "right-[100%]" : "left-[100%]}"
          }`}
        >
          <div className="flex flex-col gap-[2rem]  w-[80%]">
            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">Home</p>
            </Link>

            <Link
              // target="_blank"
              href="/"
            >
              <p className="hoverUnderline hover:text-[#00B24F]">Benefits</p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                What we offer
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                How it works
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                Testimonials
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">Contact us</p>
            </Link>
          </div>

          <div className="md:mr-4">icon</div>
        </div>
      </nav>
    </div>
  );
}

export default LandingNavbar;
