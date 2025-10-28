import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

import bgImage from "../../../../assets/choose_boringa.png";

const features = [
  "Expert Faculty",
  "Hands-on Workshops",
  "Interactive Learning Sessions",
  "Real-Time Feedback",
  "Access to Exclusive Resources",
  "Post-Course Support",
  "Flexible Scheduling",
  "Networking Opportunities",
  "Customized Study Plans",
];

export const AboutUsSection = (): JSX.Element => {
  return (
    
    <section id="entrance-exam" className="flex w-full items-center gap-[34px] px-16 py-[100px] relative bg-[#f5f5f5] max-w-7xl"
    // style={{ backgroundImage: `url(${bgImage})` }}   bg-cover bg-no-repeat
    >  
      <div className="inline-flex flex-col items-start justify-center gap-[41px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[11px] relative flex-[0_0_auto]">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal]">
            Why Choose Borigam Institute?
          </h2>

          <p className="relative w-[560px] [font-family:'Poppins',Helvetica] font-light text-[#4d4d4d] text-2xl tracking-[0] leading-[normal]">
            We provide everything you need to excel
            <br />
            in your entrance exams
          </p>
        </div>

        <Button className="inline-flex items-center justify-center gap-2.5 px-[21px] py-[15px] relative flex-[0_0_auto] bg-[#ed9821] rounded-[20px] hover:bg-[#d88a1e] h-auto">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Learn more
          </span>
        </Button>
      </div>

      <div className=" flex flex-wrap w-[386px] items-start gap-[9px] relative" 
      //  
      >
        {features.map((feature, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="inline-flex items-center justify-center gap-2.5 p-[15px] relative flex-[0_0_auto] bg-white rounded-[15px] hover:bg-white"
          >
            <span className="relative w-fit mt-[-2.00px] [font-family:'Poppins',Helvetica] font-medium text-[#646464] text-xs tracking-[0.24px] leading-[normal] whitespace-nowrap">
              {feature}
            </span>
          </Badge>
        ))}
      </div>
     
    </section>
  );
};
