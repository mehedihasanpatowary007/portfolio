"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "HTML", logo: "https://i.ibb.co/fMyFC46/html.png" },
  { name: "CSS", logo: "https://i.ibb.co/MhT6tdM/CSS3-logo-svg.png" },
  { name: "TailwindCSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042" },
  { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" },
  { name: "Redux", logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" },
  { name: "Firebase", logo: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" },
  { name: "Node Js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" },
  { name: "Express Js", logo: "https://www.manektech.com/storage/developer/1646733543.webp" },
  { name: "MongoDB", logo: "https://images.seeklogo.com/logo-png/48/2/mongodb-logo-png_seeklogo-481256.png" },
  { name: "Git", logo: "https://www.svgrepo.com/show/303548/git-icon-logo.svg" },
  { name: "Github", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Vercel", logo: "https://www.svgrepo.com/show/327408/logo-vercel.svg" },
  { name: "Vs Code", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png" },
];

export default function About() {
  const [hovered, setHovered] = useState(null);
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(220);

  useEffect(() => {
    function updateRadius() {
      if (containerRef.current) {
        const size = containerRef.current.offsetWidth;
        setRadius(size / 2 - 50); // leave space for icons
      }
    }

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1D3557] to-[#1a2a40] p-4 md:p-6">
      {/* Title */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
      >
        About Me
      </motion.h2>

      {/* Paragraph */}
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

      {/* Circular Skills */}
      <div ref={containerRef} className="relative w-[90vw] max-w-[600px] aspect-square flex items-center justify-center">
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI - Math.PI / 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div

              key={index}
              className="absolute cursor-pointer flex flex-col items-center z-40"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110">
                <img src={skill.logo} alt={skill.name} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              </div>

              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-10 bg-[#4CAF50] text-white text-xs md:text-sm px-2 py-1 rounded-md shadow-lg text-center z-50 whitespace-nowrap"
                >
                  {skill.name}
                </motion.div>
              )}
            </div>
          );
        })}

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full">
            <Image src="https://cdn-icons-png.flaticon.com/512/8386/8386331.png" alt="skills" width={80} height={80} className="md:w-24 md:h-24" />
          </div>
        </div>
      </div>
    </div>
  );
}
