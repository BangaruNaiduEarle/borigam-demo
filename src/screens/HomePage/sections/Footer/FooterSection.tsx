import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { SiX } from "react-icons/si"; // for the "X" (Twitter) logo

export const FooterSection = () => {
  return (
    <footer className="bg-[#e65332] text-white pt-16 pb-0 [font-family:'Poppins',Helvetica] ">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-[#e8a623] font-extrabold text-[16px] mb-4 tracking-wide">
              ENTRANCE EXAM COACHING
            </h3>
            <ul className="space-y-1 text-white  leading-relaxed ">
              <li >NID Entrance Exam</li>
              <li>CEED Entrance Exam</li>
              <li>UCEED Entrance Exam</li>
              <li>NATA & JEE P2 Entrance Exam</li>
              <li>NIFT Entrance Exam</li>
              <li>Portfolio Guidance</li>
              <li>Student Testimonials</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[#e8a623] font-extrabold text-[16px] mb-4 tracking-wide">
              STUDY MATERIAL
            </h3>
            <ul className="space-y-1  text-white  leading-relaxed">
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
          <div>
            <h3 className="text-[#e8a623] font-extrabold text-[16px] mb-4 tracking-wide">
              PAST YEAR PAPERS
            </h3>
            <ul className="space-y-1  text-white  leading-relaxed">
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
          <div>
            <h3 className="text-[#e8a623] font-extrabold text-[16px] mb-4 tracking-wide">
              MOCK TESTS
            </h3>
            <ul className="space-y-1 text-white  leading-relaxed">
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
        <div className="mt-14">
          <h4 className="text-white font-semibold text-[17px] mb-4">
            Connect with us
          </h4>
          <div className="flex items-center space-x-5 text-white">
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <Youtube size={26} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <Facebook size={26} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <Instagram size={26} />
            </a>
            <a href="#" aria-label="X" className="hover:opacity-80">
              <SiX size={23} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <Linkedin size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#e6a623] mt-10 py-3 text-center text-black font-medium text-[14px]">
        © 2025 Borigam Institute. All Rights Reserved
      </div>
    </footer>
  );
};
