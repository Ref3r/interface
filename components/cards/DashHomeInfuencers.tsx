"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useBrandData, useInfluencerData, usePublicKey } from "@/store";
import { checkUserType } from "@/appwrite/utils";
import appwriteService from "@/appwrite/config";

const DashHomeInfuencers = ({
  image,
  name,
  currentUserDocumentId,
  cardDocumentId,
  cardUserKey,
}: {
  image: any;
  name: string;
  currentUserDocumentId: string;
  cardDocumentId: string;
  cardUserKey: string;
}) => {
  //console.log(currentUserDocumentId);
  //console.log(cardDocumentId);
  //console.log(name);
  const [isConnected, setIsconnected] = useState(false);
  const currentUserKey = usePublicKey.getState().publicKey;
  async function fetchCurrentUserConnections(key: string) {
    const userType = await checkUserType(key);
    if (userType == "brand") {
      const res = await appwriteService.updateBrandConnection(
        currentUserDocumentId,
        useBrandData.getState().connections + `,${cardUserKey}`
      );
      console.log(res);
    }
    if (userType == "influencer") {
      const res = await appwriteService.updateInfluencerConnection(
        currentUserDocumentId,
        useInfluencerData.getState().connections + `,${cardUserKey}`
      );
      console.log(res);
    }
  }
  async function fetchCardUserConnections(key: string) {
    const userType = await checkUserType(key);
    if (userType == "brand") {
      const res = appwriteService.updateBrandConnection(
        cardDocumentId,
        useBrandData.getState().connections + `,${currentUserKey}`
      );
      console.log(res);
    }
    if (userType == "influencer") {
      const res = appwriteService.updateInfluencerConnection(
        cardDocumentId,
        useInfluencerData.getState().connections + `,${currentUserKey}`
      );
      console.log(res);
    }
  }
  async function updateConnections() {
    await fetchCurrentUserConnections(currentUserKey);
    await fetchCardUserConnections(cardUserKey);
    //console.log(currentUserConnections);
    // console.log(cardUserConnections);
  }
  //const [currentUserConnections, setCurrentUserConnections] =
  //  useState<string>();
  // const [cardUserConnections, setCardUserConnections] = useState<string>();
  async function fetchConnections(key: string) {
    const userType = await checkUserType(key);
    if (userType == "brand") {
      const connections = useBrandData.getState().connections;
      console.log(connections);
      console.log(cardUserKey);
      if (connections.includes(cardUserKey)) {
        setIsconnected(true);
      }
    }
    if (userType == "influencer") {
      const connections = useInfluencerData.getState().connections;
      console.log(connections);
      console.log(cardUserKey);
      if (connections.includes(cardUserKey)) {
        setIsconnected(true);
      }
    }
  }
  fetchConnections(currentUserKey);
  return (
    <div className="w-[12%] bg-[#27292DCC] p-2 rounded-xl flex flex-col justify-center text-center items-center gap-4 min-h-[220px]">
      <Image
        // src={`/${image}.svg`}
        src={image}
        width="120"
        height="100"
        alt="fetch error"
        className="rounded-t-lg w-full"
      />
      <p className="text-white text-lg font-medium">{name}</p>
      {isConnected ? (
        <button
          onClick={() => {
            updateConnections();
          }}
          className="rounded bg-[#00B24F] text-white px-2 py-1 text-sm"
        >
          Message
        </button>
      ) : (
        <button
          onClick={() => {
            updateConnections();
          }}
          className="rounded bg-[#00B24F] text-white px-2 py-1 text-sm"
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default DashHomeInfuencers;
