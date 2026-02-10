'use client';
import { useRef, useState, useEffect } from 'react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import { servicesData } from '../constants';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

type Props = {};

function Services({}: Props) {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isDesktop, setIsDesktop] = useState(false); // consistent on SSR/first render
  const mqDesktop = useMediaQuery({ minWidth: '48rem' });
  const [isMounted, setIsMounted] = useState(false);
  const text =
    'I build secure high performance web applications that are scalable and maintainable, using the latest technologies and best practices in the industry.';

  useEffect(() => {
    setIsMounted(true);
    setIsDesktop(mqDesktop);
  }, [mqDesktop]);

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        duration: 1,
        ease: 'circ.out',
      });
    });
  }, []);

  if (!isMounted) return null;
  return (
    <section
      id='services'
      className='min-h-screen rounded bg-black rounded-t-4xl'
    >
      <AnimatedHeaderSection
        subtitle={'Behind the scence, Beyond the screen'}
        text={text}
        title={'service'}
        textColor={'text-white'}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => {
            serviceRefs.current[index] = el;
          }}
          key={index}
          className='sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30'
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className='flex item-center justify-between gap-4 font-light'>
            <div className='flex flex-col gap-6'>
              <h2 className='text-4xl lg:text-5xl'>{service.title}</h2>
              <p className='text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty'>
                {service.description}
              </p>
              <div className='flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80'>
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className='flex'>
                      <span className='mr-12 text-lg text-white/30'>
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className='w-full h-px my-2 bg-white/30' />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Services;
