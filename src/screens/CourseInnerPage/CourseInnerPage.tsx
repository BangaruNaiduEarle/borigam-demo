import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ServicesSection } from "../HomePage/sections/ServicesSection";
import { FooterSection } from "../HomePage/sections/Footer";
import flight_vector from "../../assets/flight_vector.png";
import course_banner from "../../assets/course_inner_banner.png";
import course_section from "../../assets/course_inner_section.png";
import cf1 from "../../assets/course_feature_1.jpg";
import cf2 from "../../assets/course_feature_2.jpg";
import cf3 from "../../assets/course_feature_3.jpg";
import whatsapp from "../../assets/whatsapp-icon-free-png.webp";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const supportLinks = [
  "Get course material",
  "Works of Wonder",
  "Innovative Project Showcases",
  "Leading Architecture Colleges",
  "Curriculum Development",
  "Leading Design Schools",
  "Design Thinking Workshops",
  "Question papers",
];

const faqItems = [
  { question: "Understanding NIFT Campuses" },
  { question: "How to prepare for NATA?" },
  { question: "Is portfolio required for NID?" },
  { question: "What is CEED and UCEED?" },
];

const courseFeatures = [
  {
    image: cf1,
    description:
      "Our 'Design Your Destiny' course features personalized mentorship, mock exams that mirror the real test, and adaptive learning modules.",
  },
  {
    image: cf2,
    description:
      "Our 'Design Your Destiny' course features personalized mentorship, mock exams that mirror the real test, and adaptive learning modules.",
  },
  {
    image: cf3,
    description:
      "Our 'Design Your Destiny' course features personalized mentorship, mock exams that mirror the real test, and adaptive learning modules.",
  },
];

export const CourseInnerPage = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray("section");

      sections.forEach((section) => {
        gsap.from(section as HTMLElement, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });

      // Animate heading elements separately for staggered reveal
      const headings = gsap.utils.toArray("h2, h1");
      gsap.from(headings, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white w-full overflow-x-hidden flex justify-center">

      <div className="w-full max-w-7xl mx-auto relative">



        {/* Navbar */}
        <ServicesSection />
        {/* Floating Badge */}
        {/* <div className="relative flex justify-center ">
          <div
            className="flex items-center justify-center gap-2.5 px-4 py-[12px] 
      rounded-b-[15px] bg-gradient-to-r from-[#ef5134] to-[#ee9921] 
      shadow-md w-[80%] sm:w-[300px] md:w-[340px] z-[5]"
          >
            <span className="font-poppins font-semibold text-white text-sm sm:text-base">
              Abroad Education
            </span>
            <img className="w-[18px] h-[18px]" alt="Flight Vector" src={flight_vector} />
          </div>
        </div> */}

        {/* Back Arrow + Heading */}
        <section className="mt-10 px-4 sm:px-8 md:px-20 lg:px-[200px] flex flex-col gap-4">
          <div className="flex items-center gap-3 sm:gap-5">
            <Link to={"/"}>
              <ArrowLeftIcon className="w-8 h-8 sm:w-[41px] sm:h-[41px] text-[#ef5134]" />
            </Link>
            <h1 className="font-merriweather font-bold text-[#ef5134] text-2xl sm:text-3xl md:text-[46.3px] leading-tight">
              Course Heading Here
            </h1>
          </div>
        </section>

        {/* Banner */}
        <section className="mt-6 px-4 sm:px-10 md:px-20 lg:px-[200px]">
          <div className="relative">
            <img
              className="w-full h-[220px] sm:h-[340px] md:h-[454px] rounded-[13px] object-cover"
              alt="Banner"
              src={course_banner}
            />

            <div className="absolute top-[30%] left-[20px] sm:left-[40px]">
              <h2 className="font-poppins font-light text-white text-4xl sm:text-6xl md:text-[78.9px] leading-none">
                Banner
              </h2>
              <h2 className="font-poppins font-light text-[#fbbc04] text-4xl sm:text-6xl md:text-[78.9px] leading-none">
                Sample
              </h2>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="flex flex-col items-center justify-center text-center gap-6 bg-[#F5F5F5] px-4 sm:px-10 md:px-20 lg:px-[200px] py-14 mt-12">
          <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-[46.3px] leading-tight">
            Course Heading Here
          </h2>
          <p className="font-poppins text-[#4d4d4d] text-base sm:text-lg md:text-2xl leading-normal">
            We provide everything you need to excel <br /> in your entrance exams
          </p>
        </section>

        {/* Two-Column Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-4 sm:px-10 md:px-20 lg:px-[200px] py-16">
          <div className="flex flex-col gap-6">
            <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-[46.3px]">
              Heading
            </h2>
            <p className="font-poppins text-[#4d4d4d] text-lg md:text-2xl">
              We provide everything you need to excel <br /> in your entrance exams
            </p>
            <p className="font-poppins text-[#555a66] text-sm leading-relaxed">
              At Peakview Academy, our goal is to provide top-tier, results-driven education, empowering students to excel academically and personally. We pledge to:<br /><br />
              • Provide expert instruction through dedicated and experienced faculty.<br />
              • Cultivate a nurturing learning atmosphere.<br />
              • Employ innovative teaching methods and tailored mentorship.<br />
              • Develop strong ethics, analytical abilities, and a growth mindset.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="rounded-2xl object-cover w-full sm:w-[400px] md:w-[475px]"
              alt="Course Section"
              src={course_section}
            />
          </div>
        </section>

        {/* Features List */}
        <section className="px-4 sm:px-10 md:px-20 lg:px-[200px] py-12 bg-white">
          <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-[46.3px] mb-6">
            Features
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="font-poppins text-[#4d4d4d] text-sm leading-6 list-disc list-inside space-y-2">
              <li>Experienced Faculty with real-world expertise.</li>
              <li>Comprehensive Curriculum covering all NIFT topics.</li>
              <li>Personalized Attention through small batch sizes.</li>
              <li>State-of-the-Art Facilities simulating real exam environments.</li>
            </ul>

            <ul className="font-poppins text-[#4d4d4d] text-sm leading-6 list-disc list-inside space-y-2">
              <li>Regular Assessments to track progress.</li>
              <li>Portfolio Development (where applicable).</li>
              <li>Interview Preparation with mock sessions and feedback.</li>
            </ul>
          </div>
        </section>

        {/* Support Links */}
        <section className="px-4 sm:px-10 md:px-20 lg:px-[200px] py-14">
          <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-[46.3px]">
            Support Links
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
            {supportLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex items-center justify-between w-full p-4 bg-neutral-50 hover:bg-neutral-100 rounded-[15px]"
              >
                <span className="font-poppins text-[#4d4d4d] text-sm text-left">
                  {link}
                </span>
                <ArrowUpRightIcon className="w-5 h-5 text-[#ef5134]" />
              </Button>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-10 md:px-20 lg:px-[200px] py-14">
          <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-[46.3px] mb-6">
            FAQ&apos;s
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-inter font-bold text-lg text-black">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-poppins text-sm text-[#555a66] px-4 pb-4">
                  Content for {item.question}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Course Features */}
        <section className="px-4 sm:px-10 md:px-20 lg:px-[200px] py-14">
          <h2 className="font-merriweather font-bold text-[#ef5134] text-3xl sm:text-[46.3px]">
            Course Features
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-16">
            {courseFeatures.map((feature, index) => (
              <Card key={index} className="bg-neutral-100 rounded-[10px] border-0">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <img
                    className="w-full h-[180px] sm:h-[200px] object-cover rounded-[10px]"
                    alt="Course feature"
                    src={feature.image}
                  />
                  <p className="font-merriweather font-bold text-black text-sm text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-[18px] h-[18px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 10c0 6.075-4.925 11-11 11-1.985 0-3.849-.53-5.454-1.454L3 20l1.454-1.546A10.96 10.96 0 0 1 2 10C2 4.925 6.925 0 12 0s10 4.925 10 10z"
              />
            </svg>
          </button>
        </div>


        {/* Footer */}
        <FooterSection />

        {/* Floating WhatsApp Button */}
        <Button className="fixed bottom-32 right-6 sm:bottom-32 sm:right-10 w-[40px] sm:w-[70px] h-[40px] sm:h-[70px] rounded-full bg-transparent hover:bg-transparent p-0 shadow-none">
          <img className="w-full h-full" alt="WhatsApp" src={whatsapp} />
        </Button>
      </div>
    </div>
  );
};
