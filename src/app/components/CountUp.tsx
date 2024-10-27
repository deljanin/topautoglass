'use client';
import React, { useState, useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { popupOpenAtom } from '../atoms';

type CountUpProps = {
  end: number;
  duration?: number;
};

function easeOutQuad(t: number): number {
  return t * (2 - t);
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const popupOpen = useAtomValue(popupOpenAtom); // Use popup state from Jotai

  useEffect(() => {
    if (popupOpen) return; // Only start animation when popup is closed
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const timeElapsed = time - startTime;

      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);

      const currentCount = Math.ceil(easedProgress * end);
      setCount(currentCount);

      if (timeElapsed < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsComplete(true); // Mark animation as complete
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function to cancel the animation if the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, [popupOpen, end, duration]);

  return (
    <span>
      {count}
      {isComplete && '+'}
    </span>
  );
};

export default CountUp;
