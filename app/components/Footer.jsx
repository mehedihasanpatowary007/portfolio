"use client";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#1a2a40] to-[#1D3557] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white">
          <img
            className="h-20  bg-white/40 rounded-full  backdrop-blur-md"
            src="https://i.ibb.co.com/TDRzPzPf/image.png"
            alt="Logo"
          />{" "}
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-white">
          <a href="#hero" className="hover:text-[#4CAF50] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#4CAF50] transition">
            About
          </a>
          <a href="#education" className="hover:text-[#4CAF50] transition">
            Education
          </a>
          <a href="#projects" className="hover:text-[#4CAF50] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#4CAF50] transition">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white">
          <a
            href="https://www.facebook.com/mehedi.hasan.patowary07"
            target="_blank"
            className="hover:text-[#4CAF50] transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/mehedihasanpatowary007"
            target="_blank"
            className="hover:text-[#4CAF50] transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mdmehedihasanpatowary-a446b526b/"
            target="_blank"
            className="hover:text-[#4CAF50] transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-6"></div>

      {/* Copyright */}
      <p className="text-center text-gray-300 mt-4 text-sm">
        &copy; {new Date().getFullYear()} Mehedi Hasan. All rights reserved.
      </p>
    </footer>
  );
}
