import React from 'react';
import Link from 'next/link';
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-95 backdrop-blur-sm">
      <div className="container mx-auto px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <Link href="/" className={`${league_spartan.className} text-2xl text-white hover:text-blue-400 transition-colors`}>
            Issar Manknojiya
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-12">
            <Link href="#about" className={`${league_spartan.className} text-gray-300 hover:text-white transition-colors`}>
              About Me
            </Link>
            <Link href="#experience" className={`${league_spartan.className} text-gray-300 hover:text-white transition-colors`}>
              Experience
            </Link>
            <Link href="#projects" className={`${league_spartan.className} text-gray-300 hover:text-white transition-colors`}>
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
