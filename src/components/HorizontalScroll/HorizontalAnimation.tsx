import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const list = [
<<<<<<< HEAD
  '/assets/images/YesBank.png',
  '/assets/images/Fino_Bank.png',
  '/assets/images/Axis_Bank.png',
  '/assets/images/Rbl_Bank.png',
=======
  '/assets/images/Bank.png',
  '/assets/images/Banking.png',
  '/assets/images/Finance.png',
  '/assets/images/CircleChart.png',
  '/assets/images/ColoredChart.png',
  '/assets/images/Financial-Analysis.png',
  '/assets/images/GraphChart.png',
  '/assets/images/Growth-Report.png',
  '/assets/images/MobileBanking.png',
  '/assets/images/NormalChart.png',
>>>>>>> master
];

const ScrollingLogos = () => {
  const scrollTextRef1 = useRef<HTMLDivElement>(null);
  const scrollTextRef2 = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (scrollTextRef1.current && scrollTextRef2.current) {
      animationRef.current = gsap.to(
        [scrollTextRef1.current, scrollTextRef2.current],
        {
          xPercent: -101.5,
          duration: 16,
          repeat: -1,
          ease: 'none', // Use the string 'none' for no easing
        },
      );

      const handleMouseEnter = () => {
        if (animationRef.current) {
          animationRef.current.pause();
        }
      };

      const handleMouseLeave = () => {
        if (animationRef.current) {
          animationRef.current.resume();
        }
      };

      scrollTextRef1.current.addEventListener('mouseenter', handleMouseEnter);
      scrollTextRef1.current.addEventListener('mouseleave', handleMouseLeave);
      scrollTextRef2.current.addEventListener('mouseenter', handleMouseEnter);
      scrollTextRef2.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (scrollTextRef1.current) {
          scrollTextRef1.current.removeEventListener(
            'mouseenter',
            handleMouseEnter,
          );
          scrollTextRef1.current.removeEventListener(
            'mouseleave',
            handleMouseLeave,
          );
        }
        if (scrollTextRef2.current) {
          scrollTextRef2.current.removeEventListener(
            'mouseenter',
            handleMouseEnter,
          );
          scrollTextRef2.current.removeEventListener(
            'mouseleave',
            handleMouseLeave,
          );
        }
        if (animationRef.current) {
          animationRef.current.kill();
        }
      };
    }
  }, []);

  return (
<<<<<<< HEAD
    <div className=' container'>
      <div className="grid gap-x-10 grid-flow-col  overflow-hidden sm:py-20 ">
        <div ref={scrollTextRef1} className="scroll-text grid gap-x-10 grid-flow-col items-center justify-between">
          {list.map((el, idx) => (
            <div key={idx} className="min-h-15 min-w-56 mr-18">
              <img alt={`Logo ${idx}`} src={el} className='w-[200px] h-[200px]'  />
            </div>
          ))}
        </div>
        <div ref={scrollTextRef2} className="scroll-text grid gap-x-10 grid-flow-col items-center justify-between">
          {list.map((el, idx) => (
            <div key={idx} className="min-h-15 min-w-56 mr-18">
              <img alt={`Logo ${idx}`} src={el} className='w-[200px] h-[200px]' />
            </div>
          ))}
        </div>
=======
    <div className="grid gap-x-10 grid-flow-col py-10 overflow-hidden sm:py-20">
      <div
        ref={scrollTextRef1}
        className="scroll-text grid gap-x-10 grid-flow-col items-center justify-between"
      >
        {list.map((el, idx) => (
          <div key={idx} className="min-h-15 min-w-56 mr-18">
            <img alt={`Logo ${idx}`} src={el} width="220" height="60" />
          </div>
        ))}
      </div>
      <div
        ref={scrollTextRef2}
        className="scroll-text grid gap-x-10 grid-flow-col items-center justify-between"
      >
        {list.map((el, idx) => (
          <div key={idx} className="min-h-15 min-w-56 mr-18">
            <img alt={`Logo ${idx}`} src={el} width="220" height="60" />
          </div>
        ))}
>>>>>>> master
      </div>
    </div>
  );
};

export default ScrollingLogos;
