'use client';
import React, { useRef } from 'react';
import { TrustedBySection } from '@/app/[lang]/home/components/sections/trustedBySection';
import { MainSection } from '@/app/[lang]/home/components/sections/mainSection';
import { OurProductsSection } from '@/app/[lang]/home/components/sections/ourProductsSection';
import { ParkingTicketSection } from '@/app/[lang]/home/components/sections/parkingTicketSection';
import { HowItWorksFirstSection } from '@/app/[lang]/home/components/sections/howItWorksFirstSection';
import { TowingSection } from '@/app/[lang]/home/components/sections/towingSection';
import { FuelFraudSection } from '@/app/[lang]/home/components/sections/fuelFraudSection';
import { TestimonialsSection } from '@/app/[lang]/home/components/sections/testimonialsSection';
import { OtherFeaturesSection } from '@/app/[lang]/home/components/sections/otherFeaturesSection';
import { FaqSection } from '@/components/faq/faqSection';

const Page = () => {
  const ourProductsSectionRef = useRef(null);

  const scrollToOurProductsSection = () => {
    ourProductsSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section>
      <MainSection />
      <TrustedBySection />
      <OurProductsSection />
      <ParkingTicketSection />
      <HowItWorksFirstSection />
      <TowingSection />
      <FuelFraudSection />
      <OtherFeaturesSection />
      <FaqSection />
      <TestimonialsSection />
    </section>
  );
};

export default Page;
