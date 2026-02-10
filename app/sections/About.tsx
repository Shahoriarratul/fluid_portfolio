'use client';
import React from 'react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import AnimatedTextLine from '../components/AnimatedTextLine';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

type Props = {};

function About({}: Props) {
  const imgref = React.useRef<HTMLImageElement>(null);
  const text = `passonate about crafting high-quality web applications that deliver exceptional user experiences. With a strong focus on performance, security, and scalability`;
  const AboutText = `I am passionate about crafting high-quality web applications that deliver exceptional user experiences. With a strong focus on performance, security, and scalability, I strive to build solutions that not only meet but exceed user expectations.`;

  useGSAP(() => {
    gsap.to('#about', {
      scale: 0.95,
      scrollTrigger: {
        trigger: '#about',
        start: 'bottom 80%',
        end: 'bottom 20%',
        scrub: true,
      },
      ease: 'power1.inOut',
    });
    gsap.set(imgref.current, {
      clippath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
    });
    gsap.to(imgref.current, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      scrollTrigger: {
        trigger: imgref.current,
      },
    });
  }, []);
  return (
    <section
      id='about'
      className='min-h-screen bg-black rounded-b-2xl'
    >
      <AnimatedHeaderSection
        subtitle={'Code with purpose, Built with scale'}
        title={'About'}
        text={text}
        textColor={'text-white'}
        withScrollTrigger={true}
      />
      <div className='flex flex-col item-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60'>
        <img
          ref={imgref}
          src='images/man.jpg'
          alt='man'
          className='w-md rounded-3xl'
        />
        <AnimatedTextLine
          text={AboutText}
          className={'w-full'}
        />
      </div>
    </section>
  );
}

export default About;
