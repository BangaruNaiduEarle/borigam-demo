import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo1 from "../../../../assets/logo1.png";
import logo2 from "../../../../assets/logo2.png";
import logo3 from "../../../../assets/logo3.png";
import logo4 from "../../../../assets/logo4.png";
import logo5 from "../../../../assets/logo5.png";
import logo6 from "../../../../assets/logo6.png";
import logo7 from "../../../../assets/logo7.png";
import logo8 from "../../../../assets/logo8.png";
import logo9 from "../../../../assets/logo9.png";
import logo10 from "../../../../assets/logo10.png";
import logo11 from "../../../../assets/logo11.png";
import logo12 from "../../../../assets/logo12.png";



const collegeLogos = [
  { src: logo1, },
  { src: logo2, },
  { src: logo3, },
  { src: logo4, },
  { src: logo5, },
  { src: logo6, },
  { src: logo7, },
  { src: logo8, },
  { src: logo9, },
  { src: logo10, },
  { src: logo11, },
  { src: logo12, },
];

gsap.registerPlugin(ScrollTrigger);

export const CollegeLogosAnimatedSection = ({ }: any): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector(".college-heading");
      const para = sectionRef.current?.querySelector(".college-para");
      const logos = gsap.utils.toArray(".college-logo");

      // Heading + Paragraph reveal
      gsap.from([heading, para], {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Logos fade-in + scale animation
      gsap.from(logos, {
        opacity: 0,
        scale: 0.8,
        duration: 0.7,
        ease: "power2.out",
        stagger: {
          each: 0.05,
          from: "center",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white flex justify-center overflow-hidden">
      <div className="max-w-7xl py-[100px]">
        {/* Animated Heading */}
        <div className="college-heading [font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal] text-center mb-8">
          College logos
        </div>

        {/* Animated Paragraph */}
        <div className="flex justify-center">
          <div className="college-para w-[560px] [font-family:'Poppins',Helvetica] font-light text-[#4d4d4d] text-base tracking-[0] leading-[normal] text-center">
            Comprehensive coaching for all major design and architecture entrance
            examinations
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-6 gap-20 mt-20 place-items-center">
          {collegeLogos.map((logo: any, index: number) => (
            <img
              key={`college-logo-${index}`}
              className="college-logo w-[110px] h-[110px] opacity-0"
              alt="College Logo"
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
