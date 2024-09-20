import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoReloadOutline } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
function Page1() {
  const [set, setVal] = useState(1);
  return (
    <div className="bg-white h-[92%] w-full">
      <div className="w-full h-full flex">
        <div className="w-[60%] h-full  ">
          <div className="mt-10 w-[90%] bg-[#ADADAD] h-[90%] ml-5 rounded-lg items-center  ">
            <img
              className="rounded-lg h-[95%]"
              src="https://www.madbrag.com/cdn/shop/products/gadgetorganizerblackandneon.jpg?v=1671879497&width=1920"
              alt=""
            />
          </div>
          <div>
            <div className="w-[80%] ml-5 mt-5 flex gap-5 m">
              <div className="w-[25%] rounded-md h-[30%] rounded-md ">
                <img
                  className="rounded-lg cursor-pointer "
                  src="https://www.madbrag.com/cdn/shop/products/gadgetorganizerblackandneon.jpg?v=1671879497&width=1920"
                  alt=""
                />
              </div>
              <div className="w-[25%] rounded-md h-[30%] rounded-md ">
                <img
                  className="rounded-lg cursor-pointer "
                  src="https://www.madbrag.com/cdn/shop/products/gadgetorganizerblackandneon4.jpg?v=1671879497&width=1920"
                  alt=""
                />
              </div>
              <div className="w-[25%] rounded-md h-[30%] rounded-md">
                <img
                  className="rounded-lg cursor-pointer "
                  src="https://www.madbrag.com/cdn/shop/products/gadgetorganizerblackandneon2.jpg?v=1671879497&width=1920"
                  alt=""
                />
              </div>
              <div className="w-[25%] rounded-md h-[30%] rounded-md">
                <img
                  className="rounded-lg cursor-pointer "
                  src="https://www.madbrag.com/cdn/shop/products/gadgetorganizerblackandneon3.jpg?v=1671879497&width=1920"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] h-full ">
          <h1 className="mt-10 text-[2vw] w-[80%] font-bold ">
            MAD KIT | Tech Organizer - Black & Neon
          </h1>
          <p className="font-normal mt-3">
            Rs. 1,199.00 <span className="line-through">Rs. 2,000.00</span>
          </p>
          <p className="mt-2">Tax Included.</p>
          <div className="w-[73%] h-[10%] rounded-lg mt-3 border-2 border-black">
            <p className="py-2 px-1">
              or <span className="font-semibold"> 3</span> monthly payments of
              <span className="font-semibold">₹400</span> with
              <span className="font-semibold">Madbrag Pay Later </span>
              UPI & Cards Accepted.
            </p>
          </div>
          <div className="flex mt-7">
            <h6>Quantity</h6>
            <div
              onClick={() => setVal((prev) => prev + 1)}
              className="w-[40px] h-[40px] border-2 border-black flex ml-5 cursor-pointer  rounded-full items-center justify-center"
            >
              <FaPlus className="h-[50%] w-[80%] " />
            </div>
            <h1 className="text-2xl ml-4">{set}</h1>
            <div
              onClick={() => setVal((prev) => prev - 1)}
              className="w-[40px] h-[40px] border-2 border-black flex ml-5 cursor-pointer  rounded-full items-center justify-center ml-6"
            >
              <RiSubtractFill className="h-[80%] w-[80%]" />
            </div>
          </div>
          <span className="flex mt-5">
            {" "}
            <MdOutlineLocalOffer className="text-2xl" />
            <p className="ml-3 font-light">BUY NOW & GET 35% EXTRA OFF!</p>
          </span>
          <p className="font-bold text-lg mt-3">
            USE CODE: "MAD35" <span className="font-thin">AT CHECKOUT</span>
          </p>
          <div className="mt-10 items-center">
            <p className="ml-[35%]">SOLD OUT</p>
            <p className="ml-[25%] mt-10">Also Available at COD on</p>
            <div className="flex gap-3">
              <img
                className="h-[70px] mt-3"
                src="https://cdn.shopify.com/s/files/1/0695/1206/9402/files/5a902dad7f96951c82922872.png?v=1680541782"
                alt=""
              />
              <img
                className="h-[70px] mt-3"
                src="https://cdn.shopify.com/s/files/1/0695/1206/9402/files/Myntra-logo-horizontal.png?v=1680541895"
                alt=""
              />
              <img
                className="h-[70px] mt-3"
                src="https://cdn.shopify.com/s/files/1/0695/1206/9402/files/ajio_madbrag_99fe2901-221e-4585-aede-035feaf66673.png?v=1680542573"
                alt=""
              />
            </div>
            <div className="flex mt-10 items-center ml-5 gap-[7.5vw]">
              <CiDeliveryTruck className="text-4xl  font-thin" />
              <IoReloadOutline className="text-4xl ml-5 font-thin " />
              <GrSecure className="text-4xl ml-10 font-light" />
            </div>
            <div className="flex gap-5 ">
              <p>Free & Fast Shipping</p>
              <p className="ml-3">Easy Returns</p>
              <p className="ml-[4vw]">Secure Payments</p>
            </div>
            <h1 className="mt-5 text-4xl font-bold">
              Gadget Organizer | Tech Kit
            </h1>
            <p className="mt-5 font-normal">
              Introducing our versatile and durable gadget organizer - the
              ultimate tech kit designed to help you effortlessly sort and store
              all your tech accessories. Made with high-quality Artificial
              leather and sturdy foam molding, our gadget organizer is both
              stylish and functional.
            </p>
            <p className="mt-5 font-normal">
              The interior of our organizer features mesh compartments and
              pockets to keep all your minimal add-on accessories organized and
              easily accessible. Whether you're at work or on the go, this
              organizer is the go-to solution for all tech-savvy professionals
              who want to keep their gadgets and accessories in one optimized
              place.
            </p>
            <p className="mt-5 font-normal">
              With its sleek design and compact size, our gadget organizer is
              perfect for anyone who wants to travel light without compromising
              on their essential tech gear. Say goodbye to tangled cables and
              misplaced accessories - our gadget organizer ensures that you have
              everything you need within reach.
            </p>
            <p className="mt-5 font-normal">
              Whether you need to store your phone charger, earphones, USB
              drives, or any other tech accessory, our gadget organizer has got
              you covered. With its sturdy construction, premium materials, and
              practical design, this gadget organizer is the ultimate tech kit
              for anyone who wants to stay organized and productive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
