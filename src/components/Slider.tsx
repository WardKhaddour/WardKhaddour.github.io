"use client";

import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props<T> = {
  slides: T[];
  children: React.ReactNode;
};

export default function Slider<T>({ slides, children }: Props<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto ">
      <div className="relative">
        <div ref={sliderRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 -translate-x-4 cursor-pointer bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hidden sm:block"
          aria-label="Previous "
        >
          <FaChevronLeft className="text-gray-800 dark:text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 translate-x-4 cursor-pointer bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors hidden sm:block"
          aria-label="Next "
        >
          <FaChevronRight className="text-gray-800 dark:text-white" />
        </button>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index
                ? "bg-red-600"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
