import React, { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

import t1 from "../../../../assets/t1.png";
import t2 from "../../../../assets/t2.png";
import t3 from "../../../../assets/t3.png";
import t4 from "../../../../assets/t4.png";
import t5 from "../../../../assets/t5.png";
import t6 from "../../../../assets/t6.png";
import t7 from "../../../../assets/t7.png";
import t8 from "../../../../assets/t8.png";
import t9 from "../../../../assets/t9.png";
import t10 from "../../../../assets/t10.png";
import t11 from "../../../../assets/t11.png";
import t12 from "../../../../assets/t12.png";

const examCategories = [
  { id: "naata-jee", label: "NAATA & JEE B.Arch" },
  { id: "nifft-nid", label: "NIFFT, NID & UCEED" },
  { id: "nift-nid", label: "NIFT & NID" },
];

const toppers = [
  { name: "Anisha Sharma", exam: "NID", image: t1 },
  { name: "Ravi Kumar", exam: "NATA", image: t2 },
  { name: "Pooja Mehta", exam: "CEED", image: t3 },
  { name: "Rahul Singh", exam: "UCEED", image: t4 },
  { name: "Sneha Desai", exam: "B.Arch", image: t5 },
  { name: "Vikram Patel", exam: "NIFT", image: t6 },
  { name: "Deepika Verma", exam: "NID", image: t7 },
  { name: "Shivam Yadav", exam: "NATA", image: t8 },
  { name: "Meera Agarwal", exam: "CEED", image: t9 },
  { name: "Karan Choudhury", exam: "UCEED", image: t10 },
  { name: "Isha Rao", exam: "B.Arch", image: t11 },
  { name: "Vani Sethi", exam: "NIFT", image: t12 },
];

export const EntranceExamsSection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("naata-jee");

  return (
    <section className="flex flex-col w-full items-center px-4 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24 bg-white">
      {/* Heading */}
      <div className="flex flex-col items-center gap-5 w-full text-center">
        <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-4xl md:text-[46px] tracking-tight">
          Our Toppers
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mt-4">
          {examCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`h-auto px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? "bg-black text-white hover:bg-black/90"
                  : "border border-[#646464] text-[#646464] hover:bg-transparent hover:text-[#646464]"
              }`}
            >
              <span className="font-poppins text-sm sm:text-base font-normal whitespace-nowrap">
                {category.label}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Toppers Grid */}
      <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl">
        {toppers.map((topper, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start gap-3 sm:gap-4 w-[120px] sm:w-[140px] md:w-[156px]"
          >
            <Avatar className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[156px] md:h-[156px] shadow-md">
              <AvatarImage
                src={topper.image}
                alt={topper.name}
                className="object-cover"
              />
              <AvatarFallback className="font-poppins text-xl sm:text-2xl">
                {topper.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="text-center">
              <p className="font-poppins text-black text-sm sm:text-base font-normal leading-tight">
                {topper.name}
              </p>
              <p className="font-poppins text-[#ef5134] text-sm sm:text-lg font-medium leading-tight mt-1">
                {topper.exam}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
