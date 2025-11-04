import React, { useState, useEffect, useRef } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { HeroSection } from "../HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryCategories = [
  { id: "student-sketches", label: "Student Sketches" },
  { id: "student-situation-test", label: "Student Situation Test Works" },
  { id: "life-at-borigam", label: "Life at Borigam" },
];

export const SuccessStoriesSection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("life-at-borigam");
  const sectionRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    const heading = sectionRef.current?.querySelector(".success-heading");
    const toggles = gsap.utils.toArray(".toggle-btn") as HTMLElement[];
    const hero = sectionRef.current?.querySelector(".hero-wrapper");

    // Fade-up for heading
    gsap.from(heading, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });

    // Stagger for toggle buttons
    gsap.from(toggles, {
      opacity: 0,
      y: 25,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // ✅ Hero fade-in (fixed)
    if (hero) {
      gsap.fromTo(
        hero,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: hero,
            start: "top 90%",
            toggleActions: "play none none reset",
          },
          onStart: () => (hero.style.opacity = "1"),
        }
      );
    }
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center w-full bg-white px-4 sm:px-8 md:px-12 py-16 sm:py-20 md:py-[100px] gap-6 sm:gap-8 overflow-hidden"
    >
      {/* Heading */}
      <h2 className="success-heading font-merriweather font-bold text-[#ef5134] text-3xl sm:text-4xl md:text-[46.3px] text-center leading-tight">
        Gallery
      </h2>

      {/* Toggle Buttons */}
      <ToggleGroup
        type="single"
        value={selectedCategory}
        onValueChange={(value) => {
          if (value) setSelectedCategory(value);
        }}
        className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-[23px]"
      >
        {galleryCategories.map((category) => (
          <ToggleGroupItem
            key={category.id}
            value={category.id}
            className="toggle-btn border border-[#646464] px-[15px] py-[10px] sm:px-[20px] sm:py-[15px] rounded-[100px]
              font-poppins text-sm sm:text-base text-[#646464] transition-all duration-300
              data-[state=on]:bg-black data-[state=on]:text-white data-[state=on]:border-black
              hover:bg-gray-100 h-auto whitespace-nowrap"
          >
            {category.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {/* Hero Section (content area) */}
      <div className="hero-wrapper max-w-7xl w-full mt-6 sm:mt-8">
        <HeroSection />
      </div>
    </section>
  );
};
