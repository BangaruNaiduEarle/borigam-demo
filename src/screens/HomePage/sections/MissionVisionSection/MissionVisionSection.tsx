import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { number: "560+", description: "Selected in\nDesign Colleges" },
  { number: "670", description: "Selected in\nArchitecture" },
  { number: "14", description: "UCEED IIT\nQualifiers" },
  { number: "103", description: "NIFT Selections" },
  { number: "24", description: "NID Admissions" },
  { number: "6+ yrs", description: "Expertise" },
];

export const MissionVisionSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stat-card") as HTMLElement[];

      cards.forEach((card, i) => {
        const numberEl = card.querySelector(".stat-number");
        const descEl = card.querySelector(".stat-desc");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });

        tl.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.1,
        })
          .from(
            numberEl,
            {
              opacity: 0,
              scale: 0.9,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .from(
            descEl,
            {
              opacity: 0,
              y: 10,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.2"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-10 sm:py-14 px-4 sm:px-6 md:px-10 bg-transparent"
    >
      {statsData.map((stat, index) => (
        <Card
          key={index}
          className="stat-card flex flex-col items-center justify-center bg-white rounded-full border-2 shadow-[0px_11px_12.5px_#00000040] transition-transform duration-300 hover:scale-[1.05] w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px] lg:w-[190px] lg:h-[190px]"
        >
          <CardContent className="flex flex-col items-center justify-center gap-3 sm:gap-4 p-0">
            <div className="stat-number font-poppins font-semibold text-[#ef5134] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] text-center leading-tight">
              {stat.number}
            </div>
            <div className="stat-desc font-poppins font-normal text-[#4d4d4d] text-xs sm:text-sm md:text-base text-center leading-snug whitespace-pre-line">
              {stat.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
