import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import slide1 from "../../../../assets/slide_1.png";
import slide2 from "../../../../assets/slide_2.png";
import slide3 from "../../../../assets/slide_3.png";

gsap.registerPlugin(ScrollTrigger);

const heroSlides = [
  {
    id: 1,
    background: "bg-gradient-to-b from-[#ef5134] to-[#ef5134]",
    titleColor: "text-white",
    image: slide1,
  },
  {
    id: 2,
    background: "bg-[#fbf7ee]",
    titleColor: "text-[#be575a]",
    image: slide2,
  },
  {
    id: 3,
    background: "bg-white",
    titleColor: "text-[#be575a]",
    image: slide3,
  },
];

export const HeroSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".hero-slide") as HTMLElement[];

      slides.forEach((slide) => {
        const text = slide.querySelector(".hero-text");
        const image = slide.querySelector(".hero-image");

        gsap.fromTo(
          text,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: slide, start: "top 85%" },
          }
        );

        gsap.fromTo(
          image,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: slide, start: "top 85%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="w-full overflow-hidden relative"
    >
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="basis-full">
              <div
                className={`hero-slide flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16 px-6 sm:px-10 md:px-16 lg:px-24 py-10 sm:py-14 md:py-16 lg:py-20 rounded-2xl ${slide.background}`}
              >
                {/* Text Area */}
                <div className="hero-text flex flex-col items-start gap-4 text-left w-full lg:w-1/2">
                  <h1
                    className={`font-merriweather font-black ${slide.titleColor} text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight`}
                  >
                    Where Creativity
                    <br />
                    Meets Excellence
                  </h1>

                  <div className="flex flex-col items-start gap-2">
                    <p className="font-poppins font-medium text-[#4d4d4d] text-base sm:text-lg">
                      Best Coaching for
                    </p>

                    <p className="font-poppins font-bold text-[#fbbc04] text-base sm:text-lg whitespace-nowrap">
                      NIFT, NID, NATA, CEED, UCEED &amp; B.Arch
                    </p>

                    <p className="font-poppins font-medium text-[#4d4d4d] text-base sm:text-lg">
                      Entrance Exams in Hyderabad
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
                  <img
                    className="hero-image w-[90%] sm:w-[80%] md:w-[70%] lg:w-[600px] h-auto object-contain"
                    alt="Students"
                    src={slide.image}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};
