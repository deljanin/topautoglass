"use client";

import Image from "next/image";
import { useState } from "react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
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
      className="relative w-full rounded-md px-5 pb-20 xl:px-32 2xl:px-64"
      onMouseUp={handleInteractionEnd}
      onTouchEnd={handleInteractionEnd}
    >
      <div
        className="relative m-auto aspect-[2/1] w-full select-none overflow-hidden shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        <Image
          alt=""
          fill
          src="/images/beforeAfter/after1.jpg"
          className="rounded-md"
        />
        <div className="absolute right-0 top-0 rounded-bl-md rounded-tr-md bg-black px-4 py-2 font-cate">
          After
        </div>
        <div
          className="absolute left-0 right-0 top-0 m-auto aspect-[2/1] w-full select-none overflow-hidden rounded-md"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            alt="Huston car window tinting"
            src="/images/beforeAfter/before1.jpg"
          />{" "}
          <div className="absolute left-0 top-0 rounded-br-md rounded-tl-md bg-black px-3 py-2 font-cate">
            Before
          </div>
        </div>
        <div
          className="absolute bottom-0 top-0 w-2 cursor-ew-resize bg-[#252525]"
          style={{
            left: `calc(${sliderPosition}% - 4px)`,
          }}
        >
          <div className="absolute left-[calc(50%-1.25rem)] top-[calc(50%-1.25rem)] flex h-10 w-10 items-center justify-center rounded-full bg-[#252525]">
            <Image
              alt="Car window tinting in Houston"
              width={30}
              height={30}
              src="/images/beforeAfter/slider.svg"
              className="pointer-events-none rounded-md"
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
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
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
      className="relative w-full rounded-md px-5 pb-20 xl:px-32 2xl:px-64"
      onMouseUp={handleInteractionEnd}
      onTouchEnd={handleInteractionEnd}
    >
      <div
        className="relative aspect-[1/1] w-full select-none overflow-hidden shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)] md:max-h-[800px]"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        <Image
          alt="Windshield repair in Houston"
          fill
          priority
          objectFit="cover"
          src="/images/beforeAfter/after2.jpeg"
          className="rounded-md object-center"
        />
        <div className="absolute right-0 top-0 rounded-bl-md rounded-tr-md bg-black px-4 py-2 font-cate">
          After
        </div>

        <div
          className="absolute left-0 right-0 top-0 aspect-[1/1] w-full select-none overflow-hidden rounded-md md:max-h-[800px]"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            objectFit="cover"
            alt="Car window repair in Houston"
            src="/images/beforeAfter/before2.jpeg"
            className="object-center"
          />
          <div className="absolute left-0 top-0 rounded-br-md rounded-tl-md bg-black px-3 py-2 font-cate">
            Before
          </div>
        </div>
        <div
          className="absolute bottom-0 top-0 w-2 cursor-ew-resize bg-[#252525]"
          style={{
            left: `calc(${sliderPosition}% - 4px)`,
          }}
        >
          <div className="absolute left-[calc(50%-1.25rem)] top-[calc(50%-1.25rem)] flex h-10 w-10 items-center justify-center rounded-full bg-[#252525]">
            <Image
              alt=""
              width={30}
              height={30}
              src="/images/beforeAfter/slider.svg"
              className="pointer-events-none rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
