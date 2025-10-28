import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CollegeLogosSection } from "./sections/CollegeLogosSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { EntranceExamsSection } from "./sections/EntranceExamsSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { MissionVisionSection } from "./sections/MissionVisionSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { Footer } from "./sections/Footer";


import flight_vector from "../../assets/flight_vector.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";
import logo9 from "../../assets/logo9.png";
import logo10 from "../../assets/logo10.png";
import logo11 from "../../assets/logo11.png";
import logo12 from "../../assets/logo12.png";
import { FooterSection } from "./sections/Footer";



const footerColumns = [
  {
    title: "ENTRANCE EXAM COACHING",
    left: "left-[203px]",
    links: [
      "NID Entrance Exam",
      "CEED Entrance Exam",
      "UCEED Entrance Exam",
      "NATA & JEE P2 Entrance Exam",
      "NIFT Entrance Exam",
      "Portfolio Guidance",
      "Student Testimonials",
    ],
  },
  {
    title: "STUDY MATERIAL",
    left: "left-[493px]",
    links: [
      "NID Entrance Exam",
      "CEED Entrance Exam",
      "UCEED Entrance Exam",
      "NATA & JEE P2 Entrance Exam",
      "NIFT Entrance Exam",
      "Portfolio Guidance",
      "Student Testimonials",
    ],
  },
  {
    title: "PAST YEAR PAPERS",
    left: "left-[767px]",
    links: [
      "NID Entrance Exam",
      "CEED Entrance Exam",
      "UCEED Entrance Exam",
      "NATA & JEE P2 Entrance Exam",
      "NIFT Entrance Exam",
      "Portfolio Guidance",
      "Student Testimonials",
    ],
  },
  {
    title: "MOCK TESTS",
    left: "left-[1041px]",
    links: [
      "NID Entrance Exam",
      "CEED Entrance Exam",
      "UCEED Entrance Exam",
      "NATA & JEE P2 Entrance Exam",
      "NIFT Entrance Exam",
      "Portfolio Guidance",
      "Student Testimonials",
    ],
  },
];

const socialIcons = [
  { src: "/icons-2.svg", alt: "Social icon 1" },
  { src: "/icons-4.svg", alt: "Social icon 2" },
  { src: "/icons.svg", alt: "Social icon 3" },
  { src: "/icons-1.svg", alt: "Social icon 4" },
  { src: "/icons-3.svg", alt: "Social icon 5" },
];

const collegeLogos = [
  { src: logo1, },
  { src: logo2, },
  { src: logo3, },
  { src: logo4, },
  { src: logo5, },
  { src: logo6, },
  { src: logo7, },
  { src: logo8, },
  { src: logo9, },
  { src: logo10, },
  { src: logo11, },
  { src: logo12, },
];

const testimonialDots = [
  { size: "w-[15px] h-[15px]", bg: "bg-[#d9d9d9]" },
  { size: "w-[15px] h-[15px]", bg: "bg-[#ef5134]" },
  { size: "w-[15px] h-[15px]", bg: "bg-[#d9d9d9]" },
];

const galleryDots = [
  { size: "w-[11.28px] h-[11.28px]", bg: "bg-[#d9d9d9]" },
  { size: "w-[21.05px] h-[21.05px]", bg: "bg-[#ef5134]" },
  { size: "w-[11.28px] h-[11.28px]", bg: "bg-[#d9d9d9]" },
  { size: "w-[11.28px] h-[11.28px]", bg: "bg-[#d9d9d9]" },
  { size: "w-[11.28px] h-[11.28px]", bg: "bg-[#d9d9d9]" },
  { size: "w-[11.28px] h-[11.28px]", bg: "bg-[#d9d9d9]" },
];

export const HomePage = (): JSX.Element => {
  return (

    <div className=" flex flex-col items-center justify-center ">

      <div className="bg-white w-full relative max-w-7xl ">
        <div className="flex w-[348px] items-end justify-center gap-2.5 px-4 py-[18px] absolute top-0 left-[calc(50.00%_-_174px)] rounded-[0px_0px_15px_15px] bg-[linear-gradient(236deg,rgba(239,81,52,1)_0%,rgba(238,153,33,1)_100%)] z-10">
          <div className="relative w-fit [font-family:'Poppins',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Abroad education
          </div>
          <img
            className="relative w-[19.49px] h-[19.49px] mb-[-0.75px]"
            alt="Flight Vector"
            src={flight_vector}
          />
        </div>



        <ServicesSection />

        <div className="relative">

          <HeroSection />
        </div>
        <div className="absolute top-[600px] w-full">

          <MissionVisionSection />
        </div>



        <TestimonialsSection />

      </div>
      <div className="bg-white w-full  max-w-full">

        <TeamSection />
      </div>


      <div className="bg-white max-w-7xl ">
        <EntranceExamsSection />
      </div>
      <div className="bg-[#f5f5f5] w-full  max-w-full flex justify-center">
        <AboutUsSection />
      </div>

      <div className="bg-[#f5f5f5] w-full  max-w-full">
        <GallerySection />

        <section className="w-full bg-white flex justify-center">
          <div className="max-w-7xl  py-[100px]">


            <div className="  [font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal] text-center mb-8">
              College logos
            </div>

            <div className="flex justify-center">
              <div className=" w-[560px] [font-family:'Poppins',Helvetica] font-light text-[#4d4d4d] text-base  tracking-[0] leading-[normal] text-center">
                Comprehensive coaching for all major design and architecture entrance
                examinations
              </div>
            </div>



            <div className="grid grid-cols-6  gap-20 mt-20">
              {collegeLogos.map((logo, index) => (
                <img
                  key={`college-logo-${index}`}
                  className="w-[110px] h-[110px]"
                  alt="Rectangle"
                  src={logo.src}
                />
              ))}
            </div>
          </div>

        </section>



        <section id="success-stories" className=" w-full py-[100px]">


          <div className=" [font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal] mb-4">
            <h1 className="text-center">

              Student Success Stories
            </h1>
          </div>

          <CollegeLogosSection />

        </section>


        <SuccessStoriesSection />

        <section id="contact-us" className=" w-full bg-white">

          <div className="[font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal]">
            <h1 className="text-center">
            Contact us
            </h1>
          </div>
          <ContactUsSection />
        </section>


      <FooterSection />
      </div>
    </div >
  );
};
