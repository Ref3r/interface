import React from "react";
import Image from "next/image";

function ProfileSetting() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-3xl text-white font-bold">Brand Name</label>
          <input
            type="text"
            id="event-name"
            placeholder="Name"
            className="bg-[#27292D] text-lg rounded-2xl p-4 text-white  w-[50%]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-3xl text-white font-bold">
            Brand Description
          </label>
          <textarea
            placeholder="Description..."
            rows={4}
            className="bg-[#27292D] rounded-2xl p-4 text-white resize-none w-[50%]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-3xl text-white font-bold">Website Link</label>
          <input
            type="text"
            id="event-name"
            placeholder="Link"
            className="bg-[#27292D] text-lg rounded-2xl p-4 text-white  w-[50%]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl text-white font-bold">Brand Logo</p>
          <Image
            src="/LogoUpload.svg"
            width="252"
            height="300"
            className="w-[10%]"
            alt="Ref3r logo"
          />
        </div>
      </div>

      <div className="w-[70%] flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl text-white font-bold">
            Profile Visibility
          </div>
          <input
            type="text"
            id="event-name"
            placeholder="Peter Griffin"
            className="bg-[#27292D] text-lg rounded-2xl p-4 text-white  w-[50%]"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-2xl text-white font-bold">
            Partnerships Visibility
          </div>
          <input
            type="text"
            id="event-name"
            placeholder="Peter Griffin"
            className="bg-[#27292D] text-lg rounded-2xl p-4 text-white  w-[50%]"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-2xl text-white font-bold">
            Follower Count Visibility
          </div>
          <input
            type="text"
            id="event-name"
            placeholder="Peter Griffin"
            className="bg-[#27292D] text-lg rounded-2xl p-4 text-white  w-[50%]"
          />
        </div>
      </div>

      <div className="flex flex-col w-[65%]">
        <div className="flex justify-between items-center">
          <p className="text-white text-lg">Connect/Disconnect Social Media</p>
          <button className="text-[#00B24F] text-xl font-medium px-4 py-2 border-2 border-[#00B24F] rounded-lg">
            Social Media Accounts
          </button>
        </div>
      </div>

      <div className="gap-4 flex ">
        <button className="bg-[#00B24F] p-4 text-xl text-white rounded-xl min-w-[15%]">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileSetting;
