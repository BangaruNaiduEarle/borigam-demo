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
  { id: "naata-jee", label: "NAATA & JEE Barch" },
  { id: "nifft-nid", label: "NIFFT,NID & UCEED" },
  { id: "nift-nid", label: "NIFT & NID" },
];

const toppers = [
  {
    name: "Anisha Sharma",
    exam: "NID",
    image: t1,
  },
  {
    name: "Ravi Kumar",
    exam: "NATA",
    image: t2,
  },
  {
    name: "Pooja Mehta",
    exam: "CEED",
    image: t3,
  },
  {
    name: "Rahul Singh",
    exam: "UCEED",
    image: t4,
  },
  {
    name: "Sneha Desai",
    exam: "B.Arch",
    image: t5,
  },
  {
    name: "Vikram Patel",
    exam: "NIFT",
    image: t6,
  },
  {
    name: "Deepika Verma",
    exam: "NID",
    image: t7,
  },
  {
    name: "Shivam Yadav",
    exam: "NATA",
    image: t8,
  },
  {
    name: "Meera Agarwal",
    exam: "CEED",
    image: t9,
  },
  {
    name: "Karan Choudhury",
    exam: "UCEED",
    image: t10,
  },
  {
    name: "Isha Rao",
    exam: "B.Arch",
    image: t11,
  },
  {
    name: "Vani Sethi",
    exam: "NIFT",
    image: t12,
  },
];

export const EntranceExamsSection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("naata-jee");

  return (
    <section className="flex flex-col w-full items-center gap-[78px] md:px-12 py-40">
      <div className="flex flex-col items-center gap-5 w-full">
        <h2 className="[font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] text-center tracking-[0] leading-[normal]">
          Our Toppers
        </h2>

        <div className="inline-flex items-center gap-[23px] flex-wrap justify-center">
          {examCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`h-auto px-[15px] py-[15px] rounded-[100px] ${
                selectedCategory === category.id
                  ? "bg-black text-white hover:bg-black/90"
                  : "border-[#646464] text-[#646464] hover:bg-transparent hover:text-[#646464]"
              }`}
            >
              <span className="[font-family:'Poppins',Helvetica] font-normal text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {category.label}
              </span>
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-[28px_20px] w-full justify-center">
        {toppers.map((topper, index) => (
          <div
            key={index}
            className="inline-flex flex-col items-start justify-center gap-5"
          >
            <Avatar className="w-[156px] h-[156px]">
              <AvatarImage
                src={topper.image}
                alt={topper.name}
                className="object-cover"
              />
              <AvatarFallback className="text-2xl">
                {topper.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start gap-2 w-[156px]">
              <p className="w-full [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
                {topper.name}
              </p>

              <p className="w-full [font-family:'Poppins',Helvetica] font-medium text-[#ef5134] text-lg text-center tracking-[0] leading-[normal]">
                {topper.exam}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
