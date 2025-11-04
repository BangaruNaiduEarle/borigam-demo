import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import enterenceBg from "../../../../assets/enternce_exam_bg.png";
import compass from "../../../../assets/compass.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const examData = [
  { name: "NIFT", zIndex: "z-[7]" },
  { name: "NID", zIndex: "z-[6]" },
  { name: "UCEED", zIndex: "z-[5]" },
  { name: "CEED", zIndex: "z-[4]" },
  { name: "NATA", zIndex: "z-[3]" },
  { name: "B.Arch", zIndex: "z-[2]" },
  { name: "BFA", zIndex: "z-[1]" },
  { name: "FDDI", zIndex: "z-0" },
];

export const GallerySection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current?.querySelector(".gallery-heading");
      const para = sectionRef.current?.querySelector(".gallery-para");
      const cards = gsap.utils.toArray(".exam-card") as HTMLElement[];

      // Heading + paragraph fade-up
      gsap.from([heading, para], {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Individual card fade-up animations
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${enterenceBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center text-center w-full max-w-5xl gap-8 sm:gap-10 md:gap-14">
        {/* Heading & Paragraph */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <h2 className="gallery-heading font-merriweather font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[68px] leading-tight">
            Entrance Exams
            <br />
            We Cover
          </h2>

          <p className="gallery-para font-poppins font-normal text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-[580px] mx-auto">
            Comprehensive coaching for all major design and architecture entrance examinations
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10">
          {examData.map((exam) => (
            <Card
              key={exam.name}
              className={`exam-card ${exam.zIndex} group flex flex-col items-center justify-center
                w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[135px] md:h-[135px]
                bg-white border-0 rounded-none text-[#646464]
                transition-all duration-500 ease-in-out
                hover:border-b-4 hover:border-[#EF5134] hover:shadow-lg hover:text-[#EF5134]
                opacity-0 transform translate-y-6
              `}
            >
              <CardContent className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 p-0 w-full h-full">
                <img
                  src={compass}
                  alt="Compass"
                  className="w-[32px] sm:w-[38px] md:w-[42px] transition-transform duration-700 ease-in-out group-hover:rotate-45"
                />
                <span className="font-poppins font-medium text-sm sm:text-base md:text-[17px] leading-snug transition-transform duration-500 ease-in-out group-hover:translate-y-1">
                  {exam.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
