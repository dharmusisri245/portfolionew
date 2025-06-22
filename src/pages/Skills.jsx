import Layout from "../Compnents/Layout";
import React from "react";

const skillImages = [
  "/static/html.png",
  "/static/javascript.jpeg",
  "/static/bootstrap.png",
  "/static/css.png",
  "/static/tailwind.jpeg",
  "/static/mongodb.png",
  "/static/react.png",
  "/static/node.png",
  "/static/express.png",
  "/static/typescript.jpeg",
  "/static/git hub.png",
  "/static/vercel.png",
  "/static/aws.png",
  "/static/netlify.png",
  "/static/sql.png",
  "/static/.png",
  // "/static/vercel.png",
  // "/static/vercel.png",
];

const Skills = () => {
  return (
    <Layout>
      <div className="p-5">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-10 md:grid-cols-6 lg:grid-cols-6 gap-10  ">
          {skillImages.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-transform"
            >
              <img
                src={src}
                alt={`skill-${index}`}
                className="w-25 h-20 object-contain md:w-24 sm:w-16 "
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
