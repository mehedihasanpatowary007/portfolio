"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (err) {
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#1D3557] to-[#1a2a40]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-white"
        >
          <p className="text-gray-200">
            I’m always open to discuss your project or to join your team.
          </p>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#4CAF50]" />
            <span>mehedihasanpatowary7@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#4CAF50]" />
            <span>+880 1872 993738</span>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="w-5 h-5 text-[#4CAF50]" />
            <a
              href="https://www.linkedin.com/in/mdmehedihasanpatowary-a446b526b/"
              target="_blank"
              className="hover:underline"
            >
              linkedin.com/in/mdmehedihasanpatowary-a446b526b
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Github className="w-5 h-5 text-[#4CAF50]" />
            <a
              href="https://github.com/mehedihasanpatowary007"
              target="_blank"
              className="hover:underline"
            >
              github.com/mehedihasanpatowary007
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-[#4CAF50] text-white rounded-2xl hover:bg-[#43a047] transition cursor-pointer"
          >
            Send Message
          </button>
          {status && <p className="text-gray-200 mt-2">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
