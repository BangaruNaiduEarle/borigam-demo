import React, { useState } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";
import { HeroSection } from "../HeroSection";

const galleryCategories = [
  { id: "student-sketches", label: "Student Sketches" },
  { id: "student-situation-test", label: "Student Situation Test Works" },
  { id: "life-at-borigam", label: "Life at Borigam" },
];

export const SuccessStoriesSection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("life-at-borigam");

  return (
    <section
      className="flex flex-col items-center w-full bg-white px-4 sm:px-8 md:px-12 
                 py-16 sm:py-20 md:py-[100px] gap-6 sm:gap-8"
    >
      {/* Heading */}
      <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-4xl md:text-[46.3px] text-center leading-tight">
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
            className="border border-[#646464] px-[15px] py-[10px] sm:px-[20px] sm:py-[15px] 
                       rounded-[100px] font-poppins text-sm sm:text-base text-[#646464] 
                       transition-all duration-300 data-[state=on]:bg-black data-[state=on]:text-white 
                       data-[state=on]:border-black hover:bg-gray-100 h-auto whitespace-nowrap"
          >
            {category.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {/* Hero Section (content area) */}
      <div className="max-w-7xl w-full mt-6 sm:mt-8">
        <HeroSection />
      </div>
    </section>
  );
};
