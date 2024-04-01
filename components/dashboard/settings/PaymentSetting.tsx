import React from "react";
import Image from "next/image";

function PaymentSetting() {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-[80%] flex flex-col gap-4">
        <div className="p-8 rounded-lg bg-[#2D2D2D] flex justify-between items-center">
          <div>
            <p className="text-white text-2xl font-semibold">Wallet</p>
            <p className="text-[#9CB3C9] text-xl">Connect Your Wallet</p>
          </div>
          <button className="text-[#00B24F] text-xl font-medium px-4 py-2 border-2 border-[#00B24F] rounded-lg w-[14%]">
            Connect
          </button>
        </div>

        <div className="p-8 rounded-lg bg-[#2D2D2D] flex justify-between items-center">
          <div>
            <p className="text-white text-2xl font-semibold">Paypal</p>
            <p className="text-[#9CB3C9] text-xl">
              Connect your Paypal Account
            </p>
          </div>
          <button className="text-[#00B24F] text-xl font-medium px-4 py-2 border-2 border-[#00B24F] rounded-lg w-[14%]">
            Connect
          </button>
        </div>

        <div className="p-8 rounded-lg bg-[#2D2D2D] flex justify-between items-center">
          <div>
            <p className="text-white text-2xl font-semibold">Stripe</p>
            <p className="text-[#9CB3C9] text-xl">
              Connect Your Stripe Account
            </p>
          </div>
          <button className="text-[#00B24F] text-xl font-medium px-4 py-2 border-2 border-[#00B24F] rounded-lg w-[14%]">
            Connect
          </button>
        </div>

        <div className="p-8 rounded-lg bg-[#2D2D2D] flex justify-between items-center">
          <div>
            <p className="text-white text-2xl font-semibold">Plans</p>
            <p className="text-[#9CB3C9] text-xl">
              Manage your plans and their details
            </p>
          </div>
          <button className="bg-[#00B24F] px-4 py-2 text-xl text-white rounded-xl w-[14%]">
            Manage
          </button>
        </div>
      </div>

      <button className="flex items-center gap-2">
        <Image
          src="/icons/download-Filled.svg"
          width="100"
          height="100"
          className="w-[3%]"
          alt="Ref3r logo"
        />
        <p className="text-[#AFAFAF] font-medium">EXPORT MY DATA</p>
      </button>
    </div>
  );
}

export default PaymentSetting;
