import Layout from "../Compnents/Layout";
import React from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "../Compnents/ProjectCard";
import { AnimatedPage, AnimatedSection } from "../Compnents/AnimatedSection";

const Project = () => {
  return (
    <Layout>
      <AnimatedPage className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-10 px-4 md:px-8">
        <AnimatedSection className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            My Projects
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enterprise and full-stack applications including DFCCIL systems, AI-powered EMS,
            and production-grade web & mobile platforms.
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </AnimatedPage>
    </Layout>
  );
};

export default Project;
