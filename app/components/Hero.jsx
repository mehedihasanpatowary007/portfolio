"use client";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const career = {
    title: "Career Objective",
    description:
      "Passionate MERN stack developer with expertise in building scalable web applications. Skilled in frontend design and backend architecture. Always eager to learn and explore modern technologies.",
  };

  return (
    <section id="hero" className="relative flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 lg:px-32 py-16 min-h-screen bg-gradient-to-b from-[#1D3557] to-[#1a2a40]">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-lg z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
          Hi, I'm <span className="text-[#4CAF50]">Mehedi Hasan</span>
        </h1>

        {/* Typed Text */}
        <div className="text-lg md:text-2xl text-gray-200 h-[32px] md:h-[40px] mb-6">
          <ReactTyped
            strings={[
              "I'm a MERN Stack developer.",
              "I am frontend developer.",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>

        {/* Career Objective Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
          <h2 className="text-xl font-semibold text-[#4CAF50] mb-2">
            {career.title}
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            {career.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-[#4CAF50]/80 transition"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl bg-[#4CAF50] text-white font-medium hover:bg-[#43a047] transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 md:mt-0"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
            src="/profile.jpg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
