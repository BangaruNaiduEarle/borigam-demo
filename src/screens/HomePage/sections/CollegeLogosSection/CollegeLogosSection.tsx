"use client";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
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

const testimonials = [
  {
    text: "As a Founding partner of Walters and Sklyar LLP, I can personally attest to XACT's effectiveness in streamlining operations and saving time and money. XACT has been helping us since 2007 and they have been a trusted partner ever since.",
    author: "James F Walters, CPA",
    image: ava,
  },
  {
    text: "As a Founding partner of Walters and Sklyar LLP, I can personally attest to XACT's effectiveness in streamlining operations and saving time and money. XACT has been helping us since 2007 and they have been a trusted partner ever since.",
    author: "James F Walters, CPA",
    image: ava,
  },
  {
    text: "As a Founding partner of Walters and Sklyar LLP, I can personally attest to XACT's effectiveness in streamlining operations and saving time and money. XACT has been helping us since 2007 and they have been a trusted partner ever since.",
    author: "James F Walters, CPA",
    image: ava,
  },
  
];

export const CollegeLogosSection = (): JSX.Element => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center  w-full  bg-[#f5f5f5] px-4">


      {/* Left: Carousel Section */}
      <div className="max-w-4xl relative">

        <div className="relative w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 pl-4 flex" // 2 cards per slide + flex for equal height
                >
                  <Card className="bg-white rounded-[15px] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[400px] w-full">
                    <CardContent className="flex flex-col items-center justify-between gap-5 px-8 py-10 text-center h-full">
                      <div className="flex-1 flex items-center justify-center">
                        <p className="[font-family:'Poppins',Helvetica] font-light text-[#4d4d4d] text-base  tracking-[0] leading-[normal]">
                          {testimonial.text}
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-end gap-3">
                        <h3 className="[font-family:'Poppins',Helvetica]  text-[#4d4d4d] text-base  tracking-[0] leading-[normal] font-semibold">
                          {testimonial.author}
                        </h3>

                        <img
                          className="w-[65px] h-[65px] rounded-full object-cover"
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
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100" />
          </Carousel>
        </div>
      </div>

      {/* Right: Lamp Image */}
      <div className="flex justify-center items-center">
        <img
          src={lamp}
          alt="lamp illustration"
          className="w-[420px] h-auto object-contain"
        />
      </div>
    </section>
  );
};
