import React from "react";
import Layout from "../Compnents/Layout";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { AnimatedPage, AnimatedSection } from "../Compnents/AnimatedSection";

const contactLinks = [
  {
    href: "https://github.com/dharmusisri245",
    icon: FaGithub,
    label: "GitHub",
    color: "hover:text-gray-900 hover:bg-gray-100",
  },
  {
    href: "https://www.linkedin.com/in/dharmendra-gupta-18a81b205/",
    icon: FaLinkedin,
    label: "LinkedIn",
    color: "hover:text-blue-700 hover:bg-blue-50",
  },
  {
    href: "mailto:dg339736@gmail.com",
    icon: FaEnvelope,
    label: "Email",
    color: "hover:text-red-600 hover:bg-red-50",
  },
  {
    href: "https://wa.me/916392239051",
    icon: FaWhatsapp,
    label: "WhatsApp",
    color: "hover:text-green-600 hover:bg-green-50",
  },
  {
    href: "tel:+916392239051",
    icon: FaPhone,
    label: "+91 6392239051",
    color: "hover:text-gray-900 hover:bg-gray-100",
  },
  {
    href: "https://www.facebook.com/share/16k1GXGgZQ/",
    icon: FaFacebook,
    label: "Facebook",
    color: "hover:text-blue-600 hover:bg-blue-50",
  },
  {
    href: "https://instagram.com/your-instagram-id",
    icon: FaInstagram,
    label: "Instagram",
    color: "hover:text-pink-600 hover:bg-pink-50",
  },
];

const ContactMe = () => {
  return (
    <Layout>
      <AnimatedPage className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-blue-100 px-4 py-12">
        <AnimatedSection className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-100">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
              Contact Me
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Let's connect — open to full-time roles and interesting projects.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {contactLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 text-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-md ${link.color}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <link.icon size={28} />
                  <span className="text-xs font-medium text-center">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </AnimatedPage>
    </Layout>
  );
};

export default ContactMe;
