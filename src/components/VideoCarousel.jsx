import React, { useState } from "react";
import { hightlightsSlides } from "../constants";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "right" && currentIndex < hightlightsSlides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="relative flex items-center w-full overflow-hidden">
        {/* Left arrow */}
        <button
          className="absolute left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#e5e5e5]/60 hover:bg-white transition-all shadow-lg backdrop-blur"
          onClick={() => handleArrow("left")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carousel container */}
        <div
          id="slider-container"
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{ transform: `translateX(-${100 * currentIndex}%)`, width: `${hightlightsSlides.length * 100}%` }}
        >
          {hightlightsSlides.map((item, i) => (
            <div key={item.id} className="w-full flex-shrink-0 pr-10 sm:pr-20">
              <div className="flex flex-col items-start">
                {/* Image in square aspect ratio */}
                <div className="aspect-square w-full max-w-[600px] mx-auto overflow-hidden rounded-3xl bg-black">
                  <img
                    src={item.video} // ou item.image si renommé
                    alt={`Slide ${i + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Texts */}
                <div className="mt-6 px-4 sm:px-0">
                  {item.textLists.map((text) => (
                    <p key={text} className="text-xl font-medium md:text-2xl">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          className="absolute right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#e5e5e5]/60 hover:bg-white transition-all shadow-lg backdrop-blur"
          onClick={() => handleArrow("right")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress indicators */}
      <div className="flex-center relative mt-10">
        <div className="flex-center rounded-full bg-gray-300 px-7 py-5 backdrop-blur">
          {hightlightsSlides.map((_, i) => (
            <span
              key={i}
              className={`relative mx-2 size-3 rounded-full ${
                currentIndex === i ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
