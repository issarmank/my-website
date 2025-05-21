import React from 'react';
import Image from 'next/image';
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const timeline = [
  {
    color: "bg-blue-600",
    title: "Amazon",
    subtitle: "Software Development Engineer",
    period: "2024 - Now",
    description: "working on large scale messaging systems",
  },
  {
    color: "bg-yellow-400",
    title: "California State Polytechnic University, Pomona",
    subtitle: "B.S. Computer Science",
    period: "2020 - 2024",
    description: "got my degree to make my parents proud",
  },
  {
    color: "bg-green-600",
    title: "Amazon",
    subtitle: "Software Development Engineer Intern",
    period: "2023 - 2023",
    description: "worked on amazon fresh grocery experience",
  },
  {
    color: "bg-red-600",
    title: "Solace Notify",
    subtitle: "Founder",
    period: "2019 - 2023",
    description: "built reselling community and developed tools",
  },
];

const About = () => {
  return (
    <section className="min-h-screen bg-transparent py-20 px-40">
      <h1 className="text-2xl font-bold text-[#121456] px-20">Timeline</h1>
      <div className="absolute left-0 translate-x-4 container mx-auto flex flex-col md:flex-row px-40 py-5">
        <div className="md:w-1/4 mb-10 md:mb-0">
        </div>
        <div className="md:w-3/4 relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
          <div className="space-y-12 pl-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute -left-10 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-black ${item.color}`} />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-black font-semibold text-lg mt-10">{item.title}</span>
                    <span className="text-gray-400 text-md">{item.period}</span>
                  </div>
                  <div className="italic text-black mt-1 mb-2 ml-8">{item.subtitle}</div>
                  <div className="text-black text-md mb-2">• {item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;