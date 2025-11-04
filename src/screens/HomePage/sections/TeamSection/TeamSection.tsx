import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgImage from "../../../../assets/about_bg.jpg";

gsap.registerPlugin(ScrollTrigger);

export const TeamSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    // Parallax background scroll effect
    gsap.to(section, {
      backgroundPositionY: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Fade-in + upward reveal
    gsap.fromTo(
      content,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative flex flex-col w-full items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "scroll",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-28 md:py-36 max-w-3xl text-center"
      >
        <h2 className="font-merriweather font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-tight mb-6">
          About Us
        </h2>

        <p className="font-poppins font-normal text-white text-sm sm:text-base md:text-lg leading-relaxed tracking-[0.3px] max-w-2xl">
          Borigam Coaching Institution, established in 2019, is dedicated to
          nurturing creative minds through exceptional coaching for design and
          architecture entrance exams like NIFT, NID, NATA, B.ARCH, UCEED, and
          CEED. With personalized learning, detailed study material, and regular
          mock tests available both offline and online, we ensure students are
          fully prepared. Our proven success record reflects our commitment to
          helping students achieve their dreams of securing admission to
          prestigious colleges.
        </p>
      </div>
    </section>
  );
};
