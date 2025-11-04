import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import slide1 from "../../../assets/slide_1.png";
import slide2 from "../../../assets/slide_2.png";
import slide3 from "../../../assets/slide_3.png";

gsap.registerPlugin(ScrollTrigger);

// HERO SLIDES — each controls its own background
const heroSlides = [
  {
    id: 1,
    bgClass: "bg-[#fbf7ee]", // beige
    titleColor: "text-[#be575a]",
    image: slide1,
  },
  {
    id: 2,
    bgClass: "bg-[#ef5134]", // orange
    titleColor: "text-white",
    image: slide1,
  },
  {
    id: 3,
    bgClass: "bg-white",
    titleColor: "text-[#be575a]",
    image: slide1,
  },
];

// STATS
const statsData = [
  { number: "560+", description: "Selected in\nDesign Colleges" },
  { number: "670", description: "Selected in\nArchitecture" },
  { number: "14", description: "UCEED IIT\nQualifiers" },
  { number: "103", description: "NIFT Selections" },
  { number: "24", description: "NID Admissions" },
  { number: "6+ yrs", description: "Expertise" },
];

export const HeroWithStatsSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
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

      // Animate stats
      const cards = gsap.utils.toArray(".stat-card") as HTMLElement[];
      cards.forEach((card, i) => {
        const numberEl = card.querySelector(".stat-number");
        const descEl = card.querySelector(".stat-desc");

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: "top 88%" },
        });

        tl.from(card, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          ease: "power3.out",
          delay: i * 0.05,
        })
          .from(
            numberEl,
            { opacity: 0, scale: 0.9, duration: 0.3, ease: "power2.out" },
            "-=0.2"
          )
          .from(
            descEl,
            { opacity: 0, y: 8, duration: 0.35, ease: "power2.out" },
            "-=0.2"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="w-full overflow-hidden">
      {/* HERO */}
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 3000, // autoplay ON
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="basis-full">
              <div className={`${slide.bgClass} py-10 sm:py-14 md:py-16`}>
                <div
                  className={`hero-slide mx-auto w-[92%] md:w-[90%] lg:w-[86%] rounded-2xl px-6 sm:px-10 md:px-14 lg:px-20 py-8 sm:py-12 md:py-14`}
                >
                  <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Text */}
                    <div className="hero-text w-full lg:w-1/2 flex flex-col items-start gap-4">
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
                        <p className="font-poppins font-bold text-[#fbbc04] text-base sm:text-lg">
                          NIFT, NID, NATA, CEED, UCEED &amp; B.Arch
                        </p>
                        <p className="font-poppins font-medium text-[#4d4d4d] text-base sm:text-lg">
                          Entrance Exams in Hyderabad
                        </p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                      <img
                        src={slide.image}
                        alt="Hero Visual"
                        className="hero-image w-[88%] sm:w-[75%] md:w-[70%] lg:w-[560px] h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* STATS SECTION */}
      <div className="w-full ">
        <div className="mx-auto w-[92%] md:w-[90%] lg:w-[86%] -mt-6 md:-mt-16 py-10">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 justify-items-center"
          >
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card bg-white rounded-full border-2 shadow-[0px_11px_12.5px_#00000040]
                           w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px]
                           flex items-center justify-center transition-transform duration-300 hover:scale-[1.04]"
              >
                <div className="text-center px-3">
                  <div className="stat-number font-poppins font-semibold text-[#ef5134] text-[22px] sm:text-[24px] md:text-[28px] leading-none">
                    {stat.number}
                  </div>
                  <div className="stat-desc font-poppins font-normal text-[#4d4d4d] text-xs sm:text-sm md:text-[15px] leading-snug whitespace-pre-line mt-2">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
