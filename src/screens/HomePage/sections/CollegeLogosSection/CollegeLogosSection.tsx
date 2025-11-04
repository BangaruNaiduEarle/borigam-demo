"use client";

import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { Card, CardContent } from "../../../../components/ui/card";
import lamp from "../../../../assets/lamp.png";
import ava from "../../../../assets/testmonial1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "As a Founding partner of Walters and Sklyar LLP, I can personally attest to XACT's effectiveness in streamlining operations and saving time and money. XACT has been helping us since 2007 and they have been a trusted partner ever since.",
    author: "James F Walters, CPA",
    image: ava,
  },
  {
    text: "XACT made it incredibly easy for our firm to handle client reporting and documentation. We’ve seen huge time savings and the automation has improved our efficiency across all departments.",
    author: "Sneha Rao, CFO",
    image: ava,
  },
  {
    text: "I’ve been amazed by how intuitive and reliable XACT’s services are. Their support team is responsive and knowledgeable — we truly consider them an extension of our internal operations.",
    author: "Anil Mehta, Senior Auditor",
    image: ava,
  },
];

export const CollegeLogosSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".testimonial-card") as HTMLElement[];
      const lamp = sectionRef.current?.querySelector(".lamp-img");

      // Card fade-up animation
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        );
      });

      // Lamp fade-up animation
      if (lamp) {
        gsap.fromTo(
          lamp,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: lamp,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col lg:flex-row items-center justify-center w-full bg-[#f5f5f5] px-4 sm:px-8 md:px-12 py-14 sm:py-20 md:py-24 gap-10 overflow-hidden"
    >
      {/* LEFT: Carousel Section */}
      <div className="relative w-full lg:w-[65%] max-w-5xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 pl-4 flex"
              >
                <Card
                  className="testimonial-card bg-white rounded-[15px] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-auto sm:h-[420px] w-full opacity-0 translate-y-6"
                >
                  <CardContent className="flex flex-col items-center justify-between gap-5 px-5 sm:px-8 py-10 text-center h-full">
                    <div className="flex-1 flex items-center justify-center">
                      <p className="font-poppins font-light text-[#4d4d4d] text-sm sm:text-base md:text-lg leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-end gap-3">
                      <h3 className="font-poppins text-[#4d4d4d] text-sm sm:text-base md:text-lg font-semibold">
                        {testimonial.author}
                      </h3>
                      <img
                        className="w-[60px] sm:w-[65px] h-[60px] sm:h-[65px] rounded-full object-cover"
                        alt={testimonial.author}
                        src={testimonial.image}
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious
            className="absolute md:left-[-50px] left-2 top-1/2 -translate-y-1/2 
             bg-white shadow-md hover:bg-gray-100 z-10 w-8 h-8 md:w-10 md:h-10 
             flex items-center justify-center rounded-full"
          />
          <CarouselNext
            className="absolute md:right-[-50px] right-2 top-1/2 -translate-y-1/2 
             bg-white shadow-md hover:bg-gray-100 z-10 w-8 h-8 md:w-10 md:h-10 
             flex items-center justify-center rounded-full"
          />
        </Carousel>
      </div>

      {/* RIGHT: Lamp Image */}
      <div className="flex justify-center items-center w-full lg:w-[35%]">
        <img
          src={lamp}
          alt="Lamp illustration"
          className="lamp-img w-[240px] sm:w-[300px] md:w-[350px] lg:w-[420px] h-auto object-contain opacity-0 translate-y-6"
        />
      </div>
    </section>
  );
};
