"use client";
import { useState } from "react";
import Image from "next/image";

const ChatPop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button onClick={togglePopup} className="">
        <Image
          src="/icons/Message.svg"
          width="30"
          height="65"
          alt="home fill"
          className=""
        />
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-end items-end z-10 right-[2.5%]">
          <div className="flex flex-col w-[50%] justify-center items-center shadow-lg">
            <div className="flex justify-between items-center w-full bg-[#323439] border border-[#DFE0EB] rounded-t-xl">
              <div className="text-white text-lg font-semibold py-4 px-3 flex items-center gap-3">
                <Image
                  src={"/profile.svg"}
                  width={30}
                  height={30}
                  alt="go"
                  className="rounded-full"
                />
                <div className="flex flex-col justify-start items-start">
                  <p>Name</p>
                  <p className="text-sm font-normal">#CU6798S</p>
                </div>
              </div>
              <button
                onClick={togglePopup}
                className="text-white font-bold py-2 px-4"
              >
                Close Chat
              </button>
            </div>

            <div className="h-[60vh] bg-black flex flex-col w-full py-4 gap-10">
              <div className="h-[40vh] overflow-auto flex justify-center w-full">
                <div className="flex flex-col items-center w-[75%] gap-6">
                  <div className="w-full flex justify-start gap-4">
                    <Image
                      src={"/profile.svg"}
                      width={30}
                      height={30}
                      alt="go"
                      className="rounded-full"
                    />
                    <p className="text-start p-2 max-w-[50%] border border-[#C6FFE6] bg-[#27292D] rounded-xl text-sm text-[#00B24F]">
                      Lorem Ipsum has been the industrys standard dummy text
                      ever since the 1500s,
                    </p>
                  </div>

                  <div className="w-full flex justify-end gap-4">
                    <p className="text-start p-2 max-w-[50%] border border-[#00B24F] bg-[#00B24F] rounded-xl text-sm text-white">
                      Lorem Ipsum has been the industrys standard dummy text
                      ever since the 1500s,
                    </p>
                    <Image
                      src={"/profile.svg"}
                      width={30}
                      height={30}
                      alt="go"
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-full flex justify-start gap-4">
                    <Image
                      src={"/profile.svg"}
                      width={30}
                      height={30}
                      alt="go"
                      className="rounded-full"
                    />
                    <p className="text-start p-2 max-w-[50%] border border-[#C6FFE6] bg-[#27292D] rounded-xl text-sm text-[#00B24F]">
                      Lorem Ipsum has been the industrys standard dummy text
                      ever since the 1500s,
                    </p>
                  </div>

                  <div className="w-full flex justify-end gap-4">
                    <p className="text-start p-2 max-w-[50%] border border-[#00B24F] bg-[#00B24F] rounded-xl text-sm text-white">
                      Lorem Ipsum has been the industrys standard dummy text
                      ever since the 1500s,
                    </p>
                    <Image
                      src={"/profile.svg"}
                      width={30}
                      height={30}
                      alt="go"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="flex justify-between text-start p-2 w-[70%] border border-[#C6FFE6] bg-[#27292D] rounded-xl text-sm text-[#00B24F]">
                  <p className="pl-2 max-w-[50%] text-[#DBDBDB]">
                    Type Your Message......
                  </p>
                  <div>
                    <button>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPop;
