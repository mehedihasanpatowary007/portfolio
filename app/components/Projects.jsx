"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";

export default function Projects() {
  const projects = [
    {
      name: "TalentHub",
      image: "https://i.ibb.co.com/k688Y24M/image.png",
      description: "Dynamic blog platform with SSR & category filtering",
      tech: ["React", "TailwindCSS", "JWT", "Redux", "MongoDB"],
      live: "https://talenthub-frontend-2.vercel.app",
      source: "https://github.com/mehedihasanpatowary007/telent-hub",
    },
    {
      name: "TalentHub",
      image: "https://i.ibb.co.com/k688Y24M/image.png",
      description: "Dynamic blog platform with SSR & category filtering",
      tech: ["React", "TailwindCSS", "JWT", "Redux", "MongoDB"],
      live: "https://talenthub-frontend-2.vercel.app",
      source: "https://github.com/mehedihasanpatowary007/telent-hub",
    },
    {
      name: "TalentHub",
      image: "https://i.ibb.co.com/k688Y24M/image.png",
      description: "Dynamic blog platform with SSR & category filtering",
      tech: ["React", "TailwindCSS", "JWT", "Redux", "MongoDB"],
      live: "https://talenthub-frontend-2.vercel.app",
      source: "https://github.com/mehedihasanpatowary007/telent-hub",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-[#1D3557] to-[#1a2a40]"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.name + index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.3}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold text-[#00f508] mb-2 bg-black/10 backdrop-blur-md p-2 rounded-full px-5">
                  {project.name}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm text-white hover:scale-110 transition-transform"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-[#4CAF50] text-white rounded-full hover:bg-[#43a047] transition"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition"
                  >
                    Source Code <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
