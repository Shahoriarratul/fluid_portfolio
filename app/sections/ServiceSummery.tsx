'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ServiceSummery = () => {
  useGSAP(() => {
    gsap.to('#titel-service-1', {
      xPercent: 20,
      scrollTrigger: {
        trigger: '#titel-service-1',
        scrub: true,
      },
    });
    gsap.to('#titel-service-2', {
      xPercent: -30,
      scrollTrigger: {
        trigger: '#titel-service-2',
        scrub: true,
      },
    });
    gsap.to('#titel-service-3', {
      xPercent: 100,
      scrollTrigger: {
        trigger: '#titel-service-3',
        scrub: true,
      },
    });
    gsap.to('#titel-service-4', {
      xPercent: -100,
      scrollTrigger: {
        trigger: '#titel-service-4',
        scrub: true,
      },
    });
  });
  return (
    <section className='mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive'>
      <div id='titel-service-1'>
        <p>Next.js</p>
      </div>
      <div
        id='titel-service-2'
        className='flex items-center justify-center gap-3 translate-x-16'
      >
        <p className='font-normal'>React</p>
        <div className='w-10 h-1 md:w-32 bg-gold' />
        <p>TypeScript</p>
      </div>
      <div
        id='titel-service-3'
        className='flex items-center justify-center gap-3 translate-x-48'
      >
        <p>REST APIs</p>
        <div className='w-10 h-1 md:w-32 bg-gold' />
        <p className='italic'>Prisma</p>
        <div className='w-10 h-1 md:w-32 bg-gold' />
        <p>Performance</p>
      </div>
      <div
        id='titel-service-4'
        className='translate-x-48'
      >
        <p>Web Vitals</p>
      </div>
    </section>
  );
};

export default ServiceSummery;
