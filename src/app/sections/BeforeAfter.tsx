'use client';

import Image from 'next/image';
import { useState } from 'react';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect);
    }
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  return (
    <div
      className="2xl:px-64 xl:px-32 px-5 w-full relative rounded-md pb-20 "
      onMouseUp={handleInteractionEnd}
      onTouchEnd={handleInteractionEnd}>
      <div
        className="relative w-full aspect-[2/1] m-auto overflow-hidden select-none shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}>
        <div className="absolute top-0 right-0 rounded-bl-md rounded-tr-md px-4 py-2 bg-black font-cate">
          After
        </div>
        <Image
          alt=""
          fill
          src="/images/beforeAfter/after1.jpg"
          className="rounded-md"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full  aspect-[2/1] m-auto overflow-hidden select-none rounded-md"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Image fill alt="" src="/images/beforeAfter/before1.jpg" />{' '}
          <div className="absolute top-0 left-0 rounded-br-md rounded-tl-md px-3 py-2 bg-black font-cate">
            Before
          </div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-2 bg-[#252525] cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 4px)`,
          }}>
          <div className="bg-[#252525]  flex items-center justify-center absolute rounded-full h-10 w-10 left-[calc(50%-1.25rem)] top-[calc(50%-1.25rem)] ">
            <Image
              alt=""
              width={30}
              height={30}
              src="/images/beforeAfter/slider.svg"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter2() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect);
    }
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  return (
    <div
      className="2xl:px-64 xl:px-32 px-5 w-full relative rounded-md pb-20 "
      onMouseUp={handleInteractionEnd}
      onTouchEnd={handleInteractionEnd}>
      <div
        className="relative w-full aspect-[1/1] md:max-h-[800px] overflow-hidden select-none shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}>
        <Image
          alt=""
          fill
          priority
          objectFit="cover"
          src="/images/beforeAfter/after2.jpeg"
          className="rounded-md object-center"
        />
        <div className="absolute top-0 right-0 rounded-bl-md rounded-tr-md px-4 py-2 bg-black font-cate">
          After
        </div>

        <div
          className="absolute top-0 left-0 right-0 w-full md:max-h-[800px] aspect-[1/1] overflow-hidden select-none rounded-md"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Image
            fill
            priority
            objectFit="cover"
            alt=""
            src="/images/beforeAfter/before2.jpeg"
            className="object-center"
          />
          <div className="absolute top-0 left-0 rounded-br-md rounded-tl-md px-3 py-2 bg-black font-cate">
            Before
          </div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-2 bg-[#252525] cursor-ew-resize "
          style={{
            left: `calc(${sliderPosition}% - 4px)`,
          }}>
          <div className="bg-[#252525]  flex items-center justify-center absolute rounded-full h-10 w-10 left-[calc(50%-1.25rem)] top-[calc(50%-1.25rem)] ">
            <Image
              alt=""
              width={30}
              height={30}
              priority
              src="/images/beforeAfter/slider.svg"
              className="rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
