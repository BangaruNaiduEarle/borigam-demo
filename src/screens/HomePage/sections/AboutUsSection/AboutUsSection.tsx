import React, { useEffect, useRef } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Expert Faculty",
  "Hands-on Workshops",
  "Interactive Learning Sessions",
  "Real-Time Feedback",
  "Access to Exclusive Resources",
  "Post-Course Support",
  "Flexible Scheduling",
  "Networking Opportunities",
  "Customized Study Plans",
];

export const AboutUsSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector(".about-heading");
      const para = sectionRef.current?.querySelector(".about-para");
      const button = sectionRef.current?.querySelector(".about-btn");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      tl.from([heading, para], {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      }).from(button, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="entrance-exam"
      className="relative flex flex-col lg:flex-row w-full items-center justify-between gap-10 sm:gap-14 md:gap-16 lg:gap-[34px] px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24 bg-[#f5f5f5] max-w-7xl mx-auto overflow-hidden"
    >
      {/* Left: Text Block */}
      <div className="flex flex-col items-start justify-center gap-6 sm:gap-8 w-full lg:w-1/2 text-left">
        <div className="flex flex-col gap-3">
          <h2 className="about-heading font-merriweather font-bold text-[#ef5134] text-3xl sm:text-4xl md:text-[46px] leading-tight">
            Why Choose Borigam Institute?
          </h2>

          <p className="about-para font-poppins font-light text-[#4d4d4d] text-base sm:text-lg md:text-2xl leading-relaxed">
            We provide everything you need to excel
            <br />
            in your entrance exams
          </p>
        </div>

        <Button className="about-btn bg-[#ed9821] hover:bg-[#d88a1e] rounded-[20px] px-6 sm:px-8 py-3 sm:py-4 h-auto transition-transform duration-300 hover:scale-105">
          <span className="font-poppins text-white text-base sm:text-lg md:text-xl font-normal">
            Learn more
          </span>
        </Button>
      </div>

      {/* Right: Feature Badges */}
      <div className="flex flex-wrap justify-center lg:justify-start w-full lg:w-1/2 gap-3 sm:gap-4 md:gap-[9px]">
        {features.map((feature, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-white rounded-[15px] py-3 px-4 sm:py-4 sm:px-5 text-center shadow-sm hover:scale-105 hover:shadow-md transition-transform duration-300"
          >
            <span className="font-poppins font-medium text-[#646464] text-xs sm:text-sm tracking-[0.3px] whitespace-nowrap">
              {feature}
            </span>
          </Badge>
        ))}
      </div>
    </section>
  );
};
