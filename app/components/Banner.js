"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Banner() {
  const slides = [
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/62d587acc50f7.jpg",
    },
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/63a1c6b7a91e5.jpg",
    },
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/63a1c719c05b7.jpg",
    },

    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632e859ccdcf6.jpg",
    },
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632e8782a9261.jpg",
    },
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632fce8fbdf60.jpg",
    },
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632f1d87a21cd.jpg",
    },
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632f2f5553e2d.jpg",
    },
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632f383e27bc3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[480px] w-full m-auto pt-2 pb-10 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              className={` text-orange-400 hover:text-orange-700 text-3xl`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
