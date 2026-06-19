import React from "react";
import Layout from "../Compnents/Layout";
import { AnimatedPage, AnimatedSection } from "../Compnents/AnimatedSection";

const About = () => {
  return (
    <Layout>
      <AnimatedPage className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-amber-100 px-4 py-12">
        <AnimatedSection className="max-w-3xl w-full">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-blue-100 hover:shadow-blue-100 transition-shadow duration-300">
            <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-6">
              About Me
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Results-driven MERN Stack Developer with over 1 year of hands-on experience
              designing and delivering scalable web and mobile applications. Proficient in
              React.js, React Native, Node.js, Express.js, MongoDB, and TypeScript.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Currently engineering an AI-powered Event Management System with voice search,
              camera-based scanning, semantic vector search, and chatbot assistance via FastAPI
              microservices. At Cetpa Infotech, I delivered enterprise solutions for DFCCIL
              including Task & Training Management and Centralized Error Handling systems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Skilled in Redux Toolkit, RTK Query, JWT authentication, REST API design, and
              Agile development — turning complex business requirements into reliable,
              production-grade digital products.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Experience", value: "1+ Year" },
                { label: "Projects", value: "7+" },
                { label: "Stack", value: "MERN + AI" },
                { label: "Location", value: "Noida, UP" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl bg-blue-50 border border-blue-100 hover:scale-105 transition-transform"
                >
                  <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </AnimatedPage>
    </Layout>
  );
};

export default About;
