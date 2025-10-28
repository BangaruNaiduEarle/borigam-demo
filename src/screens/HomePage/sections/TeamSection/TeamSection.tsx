import React from "react";

import bgImage from "../../../../assets/about_bg.jpg";

export const TeamSection = (): JSX.Element => {
  return (
    <section id="about-us" className="relative flex flex-col w-full  items-center justify-center gap-2.5 px-4  py-44   bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url(${bgImage})`,}}>
         <div className="absolute inset-0 bg-black/60"></div>
      <div className="flex flex-col w-full max-w-[674px] items-start justify-center gap-[33px] relative">
        <h2 className="relative self-stretch [font-family:'Merriweather',Helvetica] font-bold text-white text-[46.3px] text-center tracking-[0] leading-[normal]">
          About Us
        </h2>

        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center tracking-[0.28px] leading-[normal]">
          Borigam Coaching Institution, established in 2019, is dedicated to
          nurturing creative minds through exceptional coaching for design and
          architecture entrance exams like NIFT, NID, NATA, B.ARCH, UCEED, and
          CEED. With personalized learning, detailed study material, and regular
          mock tests available both offline and online, we ensure students are
          fully prepared. Our proven success record reflects our commitment to
          helping students achieve their dreams of securing admission to
          prestigious colleges.
        </p>
      </div>
    </section>
  );
};
