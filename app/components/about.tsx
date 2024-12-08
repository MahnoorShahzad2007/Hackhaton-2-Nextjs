import React from 'react';
import Image from 'next/image';
const AboutPage: React.FC = () => {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen">
      <div className="bg-black shadow-lg rounded-lg p-8 w-full max-w-3xl">
        
        <h1 className="text-[32px]   absolute top-[750px] left-[100px] text-[#ff9f0d]">About Us</h1>
        <div className='text-[50px] w-[446px] absolute top-[800px] left-[100px] text-white'><span className='text-[#FF9F0D]'>We</span> Create the best foody products</div>
        <p className=" w-1/3 text-[16px] h-[48px]  left-[100px] absolute top-[950px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam Quisque diam pellentesque bibendum non dui volutpat fringill pellentesque Lacus nisi, et ac dapibus sit eu velit in consequat. bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <ul className="list-disc list-inside text-white space-y-2 left-[140px] absolute top-[1120px]">
          <li>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
          <li>Quisque diam pellentesque bibendum non dui volutpat fringilla</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        </ul>
      </div>
      <button className='w-[190px] h-[60px] bg-[#FF9F0D] text-[16px] rounded-[30px] absolute top-[1230px] left-[110px] p-2 flex items-center justify-center text-white"'>
        Read More
      </button>
      <div className=' absolute top-[750px] w-1/2  left-[800px] space-y-5'>
       <Image
       src={"/image/eggs.png"}
       alt='image description'
       width={660}
       height={330}
       />
       <div className='absolute  flex space-x-5'>
        <Image
        src={"/image/chicken.png"}
        alt='image description'
        width={322}
        height={194}
        />
            <Image
            src={"/image/sandwhich.png"}
            alt="image description"
            width={322}
            height={194}
            />
        
       </div>
      </div>
    </div>
  );
};

export default AboutPage;
