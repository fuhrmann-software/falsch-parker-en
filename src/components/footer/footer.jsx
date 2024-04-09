'use client';

import React from 'react';
import { SocialButton } from '@/components/buttons/socialButton';
import Link from 'next/link';
import { AppButton } from '@/components/buttons/appButton';
import { Apple } from '@/components/icons/apple';
import { Android } from '@/components/icons/android';
import { ScrollToTopButton } from '@/components/buttons/scrollToTopButton';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';

import styles from './styles.module.scss';
import { socials } from '@/components/footer/socials';
import { DesktopLinks } from '@/components/footer/components/desktop/desktopLinks';
import { MobileLinks } from '@/components/footer/components/mobile/mobileLinks';

const Footer = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className='flex gap-24 max-lg:contents'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>
              <span className='text-6xl max-lg:text-4xl'>
                Increased <br /> illegal parking?
              </span>
              <span className='text-xl font-light opacity-50 max-lg:text-base'>
                We’re here to help you to solve the problem
              </span>
            </div>
            <ArrowDotButton theme='light'>Contact us</ArrowDotButton>
            <div className='contents max-lg:hidden'>
              <div className='flex flex-col gap-1'>
                <span className='text-xl font-light opacity-50'>
                  Or just give us a call.
                </span>
                <Link
                  href='tel:+41 44 123 45 67'
                  className='w-fit text-2xl transition duration-300 hover:opacity-50'>
                  +41 44 123 45 67
                </Link>
              </div>
              <div className='flex gap-2'>
                {socials.map((social) => (
                  <SocialButton
                    key={social.link}
                    href={social.link}
                    icon={social.icon}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <DesktopLinks lang={lang} />
            <MobileLinks lang={lang} />
          </div>
        </div>
        <div className='grid grid-cols-2 items-center justify-between font-light max-lg:grid-cols-1 max-lg:flex-col max-lg:place-items-stretch max-lg:gap-2'>
          <div className='flex flex-col items-center gap-2 lg:hidden'>
            <AppButton icon={Apple} href='/'>
              App Store
            </AppButton>
            <AppButton icon={Android} href='/'>
              Google Play
            </AppButton>
          </div>
          <span className='text-sm opacity-50 max-lg:mt-4 max-lg:text-center max-lg:text-xs'>
            Copyright © 2024 | All rights reserved
          </span>
          <div className='justify-self-end max-lg:hidden'>
            <ScrollToTopButton onClick={scrollToTop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
