"use client";
import { useState } from "react";
import WhitelistInfluencer from "./WhitelistInfluencer";
import { ContractInstance, useCreateCampaignContract } from "@/ethers/utils";
import { useWeb3Auth } from "@/hooks/useWeb3Auth";
import { ethers } from "ethers";
import { AbiReferFactory, ContractAddressReferFactory } from "@/config";
import { useContractInstance } from "@/hooks/ContractHooks/useContractInstance";


function CreateCampaign() {
  const useCreateCampign = async (amount: string, rate: string, time: Number) => {
    const Web3Auth = useWeb3Auth
    // const CreateCampaginContract = async (time: Number, amount: string, rate: string) => {
    //   const provider = await new ethers.providers.Web3Provider(Web3Auth.provider as any)
    //   const signer = provider.getSigner()
    const contract: any = await useContractInstance()
    // const amountInWei = ethers.utils.parseEther(amount)
    // const rateInWei = ethers.utils.parseEther(rate)
    console.log('reached here')
    const tx = await contract?.createCampaign("12", "12", "12")
    console.log("Campaign Created", tx)
    // const getCampign = await contract?.fetchAllCmapaign()
    // console.log(getCampign)
  }
  const cc = useCreateCampign('12', '12', 12)
  return (
    <>
      <div className={`w-[98%] flex gap-2 py-6 pl-4`}>
        <div className="w-[50%] text-white flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Create Campaigns</h1>

          <div className="flex flex-col w-[50%] text-sm">
            <label className="mb-2">Campaigns Name</label>
            <input
              type="text"
              id="event-name"
              placeholder="Name"
              className="bg-[#27292D] rounded-xl p-2 outline-none text-sm"
            />
          </div>

          <div className="flex flex-col w-[50%] text-sm">
            <label className="mb-2">Campaigns Description</label>
            <textarea
              placeholder="Description..."
              rows={4}
              className="bg-[#27292D] rounded-xl p-2 resize-none outline-none text-sm"
            />
          </div>

          <div className="flex flex-col w-[50%] text-sm">
            <label className="mb-2">Campaigns Budget</label>
            <input
              type="number"
              name="budget"
              placeholder="$"
              id="campaign-budget"
              className="bg-[#27292D] rounded-xl p-2 outline-none text-sm"
            />
          </div>

          <div className="flex flex-col w-[50%] text-sm">
            <label className="mb-2">Select Campaigns Niche</label>
            <input
              type="text"
              placeholder=""
              id="Niche"
              className="bg-[#27292D] rounded-xl p-2 outline-none text-sm"
            />
          </div>

          <div className="flex flex-col w-[50%] text-sm">
            <label className="mb-2">Commission per affiliate</label>
            <input
              type="number"
              name="commission"
              placeholder="$"
              id="campaign-commission"
              className="bg-[#27292D] rounded-xl p-2 outline-none text-sm"
            />
          </div>

          <button className="py-3 bg-[#00B24F] text-white text-sm text-center w-[35%] rounded-lg cursor-pointer" onClick={() => cc}>
            Create Campaign
          </button>
        </div>
        <div className="w-[50%] rounded-2xl bg-[#15A145] flex justify-center items-center h-[90vh]"></div>
      </div>
    </>
  );
}

export default CreateCampaign;
