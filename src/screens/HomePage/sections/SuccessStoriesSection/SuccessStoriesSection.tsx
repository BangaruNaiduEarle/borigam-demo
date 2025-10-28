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
    <section className="flex flex-col w-full items-center gap-5 bg-white py-[100px]">
      <h2 className=" self-stretch [font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] text-center tracking-[0] leading-[normal]">
        Gallery
      </h2>

      <ToggleGroup
        type="single"
        value={selectedCategory}
        onValueChange={(value) => {
          if (value) setSelectedCategory(value);
        }}
        className="inline-flex items-center gap-[23px] relative flex-[0_0_auto]"
      >
        {galleryCategories.map((category) => (
          <ToggleGroupItem
            key={category.id}
            value={category.id}
            className="border border-solid border-[#646464] inline-flex items-center justify-center gap-2.5 p-[15px] flex-[0_0_auto] rounded-[100px] [font-family:'Poppins',Helvetica] font-normal text-[#646464] text-base tracking-[0] leading-[normal] whitespace-nowrap data-[state=on]:bg-black data-[state=on]:text-white data-[state=on]:border-black hover:bg-gray-100 h-auto"
          >
            {category.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      
      <div className="max-w-7xl mt-4">
          <HeroSection />
      </div>
    </section>
  );
};
