import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import slide1 from "../../../../assets/slide_1.png";
import slide2 from "../../../../assets/slide_2.png";
import slide3 from "../../../../assets/slide_3.png";



const heroSlides = [
  {
    id: 1,
    background:
      "bg-[linear-gradient(0deg,rgba(239,81,52,1)_0%,rgba(239,81,52,1)_100%)]",
    titleColor: "text-white",
    image:slide1,
    imageClasses: "w-[600px] h-[502px]",
  },
  {
    id: 2,
    background:
      "bg-[linear-gradient(0deg,rgba(251,247,238,1)_0%,rgba(251,247,238,1)_100%)]",
    titleColor: "text-[#be575a]",
    image: slide2,
    imageClasses: "w-[425.5px] h-[502px]",
  },
  {
    id: 3,
    background:
      "bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]",
    titleColor: "text-[#be575a]",
    image:slide3,
    imageClasses: "w-[425.5px] h-[502px] object-cover",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section id="home" className="w-full overflow-hidden">
      <Carousel className="w-full"
      opts={{
          align: "start",
          loop: true, // Enables looping
        }}
        plugins={[
          Autoplay({
            delay: 3000, // time in ms between slides (3s)
            stopOnInteraction: false, // keeps autoplay even if user interacts
          }),
        ]}
      >
        <CarouselContent className="-ml-[87px]">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-[87px] basis-full">
              <div
                className={`flex items-center justify-center px-[197px] py-[57px] rounded-[20px] h-[590px] ${slide.background}`}
              >
                <div className="flex flex-col w-[473px] items-start gap-[13px]">
                  <h1
                    className={`self-stretch mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-black ${slide.titleColor} text-[54.5px] tracking-[0] leading-[normal]`}
                  >
                    Where Creativity
                    <br />
                    Meets Excellence
                  </h1>

                  <div className="inline-flex flex-col items-start gap-[17px] flex-[0_0_auto]">
                    <p className="self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#4d4d4d] text-lg tracking-[0] leading-[normal]">
                      Best Coaching for
                    </p>

                    <p className="w-fit [font-family:'Poppins',Helvetica] font-bold text-[#fbbc04] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                      NIFT, NID, NATA, CEED, UCEED &amp; B.Arch
                    </p>

                    <p className="self-stretch [font-family:'Poppins',Helvetica] font-medium text-[#4d4d4d] text-lg tracking-[0] leading-[normal]">
                      Entrance Exams in Hyderabad
                    </p>
                  </div>
                </div>

                <img
                  className={`${slide.imageClasses}`}
                  alt="Students"
                  src={slide.image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
