import React from 'react';
import Image from 'next/image';
const WhyChooseUsPage = () => {
  return (
    <>
      <Image className='bg-black w-full space-y-5'
        src={'/image/Why chose us.png'}
        alt="image description"
        width={1320}
        height={716}
      />

      <Image 
      src={'/image/Clients.png'}
      alt='img desc'
      width={1923}
      height={400}
      />
    </>


  );
};

export default WhyChooseUsPage;