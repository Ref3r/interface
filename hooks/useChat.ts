// useChat.ts
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { appwriteApi } from "@/appwrite/config";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";

export function useChat(room: string) {
  const [nameID, setNameID] = useState<string>();
  const [roomID, setRoomID] = useState<string>();
  const [messages, setMessages] = useState<any>();
  const [currMessage, setCurrMessage] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const result = room.replace(/%40/g, "@").split("-");
    const key = result[0];

    async function updateData() {
      console.log(key);
      setRoomID(result[1] + result[2]);
      console.log(result[1] + "-" + result[2]);

      if (result[0] === result[2]) {
        const data = await appwriteService.getInfluencerData(key);
        setNameID(data.documents[0].name);
        console.log(data.documents[0].name);
      } else if (result[0] === result[1]) {
        const data = await appwriteService.getBrandData(key);
        setNameID(data.documents[0].name);
        console.log(data);
      }

      const data = await appwriteService.getCurrentUser();
      console.log(data);
    }

    updateData();

    async function getMessages() {
      const prevMessages = await appwriteService.getMessages(result[1] + result[2]);
      setMessages(prevMessages.documents);
    }

    getMessages();
  }, [room]);

  useEffect(() => {
    const unsubscribe = appwriteApi.subscribe(
      `databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteChatId}.documents`,
      (response) => {
        if (response.events.includes("databases.*.collections.*.documents.*.create")) {
          setMessages((prev) => [...prev, response.payload]);
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  async function sendMessage(e: any) {
    e.preventDefault();
    const message = e.target.message.value;
    const name = nameID;
    const chatObj = {
      name: name,
      room: roomID,
      messages: message,
    };
    setCurrMessage("");
    const res = await appwriteService.createChat(chatObj);
    console.log(res);
  }

  return {
    nameID,
    roomID,
    messages,
    currMessage,
    setCurrMessage,
    sendMessage,
    router,
  };
}