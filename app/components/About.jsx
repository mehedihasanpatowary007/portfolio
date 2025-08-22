"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Skill logos
const skills = [
  { name: "HTML", logo: "https://i.ibb.co/fMyFC46/html.png" },
  { name: "CSS", logo: "https://i.ibb.co/MhT6tdM/CSS3-logo-svg.png" },
  {
    name: "TailwindCSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  },
  {
    name: "Redux",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
  },
  {
    name: "Firebase",
    logo: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
  },
  {
    name: "Node Js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png",
  },
  {
    name: "Express Js",
    logo: "https://www.manektech.com/storage/developer/1646733543.webp",
  },
  {
    name: "MongoDB",
    logo: "https://images.seeklogo.com/logo-png/48/2/mongodb-logo-png_seeklogo-481256.png",
  },
  {
    name: "Git",
    logo: "https://www.svgrepo.com/show/303548/git-icon-logo.svg",
  },
  {
    name: "Github",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "Vercel",
    logo: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
  },
  {
    name: "Vs Code",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png",
  },
];

export default function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-[#1D3557] to-[#1a2a40]"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
      >
        About Me
      </motion.h2>

      {/* About Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-200 max-w-3xl mx-auto mb-12 text-center text-lg md:text-xl leading-relaxed"
      >
        I’m a passionate frontend developer with experience in building modern,
        responsive web applications. I love turning designs into interactive and
        user-friendly websites.
      </motion.p>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </div>

            {/* Tooltip */}
            {hovered === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-10 bg-[#4CAF50] text-white text-xs md:text-sm px-2 py-1 rounded-md shadow-lg text-center"
              >
                {skill.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
