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
  slides?: SlideItem[];
  imageWidth?: number;
  imageHeight?: number;
}

export function HeroSlider({
  slides,
  imageWidth = 1600,
  imageHeight = 600,
}: Readonly<HeroSliderProps>) {
  const defaultSlides = [
    {
      title: "Feather-light teaching....... Creativity at its best.....",
      imageSrc:
        "/images/hero-slider/Feather-light teaching....... Creativity at its best.....jpeg",
      imageAlt: "Feather-light teaching",
    },
    {
      title: "Students with 3D Models @ Art and Craft",
      imageSrc:
        "/images/hero-slider/Students with 3D Models @ Art and Craft.jpg",
      imageAlt: "Students with 3D Models",
    },
    {
      title: "Students in Tabla Sessions",
      imageSrc: "/images/hero-slider/Students in Tabla Sessions.jpg",
      imageAlt: "Students in Tabla Sessions",
    },
    {
      title: "Painting..... a course leading to the ability of self-expression",
      imageSrc:
        "/images/hero-slider/Painting..... a course leading to the ability of self-expression.JPG",
      imageAlt: "Painting for self-expression",
    },
    {
      title:
        "Holistic Development of Students...... Students with their Creative Models",
      imageSrc:
        "/images/hero-slider/Holistic Development of Students...... Students with their Creative Models.JPG",
      imageAlt: "Students with Creative Models",
    },
  ];

  const slidesToShow = slides || defaultSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [autoplayInterval, setAutoplayInterval] =
    useState<NodeJS.Timeout | null>(null);

  // Navigate to previous slide with fade transition
  const prevSlide = () => {
    if (isChanging) return; // Prevent rapid clicks during transition

    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? slidesToShow.length - 1 : prev - 1
      );
      setTimeout(() => setIsChanging(false), 50);
    }, 300);
  };

  // Navigate to next slide with fade transition
  const nextSlide = () => {
    if (isChanging) return; // Prevent rapid clicks during transition

    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === slidesToShow.length - 1 ? 0 : prev + 1
      );
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
  }, [slidesToShow.length]);

  return (
    <div className="relative w-full overflow-hidden h-[60vh] md:h-[90vh] min-h-[350px] max-h-[90vh]">
      {/* Slider Content */}
      <div className="relative h-full w-full">
        {slidesToShow.map((slide, index) => (
          <div
            key={`slide-${slide.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${isChanging ? "pointer-events-none" : ""}`}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 z-10 flex items-end justify-center">
                <div
                  className={`px-6 py-6 mb-8 bg-foh-brown/80 rounded-lg max-w-5xl transition-all duration-700 ${
                    currentIndex === index && !isChanging
                      ? "opacity-100 transform-none"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <h1 className="text-2xl md:text-3xl font-bold text-foh-peach text-center tracking-wide leading-tight">
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
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-foh-navy/70 hover:bg-foh-navy/90 rounded-full border border-foh-peach/30 text-foh-beige shadow-lg transition-all pointer-events-auto focus:outline-none focus:ring-2 focus:ring-foh-peach/50 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={isChanging}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-foh-navy/70 hover:bg-foh-navy/90 rounded-full border border-foh-peach/30 text-foh-beige shadow-lg transition-all pointer-events-auto focus:outline-none focus:ring-2 focus:ring-foh-peach/50 disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute z-20 bottom-4 left-0 right-0">
        <div className="flex justify-center gap-2">
          {slidesToShow.map((_, index) => (
            <button
              key={`indicator-${index}`}
              disabled={isChanging}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-foh-peach scale-110 ring-2 ring-foh-beige/30"
                  : "bg-foh-beige/50 hover:bg-foh-beige/70"
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
