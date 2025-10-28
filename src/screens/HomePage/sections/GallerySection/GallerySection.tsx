import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import enterenceBg from "../../../../assets/enternce_exam_bg.png";
import compass from "../../../../assets/compass.png"

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
  return (
    <section className="flex flex-col w-full items-center justify-center gap-2.5 px-4 md:px-[201px] py-[108px] relative bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${enterenceBg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="flex flex-col w-full max-w-[1036px] items-center justify-center gap-[52px] relative">
        <div className="flex flex-col items-center gap-[15px] relative w-full">
          <h2 className="relative w-full [font-family:'Merriweather',Helvetica] font-bold text-white text-4xl md:text-[79.3px] text-center tracking-[0] leading-[normal]">
            Entrance Exams
            <br />
            We Cover
          </h2>

          <p className="relative w-full max-w-[560px] [font-family:'Poppins',Helvetica] font-normal text-white text-lg md:text-2xl text-center tracking-[0] leading-[normal]">
            Comprehensive coaching for all major design and architecture
            entrance examinations
          </p>
        </div>


        <div className="flex items-center justify-center relative w-full">
          <div className="flex items-center justify-center">
            {examData.map((exam, index) => (
              <Card
                key={exam.name}
                className={`
          ${exam.zIndex}
          group flex flex-col w-[130.63px] h-[135.72px] items-center justify-center
          gap-[26.44px] px-[21.15px] py-[15.87px] relative
          ${index === 0 ? "ml-[-0.57px]" : ""}
          ${index === examData.length - 1 ? "mr-[-0.57px]" : ""}
          bg-neutral-50 border-solid border-0
          rounded-none transition-all duration-500 ease-in-out text-[#646464] 
          hover:border-b-4 hover:border-[#EF5134] hover:shadow-lg hover:text-[#EF5134]
        `}
              >
                <CardContent className="flex flex-col items-center justify-center gap-[26.44px] p-0 w-full h-full">
                  {/* Image Rotation */}
                  <img
                    src={compass}
                    alt="compass"
                    className="transform transition-transform duration-700 ease-in-out group-hover:rotate-45"
                  />

                  {/* Text Animation */}
                  <div className="flex flex-col w-[103.5px] items-center justify-center gap-[8.31px] relative">
                    <div
                      className="relative w-fit font-medium  text-[17px] text-center tracking-[0] leading-[23.3px] whitespace-nowrap
              transition-all duration-500 ease-in-out group-hover:translate-y-1"
                    >
                      {exam.name}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
