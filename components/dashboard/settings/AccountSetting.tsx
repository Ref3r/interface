import React from "react";

function AccountSetting() {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-[50%] flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <label className="text-2xl text-white font-bold">Name</label>
          <input
            type="text"
            id="event-name"
            placeholder="Peter Griffin"
            className="bg-[#27292D] rounded-xl p-3 text-white  w-[50%]"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-2xl text-white font-bold">Username</label>
          <input
            type="text"
            id="event-name"
            placeholder="Peterdactyl2015"
            className="bg-[#27292D] rounded-xl p-3 text-white  w-[50%]"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-2xl text-white font-bold">Email</label>
          <input
            type="text"
            id="event-name"
            placeholder="hello@designdrops.io"
            className="bg-[#27292D] rounded-xl p-3 text-white  w-[50%]"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-2xl text-white font-bold">HP no.</label>
          <input
            type="text"
            id="event-name"
            placeholder=""
            className="bg-[#27292D] rounded-xl p-3 text-white  w-[50%]"
          />
        </div>
      </div>

      <div className="w-[80%] flex flex-col gap-4">
        <div className="p-6 rounded-lg bg-[#2D2D2D] flex justify-between items-center">
          <div>
            <p className="text-white text-xl font-semibold">Password</p>
            <p className="text-[#9CB3C9] text-lg">
              You signed up via Google, so you don&#39;t have a password.
            </p>
          </div>
          <button className="bg-[#00B24F] p-3 text-lg text-white rounded-xl w-[14%]">
            Change
          </button>
        </div>

        <div className="p-6 rounded-lg bg-[#2D2D2D] flex justify-between items-center">
          <div>
            <p className="text-white text-xl font-semibold">
              Add members & assigned roles
            </p>
            <p className="text-[#9CB3C9] text-lg">Lorem epsum....</p>
          </div>
          <button className="bg-[#00B24F] p-3 text-lg text-white rounded-xl w-[14%]">
            Add
          </button>
        </div>

        <div className="p-6 rounded-lg bg-[#2D2D2D] flex justify-between items-center">
          <div>
            <p className="text-white text-xl font-semibold">2FA</p>
            <p className="text-[#9CB3C9] text-lg">Lorem epsum.....</p>
          </div>
          <button className="bg-[#00B24F] p-3 text-lg text-white rounded-xl w-[14%]">
            Enable
          </button>
        </div>

        <div className="p-6 rounded-lg bg-[#2D2D2D] flex justify-between items-center">
          <div>
            <p className="text-white text-xl font-semibold">Support</p>
            <p className="text-[#9CB3C9] text-lg">Lorem epsum</p>
          </div>
          <button className="bg-[#00B24F] p-3 text-lg text-white rounded-xl w-[14%]">
            Contact
          </button>
        </div>

        <div className="p-6 rounded-lg bg-[#2D2D2D] flex justify-between items-center">
          <div>
            <p className="text-white text-xl font-semibold">Deletion</p>
            <p className="text-[#9CB3C9] text-lg">
              Permanently delete your account, posts, and comments.
            </p>
          </div>
          <button className="bg-[#B50218] p-3 text-lg text-white rounded-xl w-[14%]">
            Delete
          </button>
        </div>
      </div>

      <div className="gap-4 flex ">
        <button className="bg-[#00B24F] p-3 text-lg text-white rounded-xl min-w-[15%]">
          Save Changes
        </button>
        <button className="p-3 text-lg font-semibold text-[#AFAFAF] rounded-xl min-w-[15%]">
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default AccountSetting;
