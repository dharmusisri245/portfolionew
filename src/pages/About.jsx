import React from "react";
import Layout from "../Compnents/Layout";

const About = () => {
  return (
    <Layout>
      {/* Background image wrapper */}
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('../../public/static/aboutus.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full">
            <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-6">
              About
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate MERN Stack Developer with expertise in MongoDB,
              Express.js, React, and Node.js. I build fast, scalable web
              applications and love turning ideas into real-world digital
              solutions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
