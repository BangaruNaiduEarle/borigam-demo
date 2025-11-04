import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CollegeLogosSection } from "./sections/CollegeLogosSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { EntranceExamsSection } from "./sections/EntranceExamsSection";
import { GallerySection } from "./sections/GallerySection";

import { HeroWithStatsSection } from "./sections/HeroWithStatsSection";

import { ServicesSection } from "./sections/ServicesSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { Footer } from "./sections/Footer";

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
import whatsapp from "../../assets/whatsapp-icon-free-png.webp";

import flight_vector from "../../assets/flight_vector.png";


import { FooterSection } from "./sections/Footer";
import { AbroadBadge } from "./sections/AbroadBadge";
import { Button } from "../../components/ui/button";

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



export const HomePage = (): JSX.Element => {
  const abroadRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(
      abroadRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4, // small delay so it syncs with page load
      }
    );

  }, []);
  return (

    <div className=" flex flex-col items-center justify-center ">

      <div className="bg-white w-full relative max-w-7xl ">
        {/* <div
          ref={abroadRef}
          className="flex items-center justify-center gap-2.5 px-4 sm:px-5 py-[12px] sm:py-[14px] 
  absolute top-0 left-1/2 -translate-x-1/2 
  rounded-b-[15px] 
  bg-[linear-gradient(236deg,rgba(239,81,52,1)_0%,rgba(238,153,33,1)_100%)] 
  z-10 shadow-md w-[80%] max-w-[340px] sm:max-w-[360px] md:max-w-[380px]"
        >
          <div className="font-poppins font-semibold text-white text-xs sm:text-sm md:text-base tracking-[0] leading-none whitespace-nowrap">
            Abroad Education
          </div>
          <img
            className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] translate-y-[1px]"
            alt="Flight Vector"
            src={flight_vector}
          />
        </div> */}
        <ServicesSection />

        <div className="relative w-full">
          <div className="hidden md:block">
            <AbroadBadge />

          </div>
          <HeroWithStatsSection />
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

      <div className="bg-[#f5f5f5] w-full max-w-full">
        {/* GALLERY SECTION */}
        <GallerySection />

        {/* COLLEGE LOGOS SECTION */}
        <section className="w-full bg-white flex justify-center">
          <div className="max-w-7xl w-full px-4 sm:px-6 md:px-10 lg:px-12 py-14 sm:py-20 md:py-24">
            {/* Heading */}
            <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-4xl md:text-[46px] text-center mb-6 sm:mb-8">
              College Logos
            </h2>

            {/* Subtitle */}
            <div className="flex justify-center mb-10 sm:mb-14">
              <p className="font-poppins font-light text-[#4d4d4d] text-sm sm:text-base md:text-lg text-center max-w-[560px]">
                Comprehensive coaching for all major design and architecture entrance examinations
              </p>
            </div>

            {/* Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 md:gap-14 lg:gap-20 justify-items-center items-center">
              {collegeLogos.map((logo, index) => (
                <img
                  key={`college-logo-${index}`}
                  src={logo.src}
                  alt={`College logo ${index + 1}`}
                  className="w-[80px] sm:w-[100px] md:w-[110px] h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
          </div>
        </section>

        {/* STUDENT SUCCESS STORIES */}
        <section
          id="success-stories"
          className="w-full bg-[#f5f5f5] py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10"
        >
          <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-4xl md:text-[46px] text-center md:mb-10">
            Student Success Stories
          </h2>
          <CollegeLogosSection />
        </section>

        {/* SUCCESS STORIES SLIDER */}
        <SuccessStoriesSection />

        {/* CONTACT US */}
        <section
          id="contact-us"
          className="w-full bg-white py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10"
        >
          <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-4xl md:text-[46px] text-center mb-10">
            Contact Us
          </h2>
          <ContactUsSection />
        </section>

        {/* === Mobile Fixed Bottom Buttons (Borigam Theme) === */}
        <div className="fixed bottom-0 left-0 w-full flex md:hidden z-[50] shadow-[0_-3px_10px_rgba(0,0,0,0.15)]">
          {/* Left: Abroad Education */}
          <button
            className="flex-1 flex items-center justify-center gap-2 px-3 py-4 
      bg-gradient-to-r from-[#ef5134] to-[#ee9921] 
      text-white text-sm font-semibold [font-family:'Poppins',Helvetica] 
      transition-all duration-300 active:scale-95"
          >
            <span>Abroad Education</span>
            <img
              className="w-[18px] h-[18px] object-contain"
              alt="Flight Vector"
              src={flight_vector}
            />
          </button>

          {/* Right: Contact Us */}
          <button
            onClick={() => window.location.href = '#contact-us'}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-4 
      bg-gradient-to-r from-[#fbbc04] to-[#ef5134] 
      text-white text-sm font-semibold [font-family:'Poppins',Helvetica] 
      transition-all duration-300 active:scale-95"
          >
            <span>Contact Us</span>
           
          </button>
        </div>


        {/* FOOTER */}
        <FooterSection />

        {/* Floating WhatsApp Button */}
        <Button className="fixed bottom-32 right-6 sm:bottom-10 sm:right-10 w-[40px] sm:w-[70px] h-[40px] sm:h-[70px] rounded-full bg-transparent hover:bg-transparent p-0 shadow-none">
          <img className="w-full h-full" alt="WhatsApp" src={whatsapp} />
        </Button>
      </div>

    </div >
  );
};
