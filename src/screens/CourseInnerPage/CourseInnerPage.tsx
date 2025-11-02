import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ServicesSection } from "../HomePage/sections/ServicesSection";

import flight_vector from "../../assets/flight_vector.png";
import course_banner from "../../assets/course_inner_banner.png";
import course_section from "../../assets/course_inner_section.png";
import cf1 from "../../assets/course_feature_1.jpg";
import cf2 from "../../assets/course_feature_2.jpg";
import cf3 from "../../assets/course_feature_3.jpg";



import { FooterSection } from "../HomePage/sections/Footer";
import { Link } from "react-router-dom";




const footerColumns = [
  {
    title: "ENTRANCE EXAM COACHING",
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

const supportLinks = [
  "Get course meterial",
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
  { question: "Understanding NIFT Campuses" },
  { question: "Understanding NIFT Campuses" },
  { question: "Understanding NIFT Campuses" },
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

const socialIcons = [
  "/icons-3.svg",
  "/icons-1.svg",
  "/icons-2.svg",
  "/icons.svg",
  "/icons-4.svg",
];

export const CourseInnerPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1440px] relative">
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

      <section className="mt-[33px] px-[204px]">
        <div className="inline-flex items-center gap-[19px]">
          <Link to={"/"}>
            <ArrowLeftIcon className="w-[41px] h-[41px] text-[#ef5134]" />
          </Link>

          <h1 className="w-fit mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal]">
            Course Heading here
          </h1>
        </div>
      </section>

      <section className="mt-[20px] px-[200px] flex justify-center items-center">
        <div className="relative">
          <img
            className="w-[1040px] h-[454px] rounded-[13px] object-cover"
            alt="Banner"
            src={course_banner}
          />

          <div className="absolute top-[144px] left-[45px] [font-family:'Poppins',Helvetica] font-light text-white text-[78.9px] tracking-[1.58px] leading-[normal] whitespace-nowrap">
            Banner
          </div>

          <div className="absolute top-[215px] left-[45px] [font-family:'Poppins',Helvetica] font-light text-[#fbbc04] text-[78.9px] tracking-[1.58px] leading-[normal] whitespace-nowrap">
            Sample
          </div>

          {/* <div className="inline-flex items-center justify-center gap-2.5 px-[34px] py-9 absolute top-[293px] left-[35px] bg-black">
            <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-light text-white text-[52.9px] tracking-[1.06px] leading-[normal] whitespace-nowrap">
              Boringa Inner page
            </div>
          </div> */}
        </div>
      </section>

      <section className="flex items-center justify-center gap-[34px] px-[206px] py-[79px] mt-[46px] bg-[#F5F5F5]">
        <div className="flex flex-col items-center justify-center gap-[41px]">
          <div className="inline-flex flex-col items-center  justify-center gap-[11px]">
            <h2 className="mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal] text-center">
              Course Heading here
            </h2>

            <p className=" [font-family:'Poppins',Helvetica] font-light text-[#4d4d4d] text-2xl tracking-[0] leading-[normal]  text-center">
              We provide everything you need to excel
              <br />
              in your entrance exams
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center mt-[130px] px-[200px]">
        <div className="inline-flex flex-col items-start gap-[27px]">
          <h2 className="w-fit mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal]">
            Heading
          </h2>

          <p className="w-[560px] [font-family:'Poppins',Helvetica] font-light text-[#4d4d4d] text-2xl tracking-[0] leading-[normal]">
            We provide everything you need to excel
            <br />
            in your entrance exams
          </p>

          <div className="w-[509px] [font-family:'Poppins',Helvetica] font-normal text-[#555a66] text-sm tracking-[0.28px] leading-[normal]">
            At Peakview Academy, our goal is to provide top-tier, results-driven
            education, empowering students to excel academically and personally.
            We pledge to:
            <br />
            <br />
            Provide expert instruction through dedicated and experienced
            faculty.
            <br />
            Cultivate a structured, nurturing, and inspiring learning atmosphere
            where every student is motivated to achieve their maximum potential.
            <br />
            Employ innovative teaching methods and tailored mentorship to cater
            to diverse learning styles.
            <br />
            Develop robust ethics, analytical abilities, and a development
          </div>
        </div>

        <div className="flex justify-center items-center h-[475px]">
          <img
            className="rounded-2xl"
            alt="Rectangle"
            src={course_section}
          />
        </div>



      </section>

      <section className="mt-[100px] px-[200px]">
        <h2 className="[font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal]">
          Features
        </h2>

        <div className="flex gap-[79px] mt-[42px]">
          {/* Left Column */}
          <ul className="w-[502px] [font-family:'Poppins',Helvetica] font-medium text-[#4d4d4d] text-sm tracking-[0.28px] leading-[20.3px] list-disc list-inside space-y-2">
            <li>Experienced Faculty: Our team comprises seasoned educators and industry experts.</li>
            <li>Comprehensive Curriculum: Our curriculum covers all aspects of the NIFT exam.</li>
            <li>Personalized Attention: Small batch sizes ensure that each student receives personalized guidance and mentorship.</li>
            <li>State-of-the-Art Facilities: Our well-equipped studios and classrooms simulate real-world environments.</li>
          </ul>

          {/* Right Column */}
          <ul className="w-[502px] [font-family:'Poppins',Helvetica] font-medium text-[#4d4d4d] text-sm tracking-[0.28px] leading-[20.3px] list-disc list-inside space-y-2">
            <li>Regular Assessments: Frequent mock tests and assessments help track progress and identify areas for improvement.</li>
            <li>Portfolio Development (Not required for NIFT): Specialized sessions on portfolio presentation and structure.</li>
            <li>Interview Preparation: We offer training for the personal interview stage, including mock interviews and feedback sessions.</li>
          </ul>
        </div>
      </section>


      <section className="mt-[75px] px-[200px]">
        <h2 className="[font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal]">
          Support links
        </h2>

        <div className="grid grid-cols-3 gap-x-[123px] gap-y-[10px] mt-[42px]">
          {supportLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-fit h-auto inline-flex items-center justify-center gap-2.5 p-[15px] bg-neutral-50 rounded-[15px] hover:bg-neutral-100"
            >
              <span className="[font-family:'Poppins',Helvetica] font-medium text-[#4d4d4d] text-sm tracking-[0.28px] leading-[normal] whitespace-nowrap">
                {link}
              </span>

              <ArrowUpRightIcon className="w-[25px] h-[25px]" />
            </Button>
          ))}
        </div>
      </section>

      <section className="mt-[58px] px-[200px]">
        <h2 className="[font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal]">
          FAQ&apos;s
        </h2>

        <Accordion type="single" collapsible className="w-[1058px] mt-[42px]">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-0"
            >
              <AccordionTrigger className="flex items-center gap-2.5 p-[22px] hover:no-underline">
                <span className="flex-1 text-left [font-family:'Inter',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal]">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-[22px] pt-0 pl-8 [font-family:'Poppins',Helvetica]">Content for {item.question}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mt-[82px] px-[200px]">
        <h2 className="[font-family:'Merriweather',Helvetica] font-bold text-[#ef5134] text-[46.3px] tracking-[0] leading-[normal]">
          Course Features
        </h2>

        <div className="flex gap-[20px] mt-[42px] mb-[100px]">
          {courseFeatures.map((feature, index) => (
            <Card
              key={index}
              className="w-[333px] bg-neutral-100 rounded-[10px] border-0"
            >
              <CardContent className="flex flex-col items-center gap-[17px] px-[25px] py-7">
                <img
                  className="w-full h-[190px] rounded-[10px] object-cover"
                  alt="Course feature"
                  src={feature.image}
                />

                <p className="w-[299px] ml-[-8.00px] mr-[-8.00px] [font-family:'Merriweather',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* <footer className="mt-[68px] bg-black pt-[137px] pb-[43px]">
        <div className="flex justify-between px-[199px]">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#ed9821] text-sm tracking-[0] leading-[23.2px] whitespace-nowrap mb-[38px]">
                {column.title}
              </h3>

              <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[0] leading-[23.2px]">
                {column.links.map((link, linkIndex) => (
                  <React.Fragment key={linkIndex}>
                    {link}
                    {linkIndex < column.links.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-[21.33px] mt-[145px] px-[199px]">
          <h3 className="mt-[-1.33px] [font-family:'Forma_DJR_Display-Bold',Helvetica] font-bold text-[#fbfbfb] text-[21.3px] tracking-[1.07px] leading-8 whitespace-nowrap">
            Connect with us
          </h3>

          <div className="inline-flex items-center gap-[21.33px]">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-8 h-8"
                alt="Social icon"
                src={icon}
              />
            ))}
          </div>
        </div>

        <div className="w-full h-[43px] bg-[#ed9821] mt-[57px] flex items-center justify-center">
          <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[23.2px] whitespace-nowrap">
            © 2025 Borigam Institute. All Rights Reserved
          </p>
        </div>
      </footer> */}
      <FooterSection />

      <Button className="fixed top-[796px] right-[106px] w-[126px] h-[127px] rounded-full p-0 bg-transparent hover:bg-transparent border-0 shadow-none h-auto">
        <img className="w-full h-full" alt="WhatsApp" src="/frame-4414.svg" />
      </Button>
    </div>
  );
};
