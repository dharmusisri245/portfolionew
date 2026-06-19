import Layout from "../Compnents/Layout";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { homeSkillHighlights, skillCategories } from "../data/portfolioData";
import {
  AnimatedPage,
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../Compnents/AnimatedSection";

const Home = () => {
  return (
    <Layout>
      <AnimatedPage>
        <div className="relative w-full min-h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 scale-105 animate-slow-zoom"
          >
            <source src="/7989671-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 z-[1]" />

          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10 md:py-16 gap-8">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col border-2 p-6 bg-blue-200/90 backdrop-blur-sm justify-center items-center w-full max-w-xs md:max-w-sm rounded-3xl shadow-2xl"
              >
                <div className="p-2 font-bold text-white text-3xl md:text-4xl">
                  Hello, I'm
                </div>
                <div className="mb-2 text-cyan-900 text-xl md:text-2xl font-bold">
                  Dharmendra Gupta
                </div>
                <div className="text-lg md:text-xl text-center text-gray-800 font-medium">
                  MERN Stack Developer | React Native | AI Integration | FastAPI
                </div>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Link
                    to="/Project"
                    className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all hover:scale-105"
                  >
                    View Projects
                  </Link>
                  <Link
                    to="/Skills"
                    className="px-4 py-2 border-2 border-blue-700 text-blue-900 rounded-full text-sm font-semibold hover:bg-blue-700 hover:text-white transition-all hover:scale-105"
                  >
                    My Skills
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-blue-400/40 blur-2xl animate-pulse-glow" />
                <img
                  className="relative w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-white shadow-2xl animate-float"
                  src="/dharmendra2.jpeg"
                  alt="Dharmendra Gupta"
                />
              </motion.div>
            </div>

            <AnimatedSection className="w-full max-w-4xl">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-blue-100">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1">
                  Featured Project
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  EMS — AI-Powered Event Management System
                </h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  AI-driven platform with voice search, camera scanning, semantic vector search,
                  chatbot assistance, and FastAPI microservices — Web, Android & iOS.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {homeSkillHighlights.slice(0, 8).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-amber-100 text-gray-800 rounded-full text-xs font-medium hover:bg-amber-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/Project"
                    className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all hover:scale-105"
                  >
                    All Projects
                  </Link>
                  <a
                    href="https://github.com/dharmusisri245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border-2 border-gray-800 text-gray-800 rounded-full text-sm font-semibold hover:bg-gray-800 hover:text-white transition-all hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="w-full max-w-4xl">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  Core Skills
                </h3>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skillCategories.slice(0, 4).map((category) => (
                    <StaggerItem
                      key={category.title}
                      className="rounded-2xl bg-gradient-to-br from-blue-50 to-amber-50 p-4 border border-blue-100 hover:shadow-md transition-shadow"
                    >
                      <p className="font-bold text-blue-700 mb-2">{category.title}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.slice(0, 6).map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-1 bg-white rounded-full text-gray-700 border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <div className="text-center mt-4">
                  <Link
                    to="/Skills"
                    className="text-blue-600 font-semibold hover:underline text-sm"
                  >
                    View all skills →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Home;
