import React, { useEffect, useRef } from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FooterSection = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const columns = gsap.utils.toArray(".footer-col") as HTMLElement[];
      const socials = footerRef.current?.querySelector(".footer-socials");

      // Fade-up for each column
      gsap.from(columns, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      // Fade-up for social icons
      if (socials) {
        gsap.from(socials, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: socials,
            start: "top 95%",
          },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#e65332] text-white [font-family:'Poppins',Helvetica] pt-16 pb-0 overflow-hidden"
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
          {/* Column 1 */}
          <div className="footer-col">
            <h3 className="text-[#e8a623] font-extrabold text-[16px] mb-4 tracking-wide uppercase">
              Entrance Exam Coaching
            </h3>
            <ul className="space-y-1 text-white text-sm sm:text-base leading-relaxed">
              <li>NID Entrance Exam</li>
              <li>CEED Entrance Exam</li>
              <li>UCEED Entrance Exam</li>
              <li>NATA & JEE P2 Entrance Exam</li>
              <li>NIFT Entrance Exam</li>
              <li>Portfolio Guidance</li>
              <li>Student Testimonials</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3 className="text-[#e8a623] font-extrabold text-[16px] mb-4 tracking-wide uppercase">
              Study Material
            </h3>
            <ul className="space-y-1 text-white text-sm sm:text-base leading-relaxed">
              <li>NID Entrance Exam</li>
              <li>CEED Entrance Exam</li>
              <li>UCEED Entrance Exam</li>
              <li>NATA & JEE P2 Entrance Exam</li>
              <li>NIFT Entrance Exam</li>
              <li>Portfolio Guidance</li>
              <li>Student Testimonials</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3 className="text-[#e8a623] font-extrabold text-[16px] mb-4 tracking-wide uppercase">
              Past Year Papers
            </h3>
            <ul className="space-y-1 text-white text-sm sm:text-base leading-relaxed">
              <li>NID Entrance Exam</li>
              <li>CEED Entrance Exam</li>
              <li>UCEED Entrance Exam</li>
              <li>NATA & JEE P2 Entrance Exam</li>
              <li>NIFT Entrance Exam</li>
              <li>Portfolio Guidance</li>
              <li>Student Testimonials</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3 className="text-[#e8a623] font-extrabold text-[16px] mb-4 tracking-wide uppercase">
              Mock Tests
            </h3>
            <ul className="space-y-1 text-white text-sm sm:text-base leading-relaxed">
              <li>NID Entrance Exam</li>
              <li>CEED Entrance Exam</li>
              <li>UCEED Entrance Exam</li>
              <li>NATA & JEE P2 Entrance Exam</li>
              <li>NIFT Entrance Exam</li>
              <li>Portfolio Guidance</li>
              <li>Student Testimonials</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-socials mt-14 text-center sm:text-left">
          <h4 className="font-semibold text-[17px] mb-4">Connect with us</h4>
          <div className="flex justify-center sm:justify-start items-center space-x-6 text-white">
            <a
              href="#"
              aria-label="YouTube"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Youtube size={26} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Facebook size={26} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Instagram size={26} />
            </a>
            <a
              href="#"
              aria-label="Twitter (X)"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <SiX size={23} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Linkedin size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#e6a623] mt-10 py-3 text-center text-black font-medium text-[13px] sm:text-[14px]">
        © 2025 Borigam Institute. All Rights Reserved
      </div>
    </footer>
  );
};
