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
    <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1440px] mx-auto">
        {sections.map((section) => (
          <Card
            key={section.id}
            className="border-0 shadow-none bg-transparent"
          >
            <CardContent className="flex flex-col gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Heading */}
              <div className="inline-flex items-center gap-3 sm:gap-4 py-3 border-b-[5px] border-[#ef5134] w-max">
                <img
                  className={`${
                    section.id === "vision"
                      ? "w-16 sm:w-20 md:w-[85px]"
                      : "w-14 sm:w-16 md:w-[80px]"
                  } object-contain`}
                  alt={section.title}
                  src={section.icon}
                />
                <h2 className="font-poppins font-semibold text-[#555a66] text-3xl sm:text-4xl md:text-5xl lg:text-[72px] tracking-tight leading-[1.1] capitalize">
                  {section.title}
                </h2>
              </div>

              {/* Paragraph */}
              <div className="flex flex-col gap-4">
                <p className="font-poppins font-normal text-[#555a66] text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
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
