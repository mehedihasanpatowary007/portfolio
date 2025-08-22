"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, BookOpen } from "lucide-react";

export default function EducationTreeStatic() {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-to-b from-[#1D3557] to-[#1a2a40]"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
      >
        Education
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white/20"></div>

        {/* Card 1 - Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2 px-6 mb-12 flex flex-col md:flex-row md:ml-auto md:justify-end"
        >
          {/* Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <img
                src="https://media.licdn.com/dms/image/v2/C560BAQFxbb-1UPttuQ/company-logo_200_200/company-logo_200_200/0/1630652411889/cumillapolytechnicinstitute_logo?e=2147483647&v=beta&t=lRA7xaUXer4wL6Bz1OZG01JxCyJOf8sonZjqbnGzRWY"
                alt="University"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-base md:text-xl font-semibold text-[#4CAF50]">
                  Diploma in Computer Technology.
                </h3>
                <p className="text-gray-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#4CAF50]" />
                  Cumilla Polytechnic Institute
                </p>
                <p className="text-gray-300 flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-[#4CAF50]" />
                  Kotbari , Cumilla
                </p>
                <p className="text-gray-400 flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-[#4CAF50]" />
                  2020 - 2024
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full md:w-1/2 px-6 mb-12 flex flex-col md:flex-row md:mr-auto md:justify-start"
        >
          {/* Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <img
                src="https://www.bdtask.com/blog/uploads/user/logo.jpg"
                alt="College"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-base md:text-xl font-semibold text-[#4CAF50]">
                  React Developer(Intern)
                </h3>
                <p className="text-gray-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#4CAF50]" />
                  BdTask Limited
                </p>
                <p className="text-gray-300 flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-[#4CAF50]" />
                  Khilkhet, Dhaka
                </p>
                <p className="text-gray-400 flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-[#4CAF50]" />
                  June 2024 – September 2024
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3 - Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full md:w-1/2 px-6 mb-12 flex flex-col md:flex-row md:ml-auto md:justify-end"
        >
          {/* Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <img
                src="https://i.ibb.co/Lz7H38pV/image.png"
                alt="School"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-base md:text-xl font-semibold text-[#4CAF50]">
                  Secondary School Certificate
                </h3>
                <p className="text-gray-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#4CAF50]" />
                  Baroiara High School
                </p>
                <p className="text-gray-300 flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-[#4CAF50]" />
                  Kachua, Chandpur
                </p>
                <p className="text-gray-400 flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-[#4CAF50]" />
                  2015 - 2020
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
