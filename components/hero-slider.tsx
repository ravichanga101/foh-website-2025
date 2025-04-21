"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideItem {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

interface HeroSliderProps {
  slides: SlideItem[];
  imageWidth?: number;
  imageHeight?: number;
}

export function HeroSlider({
  slides,
  imageWidth = 1600,
  imageHeight = 600,
}: Readonly<HeroSliderProps>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [autoplayInterval, setAutoplayInterval] =
    useState<NodeJS.Timeout | null>(null);

  // Navigate to previous slide with fade transition
  const prevSlide = () => {
    if (isChanging) return; // Prevent rapid clicks during transition

    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsChanging(false), 50);
    }, 300);
  };

  // Navigate to next slide with fade transition
  const nextSlide = () => {
    if (isChanging) return; // Prevent rapid clicks during transition

    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsChanging(false), 50);
    }, 300);
  };

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    if (isChanging || index === currentIndex) return;

    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsChanging(false), 50);
    }, 300);
  };

  // Setup autoplay
  useEffect(() => {
    // Clear any existing interval first
    if (autoplayInterval) clearInterval(autoplayInterval);

    // Create new interval
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    setAutoplayInterval(interval);

    // Cleanup function
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      {/* Slider Content */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={`slide-${slide.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${isChanging ? "pointer-events-none" : ""}`}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 z-10 flex items-end justify-center bg-dark-800/50">
                <div
                  className={`px-6 py-6 mb-8 bg-deepblue-700/70 backdrop-blur-sm rounded-lg max-w-5xl transition-all duration-700 ${
                    currentIndex === index && !isChanging
                      ? "opacity-100 transform-none"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <h1 className="text-2xl md:text-3xl font-bold text-white text-center tracking-wide leading-tight">
                    {slide.title}
                  </h1>
                </div>
              </div>
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Custom Navigation Controls */}
      <div className="container mx-auto absolute z-20 inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="flex justify-between items-center h-full px-2 md:px-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={isChanging}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full border border-white/30 text-white shadow-lg transition-all pointer-events-auto focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={isChanging}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full border border-white/30 text-white shadow-lg transition-all pointer-events-auto focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute z-20 bottom-4 left-0 right-0">
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={`indicator-${index}`}
              disabled={isChanging}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              } ${isChanging ? "cursor-not-allowed" : "cursor-pointer"}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
