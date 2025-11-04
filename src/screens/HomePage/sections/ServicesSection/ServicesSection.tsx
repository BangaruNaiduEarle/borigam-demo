import { ChevronDownIcon, Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import logo from "../../../../assets/logo.png";
import { Link } from "react-router-dom";
import gsap from "gsap";

const navigationItems = [
  { label: "Home", id: "home", hasDropdown: false },
  { label: "About Us", id: "about-us", hasDropdown: false },
  { label: "Entrance Exam", id: "entrance-exam", hasDropdown: true },
  { label: "Career Opportunities", id: "career-opportunities", hasDropdown: false },
  { label: "Success Stories", id: "success-stories", hasDropdown: false },
  { label: "Contact Us", id: "contact-us", hasDropdown: false },
];

export const ServicesSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll function
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on mobile after click
    }
  };

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <header
      ref={sectionRef}
      className="w-full bg-white shadow-sm sticky top-0 z-50 flex flex-col"
    >
      {/* Top row with logo + menu icon */}
      <div className="flex justify-between items-center px-4 sm:px-8 py-3">
        {/* Logo */}
        <Link to="/" onClick={() => handleScroll("home")}>
          <img
            src={logo}
            alt="Logo"
            className="h-14 sm:h-[80px] w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative flex items-center gap-1 cursor-pointer group"
            >
              <span className="font-poppins font-light text-[#4d4d4d] text-[15px] group-hover:text-[#ef5134] transition-colors duration-200">
                {item.label}
              </span>
              {item.hasDropdown && (
                <ChevronDownIcon className="w-4 h-4 text-[#4d4d4d] group-hover:text-[#ef5134]" />
              )}
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#ef5134] group-hover:w-full transition-all duration-300"></span>
            </div>
          ))}

          {/* Portal Button */}
          <Link to="/course">
            <Button className="ml-3 h-[36px] px-4 bg-black rounded-md hover:bg-black/90">
              <span className="font-poppins font-semibold text-[#fbbc04] text-sm">
                Borigam Portal
              </span>
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col bg-white border-t border-gray-100 animate-slide-down">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleScroll(item.id)}
              className="flex items-center justify-between px-5 py-3 text-[#4d4d4d] font-poppins text-[15px] hover:text-[#ef5134] hover:bg-gray-50 transition"
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <ChevronDownIcon className="w-4 h-4 text-[#4d4d4d]" />
              )}
            </div>
          ))}

          <div className="border-t border-gray-200 px-5 py-3">
            <Link to="/course">
              <Button className="w-full bg-black rounded-md hover:bg-black/90">
                <span className="font-poppins font-semibold text-[#fbbc04] text-sm">
                  Borigam Portal
                </span>
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
