'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const ServiceSummery = (props: Props) => {
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
        <p>Architecture</p>
      </div>
      <div
        id='titel-service-2'
        className='flex items-center justify-center gap-3 translate-x-16'
      >
        <p className='font-normal'>Development</p>
        <div className='w-10 h-1 md:w-32 bg-gold' />
        <p>Deployment</p>
      </div>
      <div
        id='titel-service-3'
        className='flex items-center justify-center gap-3 translate-x-48'
      >
        <p>APIs</p>
        <div className='w-10 h-1 md:w-32 bg-gold' />
        <p className='italic'>Frontend</p>
        <div className='w-10 h-1 md:w-32 bg-gold' />
        <p>Scalability</p>
      </div>
      <div
        id='titel-service-4'
        className='translate-x-48'
      >
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummery;
