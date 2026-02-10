'use client';
import { useGSAP } from '@gsap/react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import Marquee from '../components/Marquee';
import { socials } from '../constants';
import { use } from 'react';
import gsap from 'gsap';

type Props = {};

function Contact({}: Props) {
  const items = [
    'Just imagine and i code',
    'Just imagine and i code',
    'Just imagine and i code',
  ];
  const text =
    "Got any questions or want to work together? Feel free to reach out to me through any of the platforms below. I'm always open to discussing.";
  useGSAP(() => {
    gsap.from('.social-link', {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: 'back.out',
      scrollTrigger: {
        trigger: '.social-link',
      },
    });
  }, []);
  return (
    <section
      id='contact'
      className='flex flex-col justify-between min-h-screen bg-black'
    >
      <div>
        <AnimatedHeaderSection
          subtitle={"let's build something great together"}
          title={'Contact'}
          text={text}
          textColor={'text-white'}
          withScrollTrigger={true}
        />
        <div className='flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10'>
          <div className='flex flex-col w-full gap-10'>
            <div className='social-link'>
              <h2>E-mail</h2>
              <div className='w-full h-px my-2 bg-white/30' />
              <p className='text-xl tracking-wider lowercase md:text-2xl lg:text-3xl'>
                shahoriar.ratul@gmail.com
              </p>
            </div>
            <div className='social-link'>
              <h2>Phone</h2>
              <div className='w-full h-px my-2 bg-white/30' />
              <p className='text-xl lowercase md:text-2xl lg:text-3xl'>
                +491635224638
              </p>
            </div>
            <div className='social-link'>
              <h2>Social Media</h2>
              <div
                className='w-full h-px my-2 bg-white/
                    30'
              />
              <div className='flex flex-wrap gap-2'>
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className='text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200'
                  >
                    {'{'}
                    {social.name}
                    {'}'}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee
        items={items}
        className='text-white bg-transparent'
      />
    </section>
  );
}

export default Contact;
