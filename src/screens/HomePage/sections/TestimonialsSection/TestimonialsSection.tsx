import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import vision from "../../../../assets/vision.png";
import mission from "../../../../assets/mission.png";


const sections = [
  {
    id: "vision",
    icon: vision,
    title: "Vision",
    content: `At Borigam Coaching Institution, our mission is to deliver high-quality, result-oriented education that empowers students to achieve academic and personal success. We are committed to:

Providing expert guidance through experienced and passionate faculty.
Creating a disciplined, supportive, and motivating learning environment where every student feels encouraged to reach their full potential.
Using modern teaching techniques and personalized mentoring to address individual learning needs.
Instilling strong values, critical thinking, and a growth mindset that extends beyond the classroom.
Preparing students not just for exams, but for life — with confidence, competence, and character.
We believe that every student can succeed with the right support, and we're here to walk with them every step of the way.`,
  },
  {
    id: "mission",
    icon: mission,
    title: "Mission",
    content: `At Borigam Coaching Institution, our vision is to empower every student with knowledge, confidence, and discipline to achieve academic excellence and succeed in life. We strive to become a leading center of learning and transformation, where students are not only prepared for exams but are also nurtured to become critical thinkers, ethical leaders, and responsible citizens.
We envision a future where every learner who walks through our doors is inspired to dream big, equipped to work hard, and guided to reach their full potential — regardless of their background. Through innovative teaching methods, dedicated faculty, and a student-centered approach, we aim to set new benchmarks in the field of education.
Borigam Coaching Institution is not just a place to learn — it's a place to grow, evolve, and build the foundation for a successful future.`,
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section  className="w-full py-[100px] px-4 md:px-8 lg:px-16 bg-cover bg-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 max-w-[1440px] mx-auto">
        {sections.map((section) => (
          <Card
            key={section.id}
            className="border-0 shadow-none bg-transparent"
          >
            <CardContent className="flex flex-col gap-[33px] p-[27px]">
              <div className="inline-flex items-center gap-2.5 py-[11px] border-b-[6px] border-[#ef5134] w-max">
                <img
                  className={`${section.id === "vision" ? "w-[89px] h-[89.62px]" : "w-20 h-[80.56px]"} object-cover`}
                  alt={section.title}
                  src={section.icon}
                />
                <h2 className="[font-family:'Poppins',Helvetica] font-normal text-[#555a66] text-[91.8px] tracking-[1.84px] leading-[118.0px] whitespace-nowrap">
                  {section.title}
                </h2>
              </div>
              <div className="flex flex-col gap-[33px]">
                <p className="[font-family:'Poppins',Helvetica] font-normal text-[#555a66] text-sm tracking-[0.28px] leading-[24px] whitespace-pre-line">
                  {section.content} 
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
