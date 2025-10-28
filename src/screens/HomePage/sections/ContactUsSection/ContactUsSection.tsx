import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  MapPin ,
  Phone ,
 
} from "lucide-react";

import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const contactCards = [
  {
    type: "contact",
    icon: <Phone />,
    phones: ["96661 69555,", "93905 35851,", "79952 97686"],
    email: "borigaminstitute@gmail.com",
    whatsapp: "79952 97686",
  },
  {
    type: "location",
    icon: <MapPin />,
    title: "Begumpet",
    address:
      "#1-11-206/A, Opposite Seasons Florists,\nBegumpet, Hyderabad, Telangana,\nIndia - 500016.",
    mapImage: "/rectangle-46-1.png",
  },
  {
    type: "location",
    icon: <MapPin />,
    title: "Madhapur",
    address:
      "2nd Floor, Above SBI Bank, Kavuri Hills,\nMadhapur, Hyderabad , Telangana,\nIndia- 500081.",
    mapImage: "/rectangle-46-1.png",
  },
];

export const ContactUsSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start justify-center gap-2.5 px-4">
      <div className="flex items-start justify-between gap-2.5 max-w-[1040px] w-full">
        {contactCards.map((card, index) => (
          <Card
            key={index}
            className="flex-col items-start gap-[29px] px-[25px] py-[19px] bg-white rounded-[15px] inline-flex flex-[0_0_auto] border-0 shadow-none"
          >
            <CardContent className="p-0 flex flex-col gap-[29px]">
              <div className="w-[52px] h-[52px] border-2 border-[#EE9921] rounded-full flex justify-center items-center">
                {card.icon}
              </div>

              <div className="inline-flex flex-col items-start justify-between gap-5">
                {card.type === "contact" ? (
                  <>
                    <div className="inline-flex items-center justify-center gap-2.5 px-0 py-2.5 rounded-[10px]">
                      <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-[34px] tracking-[0] leading-[46.7px]">
                        {card.phones.map((phone, i) => (
                          <React.Fragment key={i}>
                            {phone}
                            {i < card.phones.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-5">
                       <IoMdMail />
                      <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#555a66] text-[17px] tracking-[0] leading-[23.3px] whitespace-nowrap">
                        {card.email}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-5">
                    
                     <IoLogoWhatsapp />
                      <div className="w-fit [font-family:'Poppins',Helvetica] font-normal text-[#555a66] text-[17px] tracking-[0] leading-[23.3px] whitespace-nowrap">
                        {card.whatsapp}
                      </div>
                    </div>
                  </>
                ) : (
                  <div>

                    <div className="inline-flex items-center justify-center gap-2.5 px-0 py-2.5 rounded-[10px]">
                      <div className="w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-sm tracking-[0] leading-[19.2px] whitespace-nowrap">
                        {card.title}
                      </div>
                    </div>

                    <div className="w-[262px] [font-family:'Poppins',Helvetica] font-normal text-[#555a66] text-sm tracking-[0] leading-[19.2px]">
                      {card.address.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < card.address.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60901.13687353941!2d78.467776!3d17.444341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a3ed28854f%3A0x20084b938c2f1b8c!2sBegumpet%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1761646736318!5m2!1sen!2sus" width="full" height="150"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
