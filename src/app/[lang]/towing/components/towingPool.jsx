'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TowingPoolImage from '@/images/towing/towing-pool.png';
import GreenGradientImage from '@/images/towing/green-gradient.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';
import { ArrowLeft } from '@/components/icons/arrowLeft';
import { ArrowRight } from '@/components/icons/arrowRight';

const RenderTowingPool = () => {
  const [isFirstScreen, setIsFirstScreen] = useState(true);

  return (
    <div className='relative h-[730px] w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[350px] max-md:w-full '>
      <div className='absolute z-[2] p-[50px] max-md:p-10'>
        <span className='text-[80px] leading-tight  text-white max-xl:text-[45px] max-md:text-[36px]'>
          Biggest towing pool in Switzerland.
        </span>
      </div>
      <Image
        src={TowingPoolImage}
        className='object-cover object-left'
        fill
        alt='Towing pool'
      />
      <CornerButtonContainer>
        <RoundButton
          icon={isFirstScreen ? Cross : ArrowLeft}
          onClick={() => setIsFirstScreen((prev) => !prev)}
          theme='dark'
          className='relative z-[1]'
          animation='group-hover:scale-125 group-hover:-rotate-45'
        />
      </CornerButtonContainer>
    </div>
  );
};

const RenderGreenGradient = () => {
  return (
    <div className='relative h-[730px] w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-md:h-[350px] max-md:w-full '>
      <div className='absolute z-[2] flex h-full flex-col content-between justify-between p-[50px] max-md:p-10'>
        <div className='text-[80px] leading-tight text-white max-xl:text-[45px] max-md:text-[36px]'>
          Are you a towing company?
        </div>

        <div className='text-2xl text-white max-xl:text-[20px] max-md:text-base'>
          Join the network <br /> now and get verified <br />
          towing jobs over the app.
        </div>
      </div>
      <Image
        src={GreenGradientImage}
        className='object-cover object-left'
        fill
        alt='Towing pool'
      />
      <CornerButtonContainer>
        <RoundButton
          icon={ArrowRight}
          onClick={() => {}}
          className='relative bg-[#63B2B3] text-white'
          animation='group-hover:scale-125 group-hover:-rotate-45'
        />
      </CornerButtonContainer>
    </div>
  );
};

export const TowingPool = () => {
  return (
    <div className='flex h-full w-full gap-5 max-md:flex-col'>
      {RenderTowingPool()}
      {RenderGreenGradient()}
    </div>
  );
};
