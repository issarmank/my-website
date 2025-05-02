"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { once } from "events";
import { FaGithub, FaEnvelope, FaLinkedin, FaFilePdf } from "react-icons/fa6";
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  weight: ["400", "700"], // Choose font weights
  subsets: ["latin"], // Choose the font subsets
});

const Main = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-7 lg:text-6xl text-4xl">
          <span className={`${league_spartan.className} text-transparent font-semi-bold text-6xl bg-clip-text text-white`}>
            <TypeAnimation
              sequence={[
                "Hi, I'm Issar Manknojiya", 
                1000,
              ]}
              speed={20} 
              wrapper="span"
              repeat={0} 
            />
          </span>
        </h1>
        <p className={`${league_spartan.className} text-[#ADB7BE] mb-6 text-lg lg:text-xl`}>
          Engineer based in Austin, Texas focusing towards Product Engineering and AI, while studying Software Engineering at Western University.
        </p>
        <div className='mt-2'>
          <button className='bg-[#121456] hover:bg-slate-500 text-white px-5 py-2 rounded-full mr-6'>
            <FaFilePdf className="w-5 h-8" />
          </button>
          <button className='bg-[#121456] hover:bg-slate-500 text-white px-5 py-2 rounded-full mr-6'>
            <FaGithub className="w-5 h-8" />
          </button>
          <button className='bg-[#121456] hover:bg-slate-500 text-white px-5 py-2 rounded-full mr-6'>
            <FaLinkedin className="w-5 h-8" />
          </button>
          <button className='bg-[#121456] hover:bg-slate-500 text-white px-5 py-2 rounded-full mr-6'>
            <FaEnvelope className="w-5 h-8" />
          </button>
        </div>
      </div>
      <div className="hidden lg:block col-span-5 place-self-end mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative shadow-xl shadow-gray-400">
          <Image
            src="/assets/profilepic.jpg"
            alt="Profile Picture"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Crops the image to fit
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;