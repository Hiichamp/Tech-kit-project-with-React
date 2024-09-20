import React from "react";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full h-50%  mt-[50%] h-[60%] bg-[#E4E4E4]   ">
      <div className="flex gap-20">
        <div className="ml-5 flex-col mt-10 translate-y-[50%]">
          <h3 className="text-lg  font-light tracking-widest  ml-10 hover:underline cursor-pointer ">
            Backpacks
          </h3>
          <h3 className="text-lg  font-light tracking-widest mt-2 ml-10 hover:underline cursor-pointer ">
            Fanny packs
          </h3>
          <h3 className="text-lg  font-light tracking-widest mt-2 ml-10 hover:underline cursor-pointer ">
            Tech Kits
          </h3>
          <h3 className="text-lg  font-light tracking-widest mt-2 ml-10 hover:underline cursor-pointer ">
            Contact
          </h3>
        </div>
        <div className=" flex-col mt-10 translate-y-[50%]">
          <h3 className="text-lg  font-light tracking-widest  ml-10 hover:underline cursor-pointer ">
            About Us
          </h3>
          <h3 className="text-lg  font-light tracking-widest mt-2 ml-10 hover:underline cursor-pointer ">
            Privacy Policy{" "}
          </h3>
          <h3 className="text-lg  font-light tracking-widest mt-2 ml-10 hover:underline cursor-pointer ">
            Terms of Service{" "}
          </h3>
          <h3 className="text-lg  font-light tracking-widest mt-2 ml-10 hover:underline cursor-pointer ">
            Shipping & Refund Policy
          </h3>
          <h3 className="text-lg  font-light tracking-widest mt-2 ml-10 hover:underline cursor-pointer ">
            Get Early Access{" "}
          </h3>
          <h3 className="text-lg  font-light tracking-widest mt-2 ml-10 hover:underline cursor-pointer ">
            Login
          </h3>
        </div>
        <div className="mt-[10%] flex gap-4">
          <FaFacebook className="text-2xl ml cursor-pointer" />
          <CiTwitter className="text-2xl  cursor-pointer" />
          <FaYoutube className="text-2xl   cursor-pointer" />
          <FaInstagram className="text-2xl   cursor-pointer" />
        </div>
        <div className="mt-[10%] ml-[10%] gap-3">
          <h1 className="text-2xl font-bold">
            Get Early access to exclusive offers !
          </h1>
          <input
            type="text"
            placeholder="example@gmail.com "
            className="w-[80%] px-3 h-[45%] mt-5 outline-none border-2 border-black rounded-2xl text-xl"
          />
          <button className="px-5 py-3 normal-case bg-black mt-5 ml-[22%] text-white text-xl tracking-widest font-bold rounded-2xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
