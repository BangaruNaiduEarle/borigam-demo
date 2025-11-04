import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import flight_vector from "../../../assets/flight_vector.png";

gsap.registerPlugin(ScrollTrigger);

export const AbroadBadge = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const badge = badgeRef.current;
    const container = containerRef.current;

    if (!badge || !container) return;

    // Fade in on load
    gsap.fromTo(
      badge,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }
    );

    // Sticky + fade-out scroll effect (triggered by hero section)
    ScrollTrigger.create({
      trigger: container,          // 👈 now tied to Hero container
      start: "top top",
      end: "bottom top",           // badge fades just before Hero ends
      pin: badge,
      pinSpacing: false,
      scrub: 1,
      onLeave: () => gsap.to(badge, { opacity: 0, y: -20, duration: 0.6 }),
      onEnterBack: () => gsap.to(badge, { opacity: 1, y: 0, duration: 0.6 }),
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        ref={badgeRef}
        className="flex items-center justify-center gap-2.5 px-4 sm:px-5 py-[12px] sm:py-[14px]
        absolute top-0 left-1/2 -translate-x-1/2
        rounded-b-[15px]
        bg-[linear-gradient(236deg,rgba(239,81,52,1)_0%,rgba(238,153,33,1)_100%)]
        shadow-md z-40
        w-[80%] max-w-[340px] sm:max-w-[360px] md:max-w-[380px] "
      >
        <div className="font-poppins font-semibold text-white text-xs sm:text-sm md:text-base whitespace-nowrap">
          Abroad Education
        </div>
        <img
          src={flight_vector}
          alt="Flight Vector"
          className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] translate-y-[1px]"
        />
      </div>
    </div>
  );
};
