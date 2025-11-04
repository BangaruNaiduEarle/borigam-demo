import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { MapPin, Phone } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactCards = [
  {
    type: "contact",
    icon: <Phone className="text-[#EE9921]" size={22} />,
    phones: ["96661 69555", "93905 35851", "79952 97686"],
    email: "borigaminstitute@gmail.com",
    whatsapp: "79952 97686",
  },
  {
    type: "location",
    icon: <MapPin className="text-[#EE9921]" size={22} />,
    title: "Begumpet",
    address:
      "#1-11-206/A, Opposite Seasons Florists,\nBegumpet, Hyderabad, Telangana,\nIndia - 500016.",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60901.13687353941!2d78.467776!3d17.444341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a3ed28854f%3A0x20084b938c2f1b8c!2sBegumpet%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1761646736318!5m2!1sen!2sin",
  },
  {
    type: "location",
    icon: <MapPin className="text-[#EE9921]" size={22} />,
    title: "Madhapur",
    address:
      "2nd Floor, Above SBI Bank, Kavuri Hills,\nMadhapur, Hyderabad, Telangana,\nIndia - 500081.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4475142802383!2d78.38621617493054!3d17.44102430273933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d4e1555555%3A0x1c1b12358aa7e4ac!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1761646799999!5m2!1sen!2sin",
  },
];

export const ContactUsSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".contact-card") as HTMLElement[];

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact-us"
      className="w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 pt-8 pb-16 sm:py-10 md:py-[100px] bg-white overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full max-w-6xl flex-wrap">
        {contactCards.map((card, index) => (
          <Card
            key={index}
            className="contact-card flex flex-col items-start gap-6 px-6 py-8 bg-white rounded-[15px] border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 w-full sm:w-[350px] opacity-0 translate-y-6"
          >
            <CardContent className="p-0 w-full flex flex-col gap-5">
              {/* Icon */}
              <div className="w-[52px] h-[52px] border-2 border-[#EE9921] rounded-full flex justify-center items-center">
                {card.icon}
              </div>

              {/* Contact Info */}
              {card.type === "contact" ? (
                <div className="flex flex-col gap-4 text-[#555a66]">
                  <div className="font-poppins font-bold text-lg sm:text-xl md:text-[24px] leading-snug text-black">
                    {card.phones.map((phone, i) => (
                      <React.Fragment key={i}>
                        {phone}
                        {i < card.phones.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <IoMdMail className="text-[#ef5134]" size={20} />
                    <p className="font-poppins text-sm sm:text-base">{card.email}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <IoLogoWhatsapp className="text-green-500" size={20} />
                    <p className="font-poppins text-sm sm:text-base">{card.whatsapp}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3 text-[#555a66]">
                  <h3 className="font-poppins font-semibold text-lg">{card.title}</h3>
                  <p className="font-poppins text-sm sm:text-base leading-relaxed">
                    {card.address.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < card.address.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>

                  <iframe
                    src={card.map}
                    width="100%"
                    height="150"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-[10px] border border-gray-200 mt-2"
                    title={`${card.title} map`}
                  ></iframe>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
