'use client';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { Observer } from 'gsap/all';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(Observer);
type Props = {
  items: string[];
  className?: string;
  icon?: string;
  iconClassName?: string;
  reverse?: boolean;
};

const Marquee = ({
  items,
  className = 'text-white bg-black',
  icon = 'mdi:star-four-points',
  iconClassName = '',
  reverse = false,
}: Props) => {
  const containerRef = useRef(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);

  interface HorizontalLoopConfig {
    repeat?: number;
    paused?: boolean;
    speed?: number;
    snap?: number | false;
    paddingRight?: string | number;
    reversed?: boolean;
    modifiers?: Record<string, (value: number) => number>;
    overwrite?: boolean | string;
  }

  interface HorizontalLoopVars {
    modifiers?: Record<string, (value: number) => number>;
    overwrite?: boolean | 'auto';
  }

  interface HorizontalLoopTimeline extends gsap.core.Timeline {
    next: (vars?: HorizontalLoopVars) => gsap.core.Tween;
    previous: (vars?: HorizontalLoopVars) => gsap.core.Tween;
    current: () => number;
    toIndex: (index: number, vars?: HorizontalLoopVars) => gsap.core.Tween;
    times: number[];
  }

  interface HorizontalLoopItem extends HTMLElement {
    offsetLeft: number;
    offsetWidth: number;
    scaleX?: number;
  }

  interface HorizontalLoopState {
    length: number;
    startX: number;
    times: number[];
    widths: number[];
    xPercents: number[];
    curIndex: number;
    pixelsPerSecond: number;
    totalWidth: number;
    curX: number;
    distanceToStart: number;
    distanceToLoop: number;
  }

  function horizontalLoop(
    items: HorizontalLoopItem[] | NodeListOf<Element>,
    config?: HorizontalLoopConfig,
  ): HorizontalLoopTimeline {
    items = gsap.utils.toArray(items) as HorizontalLoopItem[];
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: 'none' },
        onReverseComplete: () => {
          tl.totalTime(tl.rawTime() + tl.duration() * 100);
        },
      }) as HorizontalLoopTimeline,
      length = items.length,
      startX = items[0].offsetLeft,
      times: number[] = [],
      widths: number[] = [],
      xPercents: number[] = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = (v: number): number =>
        config.snap === false ? v : gsap.utils.snap(config.snap || 1)(v),
      totalWidth: number,
      curX: number,
      distanceToStart: number,
      distanceToLoop: number,
      item: HorizontalLoopItem,
      i: number;
    gsap.set(items, {
      xPercent: (i: number, el: any) => {
        let w = (widths[i] = parseFloat(
          gsap.getProperty(el, 'width', 'px') as string,
        ));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, 'x', 'px') as string) / w) * 100 +
            (gsap.getProperty(el, 'xPercent') as number),
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        (gsap.getProperty(items[length - 1], 'scaleX') as number) +
      (parseFloat(config.paddingRight as string) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart +
        widths[i] * (gsap.getProperty(item, 'scaleX') as number);
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0,
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond,
        )
        .add('label' + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(
      index: number,
      vars?: HorizontalLoopVars,
    ): gsap.core.Tween {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars?: HorizontalLoopVars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars?: HorizontalLoopVars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index: number, vars?: HorizontalLoopVars) =>
      toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      tl.vars.onReverseComplete?.();
      tl.reverse();
    }
    return tl;
  }

  useEffect(() => {
    const tl = horizontalLoop(
      itemRefs.current.filter((el) => el !== null),
      {
        repeat: -1,
        paddingRight: 30,
        reversed: reverse,
      },
    );

    Observer.create({
      onChangeY(self) {
        let factor = 2.5;
        if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
          factor *= -1;
        }
        gsap
          .timeline({
            defaults: {
              ease: 'none',
            },
          })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, '+=0.3');
      },
    });
    return () => {
      tl.kill();
    };
  }, [items, reverse]);
  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
    >
      <div className='flex'>
        {items.map((text, index) => (
          <span
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className='flex item-center px-16 gap-x-32'
          >
            {text}
            <Icon
              icon={icon}
              className={iconClassName}
            />
          </span>
        ))}
      </div>
      Marquee
    </div>
  );
};

export default Marquee;
