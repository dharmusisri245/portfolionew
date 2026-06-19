import React from "react";

const Marquee = () => {
  return (
    <div className="relative z-10 overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
      <div className="animate-marquee whitespace-nowrap py-2">
        <span className="inline-block px-8 text-sm md:text-base font-semibold text-white">
          Hi, I'm Dharmendra Gupta — MERN Stack Developer | React Native | AI Integration | FastAPI Microservices | Noida, India
        </span>
        <span className="inline-block px-8 text-sm md:text-base font-semibold text-white">
          Hi, I'm Dharmendra Gupta — MERN Stack Developer | React Native | AI Integration | FastAPI Microservices | Noida, India
        </span>
      </div>
    </div>
  );
};

export default Marquee;
