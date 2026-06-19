import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="text-lg font-bold">Dharmendra Gupta</p>
          <p className="text-gray-300 text-sm">MERN Stack Developer | React Native | FastAPI</p>
          <a
            href="mailto:dg339736@gmail.com"
            className="text-blue-300 text-sm hover:underline"
          >
            dg339736@gmail.com
          </a>
        </div>
        <Link
          to="/"
          className="px-5 py-2 bg-blue-600 rounded-full text-sm font-semibold hover:bg-blue-500 transition-all hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
      <p className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Dharmendra Gupta. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
