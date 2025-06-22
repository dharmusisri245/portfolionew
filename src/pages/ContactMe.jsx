import React from "react";
import Layout from "../Compnents/Layout";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <Layout>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('../../public/contact.avif')", // Use public folder path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-xl mx-auto p-6 bg-amber-200 rounded shadow-lg backdrop-blur-sm flex flex-col items-center h-60 w-full">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

          {/* Social & Contact Links */}
          <div className="flex flex-wrap gap-6 mb-6 justify-center">
            {/* GitHub */}
            <a
              href="https://github.com/dharmusisri245"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 hover:text-black"
            >
              <FaGithub size={32} />
              <span className="text-xs mt-1">GitHub</span>
            </a>
            {}
            <a
              href="https://www.linkedin.com/in/dharmendra-gupta-18a81b205/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-blue-700 hover:text-blue-900"
            >
              <FaLinkedin size={32} />
              <span className="text-xs mt-1">LinkedIn</span>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/your-instagram-id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-pink-600 hover:text-pink-800"
            >
              <FaInstagram size={32} />
              <span className="text-xs mt-1">Instagram</span>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/16k1GXGgZQ/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-blue-600 hover:text-blue-800"
            >
              <FaFacebook size={32} />
              <span className="text-xs mt-1">Facebook</span>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-green-600 hover:text-green-800"
            >
              <FaWhatsapp size={32} />
              <span className="text-xs mt-1">WhatsApp</span>
            </a>
            {/* Phone */}
            <a
              href="Mo No:+916392239051"
              className="flex flex-col items-center text-gray-700 hover:text-black"
            >
              <FaPhone size={32} />
              <span className="text-xs mt-1">+916392239051</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactMe;
