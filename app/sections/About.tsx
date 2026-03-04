'use client';
import React from 'react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import AnimatedTextLine from '../components/AnimatedTextLine';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
  const imgref = React.useRef<HTMLImageElement>(null);
  const text = `Master's student in High Integrity Systems with hands-on experience in Next.js, React.js, and modern frontend development for scalable and maintainable web products.`;
  const AboutText = `I specialize in building responsive, SEO-friendly applications using TypeScript, Tailwind CSS, and API-driven workflows. Alongside frontend engineering, I work with Node.js, Express.js, Prisma, MongoDB, and PostgreSQL to deliver complete web solutions. I value clean code, UI/UX best practices, and continuous learning in modern web technologies.`;

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
        subtitle={'Clean code, performance, and usability'}
        title={'About'}
        text={text}
        textColor={'text-white'}
        withScrollTrigger={true}
      />
      <div className='flex flex-col item-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60'>
        <img
          ref={imgref}
          src='images/ratul _profile.jpg'
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
