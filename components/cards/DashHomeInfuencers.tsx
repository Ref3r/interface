"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  useBrandData,
  useInfluencerData,
  useIsInfluencer,
  usePublicKey,
} from "@/store";
import { checkUserType } from "@/appwrite/utils";
import appwriteService from "@/appwrite/config";
import { useRouter } from "next/navigation";

const DashHomeInfuencers = ({
  image,
  name,
  currentUserDocumentId,
  cardDocumentId,
  cardUserKey,
}) => {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const currentUserKey = usePublicKey.getState().publicKey;

  useEffect(() => {
    const fetchConnections = async () => {
      const userType = await checkUserType(currentUserKey);
      const connections =
        userType === "brand"
          ? useBrandData.getState().connections
          : useInfluencerData.getState().connections;
      setIsConnected(connections?.includes(cardUserKey));
    };
    fetchConnections();
  }, [currentUserKey, cardUserKey]);

  const updateConnections = async () => {
    setIsLoading(true);

    const updateUserConnections = async (documentId, key, otherUserKey) => {
      const userType = await checkUserType(key);
      const updateFn =
        userType === "brand"
          ? appwriteService.updateBrandConnection
          : appwriteService.updateInfluencerConnection;
      await updateFn(
        documentId,
        useBrandData.getState().connections + `,${otherUserKey}`
      );
    };

    try {
      await updateUserConnections(
        currentUserDocumentId,
        currentUserKey,
        cardUserKey
      );
      await updateUserConnections(cardDocumentId, cardUserKey, currentUserKey);
      setIsConnected(true);
    } catch (error) {
      console.error("Error updating connections:", error);
    }

    setIsLoading(false);
  };

  const handleMessageClick = () => {
    const chatUrl = useIsInfluencer.getState().isInfluencer
      ? `/chat/${currentUserKey}-${cardUserKey}-${currentUserKey}`
      : `/chat/${currentUserKey}-${currentUserKey}-${cardUserKey}`;
    router.push(chatUrl);
  };

  return (
    <div className="w-[12%] bg-[#27292DCC] p-2 rounded-xl flex flex-col justify-center text-center items-center gap-4 min-h-[220px]">
      <Image
        src={image}
        width="120"
        height="100"
        alt="fetch error"
        className="rounded-t-lg w-full"
      />
      <p className="text-white text-lg font-medium">{name}</p>
      {isConnected ? (
        <button
          onClick={handleMessageClick}
          className="rounded bg-[#00B24F] text-white px-2 py-1 text-sm"
        >
          Message
        </button>
      ) : (
        <button
          onClick={updateConnections}
          className="rounded bg-[#00B24F] text-white px-2 py-1 text-sm"
          disabled={isLoading}
        >
          {isLoading ? "..." : "Connect"}
        </button>
      )}
    </div>
  );
};

export default DashHomeInfuencers;
