import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'

import Image from 'next/image';



const HeroHeader: React.FC = () => { 
  return (
    <div className="bg-black h-screen flex justify-end items-center relative">
      {/* Vertical Lines and Social Media Icons */}
      <div className="flex flex-col items-center space-y-6 absolute left-10 top-[30%] transform -translate-y-1/2">
        {/* First Line */}
        <div className="w-px h-24 bg-white opacity-50" />

        {/* Social Media Icons */}
        <div className="space-y-8 text-white">
          <a href="#" className="flex items-center space-x-2 text-white hover:text-blue-500">
            <FaFacebookF />
          </a>

          <a href="#" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-500">
            <FaTwitter />
          </a>

          <a href="#" className="flex items-center space-x-2 text-white hover:text-red-500">
            <FaPinterestP />
          </a>
        </div>

        {/* Second Line */}
        <div className="w-px h-24 bg-white opacity-50" />
      </div>

      {/* Text Content */}
      <div className={`$text-[32px]   absolute top-[100px] left-[100px] text-[#ff9f0d]`}>
        Its Quick & Amusing!
      </div>
      <h1 className=' text-[60px] w-[472px] absolute top-[140px] left-[100px] text-white '>
        <span className='text-[#FF9F0D]'>Th</span>e Art Of Speed food Quality
      </h1>
      <div className='w-1/2 flex justify-center items-center absolute  top-[10px] left-auto'>
      <Image
            src={"/image/pic.png"}
            alt='image description'
            width={877.8}
            height={670}
      />
      </div>
      <div className=' w-[418px] text-[16px] h-[48px]  left-[100px] absolute top-[px] text-white'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue
      </div>
      <div>
        <button className= "w-[190px] h-[60px] bg-[#FF9F0D] text-[16px] rounded-[30px] absolute top-[430px] left-[100px] p-2 flex items-center justify-center text-white" >
            See Menu
        </button>
      </div>
    </div>
  );
};

export default HeroHeader;

