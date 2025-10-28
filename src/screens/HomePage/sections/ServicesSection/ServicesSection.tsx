import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import logo from "../../../../assets/logo.png";

const navigationItems = [
  { label: "Home", id: "home", hasDropdown: false },
  { label: "About Us", id: "about-us", hasDropdown: false },
  { label: "Entrance Exam", id: "entrance-exam", hasDropdown: true },
  { label: "Career Opportunities", id: "career-opportunities", hasDropdown: false },
  { label: "Success Stories", id: "success-stories", hasDropdown: false },
  { label: "Contact Us", id: "contact-us", hasDropdown: false },
];

export const ServicesSection = (): JSX.Element => {
  // Smooth scroll function
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex items-end justify-center gap-[43px] bg-white w-full pb-2 shadow-sm">
      {/* Logo */}
      <img
        className="h-[100px] w-auto md:h-[120px] object-contain self-end cursor-pointer"
        alt="Logo"
        src={logo}
        onClick={() => handleScroll("home")}
      />

      {/* Navigation */}
      <nav className="flex items-center pt-[52px] pb-0 px-0">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleScroll(item.id)}
            className="flex items-center justify-center gap-1 p-3 !cursor-pointer group relative"
          >
            <span
              className="[font-family:'Poppins',Helvetica] font-light text-[#4d4d4d] text-sm tracking-[0.28px] leading-[normal] whitespace-nowrap group-hover:text-[#ef5134] transition-colors duration-200"
            >
              {item.label}
            </span>
            {item.hasDropdown && (
              <ChevronDownIcon className="w-3 h-3 text-[#4d4d4d] group-hover:text-[#ef5134]" />
            )}

            {/* Active underline effect */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ef5134] group-hover:w-full transition-all duration-300"></span>
          </div>
        ))}

        {/* Portal Button */}
        <Button className="h-[30px] gap-2.5 p-2.5 bg-black rounded-[5px] hover:bg-black/90 ml-2">
          <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#fbbc04] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Borigam Portal
          </span>
        </Button>
      </nav>
    </header>
  );
};
