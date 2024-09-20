import React from 'react'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
function Nav() {
  return (
    <div className='w-full h-[8%] bg-[#181B1A] overflow-hidden flex'>
        <div className='p-4 pl-6 flex '>
            <h1 className='font-extrabold italic text-white ml-[4%] text-2xl'>MADBURG</h1>
           
        </div>
        <div className='flex text-cneter p-4 ml-[15%] gap-5'>
            <h1 className='cursor-pointer font-bold text-lg text-white'>
             LIMITED STOCK
            </h1>
            <h1 className='cursor-pointer font-bold text-lg text-white'>
             BACK PACKS
            </h1>
            <h1 className='cursor-pointer font-bold text-lg text-white'>
            FANNY PACKS
            </h1>
            <h1 className='cursor-pointer font-bold text-lg text-white'>
            TECH KITS
            </h1>
            <h1 className='cursor-pointer font-bold text-lg text-white'>
                ABOUT
           </h1>
        </div>
       
        <div className='flex items-center gap-7 ml-[15%]'>
            <MdOutlineAccountBalanceWallet className='w-10 h-9 text-2xl  text-white cursor-pointer ' />
            <IoBag className='w-10 h-9 text-2xl  text-white cursor-pointer ' />
            <CiSearch className='w-10 h-9 text-xl text-white cursor-pointer ' />
            
        </div>
       
         </div>
  )
}

export default Nav