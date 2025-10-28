import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const statsData = [
  {
    number: "560+",
    description: "Selected in\nDesign Colleges",
  },
  {
    number: "670",
    description: "Selected in\nArchitecture",
  },
  {
    number: "14",
    description: "UCEED IIT\nQualifiers",
  },
  {
    number: "103",
    description: "NIFT Selections",
  },
  {
    number: "24",
    description: "NID Admissions",
  },
  {
    number: "6+ yrs",
    description: "Expertise",
  },
];

export const MissionVisionSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center gap-8 py-8 px-4 ">
      {statsData.map((stat, index) => (
        <Card
          key={index}
          className=" flex flex-col w-[157px] h-[157px] items-center justify-center gap-4 px-[19px] py-[42px] bg-white rounded-[100px] border-2 shadow-[0px_11px_12.5px_#00000040]"
        >
          <CardContent className="flex flex-col items-center gap-4 p-0">
            <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#ef5134] text-[32px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              {stat.number}
            </div>
            <div className="[font-family:'Poppins',Helvetica] font-normal text-[#4d4d4d] text-sm text-center tracking-[0] leading-[normal] whitespace-pre-line">
              {stat.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
