import { AnimatedSection } from "./AnimatedSection";

const ProjectCard = ({ project, index = 0 }) => (
  <AnimatedSection delay={index * 0.08} className="w-full">
    <article className="group rounded-3xl border border-blue-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            {project.title}
          </h2>
          {project.period && (
            <span className="text-xs md:text-sm bg-white/20 text-white px-3 py-1 rounded-full">
              {project.period}
            </span>
          )}
        </div>
        {project.featured && (
          <span className="inline-block mt-2 text-xs font-semibold uppercase tracking-wider bg-amber-300 text-amber-900 px-2 py-0.5 rounded">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col gap-5">
        <p className="text-gray-700 leading-relaxed">{project.description}</p>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 rounded-2xl bg-amber-50 border border-amber-200 p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-medium border border-amber-200 group-hover:border-blue-200 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 rounded-2xl bg-blue-50 border border-blue-100 p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm text-gray-700 flex gap-2 before:content-['▸'] before:text-blue-500 before:font-bold"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            View on GitHub
          </a>
        )}
      </div>
    </article>
  </AnimatedSection>
);

export default ProjectCard;
