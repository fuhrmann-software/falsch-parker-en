import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ParkingTicket from '@/images/home-page/parkingTicket.png';
import WhiteLabelSolution from '@/images/home-page/white-label-solution.png';
import { CornerButtonContainer } from '@/components/buttons/cornerButtonContainer';
import { RoundButton } from '@/components/buttons/roundButton';
import { Cross } from '@/components/icons/cross';
import { ArrowRight } from '@/components/icons/arrowRight';

export const ParkingTicketSection = () => {
  const router = useRouter();

  const goToParkingTicket = () => {
    router.push('/parking-ticket');
  };

  return (
    <div className='flex h-full w-full gap-5 max-sm:flex-col'>
      <div className='relative h-[730px] w-1/2 overflow-hidden rounded-bl-card rounded-tl-card  rounded-tr-card max-lg:h-[440px] max-sm:w-full'>
        <div className='absolute z-[2] p-[80px] text-7xl text-dark max-lg:p-10 max-lg:text-4xl'>
          <span>White label solution.</span>
        </div>
        <Image
          src={WhiteLabelSolution}
          fill
          alt='White label solution'
          className='object-cover'
        />
        <CornerButtonContainer>
          <RoundButton
            icon={Cross}
            theme='light'
            animation='group-hover:scale-125 group-hover:-rotate-90'
          />
        </CornerButtonContainer>
      </div>
      <div className='relative h-[730px] w-1/2 overflow-hidden rounded-bl-card rounded-tl-card rounded-tr-card max-lg:h-[440px] max-sm:w-full'>
        <div className='absolute z-[2] p-20 text-7xl text-dark max-lg:p-10 max-lg:text-4xl'>
          <span>Parking ticket.</span>
        </div>
        <Image
          src={ParkingTicket}
          fill
          alt='Parking tocket'
          className='object-cover'
        />
        <CornerButtonContainer>
          <RoundButton
            onClick={goToParkingTicket}
            icon={ArrowRight}
            theme='light'
            animation='group-hover:scale-125 group-hover:-rotate-45'
          />
        </CornerButtonContainer>
      </div>
    </div>
  );
};
