"use client"
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Section {
  title: string;
  links: string[];
}

const sections: Section[] = [
  {
    title: "Support",
    links: [
      "Coronavirus (COVID-19) FAQs",
      "Manage your trips",
      "Contact Customer Service",
      "Safety Resource Center",
    ],
  },
  {
    title: "Discover",
    links: [
      "Genius loyalty program",
      "Seasonal and holiday deals",
      "Travel articles",
      "Booking.com for Business",
      "Traveller Review Awards",
      "Car rental",
      "Flight finder",
      "Restaurant reservations",
      "Booking.com for Travel Agents",
    ],
  },
  {
    title: "Terms and settings",
    links: [
      "Privacy & cookies",
      "Terms & conditions",
      "Partner dispute",
      "Modern Slavery Statement",
      "Human Rights Statement",
    ],
  },
  {
    title: "Partners",
    links: ["Extranet login", "Partner help", "List your property", "Become an affiliate"],
  },
  {
    title: "About",
    links: [
      "About Booking.com",
      "How We Work",
      "Sustainability",
      "Press center",
      "Careers",
      "Investor relations",
      "Corporate contact",
    ],
  },
];

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <footer className="bg-gray-100 text-gray-700 border-t text-sm">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-5 max-w-7xl mx-auto px-4 py-8 gap-6">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden px-4 py-4 space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full flex justify-between items-center py-2 font-semibold"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSection === index && (
              <ul className="pl-2 pb-2 space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="block text-sm hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Currency + Copyright */}
      <div className="border-t pt-4 pb-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <img src="https://flagcdn.com/us.svg" alt="USA Flag" className="w-5 h-5" />
          <span className="font-semibold">NGN</span>
        </div>
        <p className="text-xs text-gray-500 px-4">
          Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
        </p>
        <p className="text-xs text-gray-500 mt-2">© 1996–2025 Booking.com™. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
