import React from 'react';
import Image from 'next/image';
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Experience = () => {
  const experiences = [
    {
      logo: "/delta-logo.png",
      title: "Software Engineer Intern",
      company: "Delta Air Lines",
      period: "Jan 2025 - Present (Winter 2025 Co-op)",
      description: "description here",
    },
    {
      logo: "/starmass-logo.png",
      title: "Software Engineer Intern",
      company: "Starmass Canada",
      period: "Dec 2024 - Present",
      description: [
        "description here",
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto">
        <h1 className={`${league_spartan.className} font-semi-bold text-5xl mb-6`}>Experience</h1>
        
        <div className="relative">

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-8 transform -translate-x-1/2 mt-1.5">
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-20 h-20 relative bg-white rounded-lg overflow-hidden">
                      {exp.logo && (
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      )}
                    </div>
                    <div>
                      <p className={`${league_spartan.className} text-gray-400`}>{exp.period}</p>
                      <h3 className={`${league_spartan.className} text-2xl font-semibold text-blue-400`}>{exp.title}</h3>
                      <p className={`${league_spartan.className} text-xl text-white`}>{exp.company}</p>
                    </div>
                  </div>

                  <div className="mt-4 bg-[#1a1a1a] rounded-lg p-6">
                    {Array.isArray(exp.description) ? (
                      exp.description.map((desc, i) => (
                        <p key={i} className={`${league_spartan.className} text-gray-300 mb-3`}>• {desc}</p>
                      ))
                    ) : (
                      <p className={`${league_spartan.className} text-gray-300`}>• {exp.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;