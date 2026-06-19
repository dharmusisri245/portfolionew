import Layout from "../Compnents/Layout";
import React from "react";
import { skillCategories } from "../data/portfolioData";
import {
  AnimatedPage,
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "../Compnents/AnimatedSection";

const Skills = () => {
  return (
    <Layout>
      <AnimatedPage className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-2">
              My Skills
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Full-stack development across web and mobile — React Native, MERN stack,
              AI microservices with FastAPI, Whisper, OpenCV, and enterprise integrations.
            </p>
          </AnimatedSection>

          <StaggerContainer className="flex flex-col gap-6">
            {skillCategories.map((category) => (
              <StaggerItem key={category.title}>
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-amber-100 text-gray-800 rounded-full text-sm font-medium border border-amber-200 hover:bg-blue-100 hover:border-blue-300 hover:scale-105 transition-all duration-200"
                        style={{ animationDelay: `${i * 30}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Skills;
