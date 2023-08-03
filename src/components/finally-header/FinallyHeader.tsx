import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const FinallyHeader = () => {
   return (
      <header className='sticky top-0 z-20 bg-zinc-800'>
         <div className='text-2xl flex justify-around items-center h-[124px]'>
            <Link
               to='/home/_all'
               className='flex items-center translate-y-1 cursor-pointer'
            >
               <BiArrowBack className='mr-2 translate-y-[2px]' />
               Back
            </Link>
            <div className='font-semibold text-6xl pr-24'>
               <Link to='/home/_all'>
                  <span className='text-indigo-600'>G</span>
                  Store
               </Link>
            </div>
            <div></div>
         </div>
      </header>
   );
};

export default FinallyHeader;
