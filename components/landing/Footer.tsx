import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#058E41] flex justify-center items-center w-full py-12 text-white">
      <div className="w-[85%] flex flex-col gap-8">
        <div className="flex justify-between flex-col sm:flex-row gap-6 sm:gap-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Product</h3>
            <div className="text-sm text-[#C0E3CF] flex flex-col gap-2">
              <p>Employee Database</p>
              <p>Payroll</p>
              <p>Absences</p>
              <p>Time Tracking</p>
              <p>Shift planner</p>
              <p>Recruiting</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Information</h3>
            <div className="text-sm text-[#C0E3CF] flex flex-col gap-2">
              <p>FAQ</p>
              <p>Blog</p>
              <p>Support</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Company</h3>
            <div className="text-sm text-[#C0E3CF] flex flex-col gap-2">
              <p>About Us</p>
              <p>Careers</p>
              <p>Contact Us</p>
              <p>Lift Media</p>
            </div>
          </div>
          <div className="bg-[#1E9954] subscribe-bg py-4 px-10 flex flex-col gap-3 rounded-2xl sm:w-[30%]">
            <label className="text-2xl">Subscribe</label>
            <div className="bg-black flex justify-center items-center rounded-md cursor-pointer">
              <input
                type="email"
                name="email"
                id="mail"
                placeholder="Email Address"
                className="outline-none p-3 w-[80%] rounded-l-md"
              />
              <div className="w-[20%] flex justify-center items-center">
                <Image
                  src="/icons/Arrow.svg"
                  width="252"
                  height="300"
                  className="w-[30%]"
                  alt="Ref3r logo"
                />
              </div>
            </div>
            <p className="text-[0.75rem]">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </p>
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#37A567]"></div>

        <div className="flex justify-between items-center flex-col sm:flex-row gap-6 sm:gap-3">
          <div className="flex justify-center sm:justify-normal items-center">
            <Image
              src="/refer-logo.png"
              width="252"
              height="300"
              className="w-[70%]"
              alt="Ref3r logo"
            />
          </div>
          <div className="flex justify-between items-center text-sm gap-8">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/FooterLinkedin.svg"
              width="252"
              height="300"
              className="w-[70%]"
              alt="Twitter"
            />
            <Image
              src="/icons/FooterFacebook.svg"
              width="252"
              height="300"
              className="w-[70%]"
              alt="Facebook"
            />
            <Image
              src="/icons/FooterTwitter.svg"
              width="252"
              height="300"
              className="w-[70%]"
              alt="Twitter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
