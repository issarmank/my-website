'use client';

import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, } from "react-icons/fa6";
import { SiBento } from "react-icons/si"; // placeholder for other icons
  
  export default function Hero() {
    return (
      <section className="min-h-screen flex items-start justify-center bg-black text-white px-10 mt-60">
        <div className="homepage-content">
          <h1 className="text-5xl font-bold mb-4">Issar Manknojiya</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6 mt-6">
            Computer Science @ Western University. Building at the intersection of product development and AI.
          </p>
  
          <div className="flex justify-start flex-wrap gap-6 text-xl mt-2">
            <a
              href="https://github.com/issarmank"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black hover:bg-gray-800 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/issar7/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black hover:bg-gray-800 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/IssarManknojiya"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black hover:bg-gray-800 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="mailto:issar2005@gmail.com"
              className="rounded-md border border-black hover:bg-gray-800 transition"
            >
              <FaEnvelope />
            </a>
            <button
              className="rounded-md border border-black hover:bg-gray-800 transition"
              onClick={() => alert("Other icon")}
            >
              <SiBento />
            </button>
          </div>
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mt-6">
                Check out my gallery
            </p>
          </div>
        </div>
      </section>
    );
  }
  
