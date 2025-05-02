import React from 'react';
import Link from 'next/link';
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100 backdrop-blur-sm">
      <div className="container mx-auto px-12">
        <div className="flex justify-center items-center h-20">
          {/* Navigation Links */}
          <div className="flex space-x-12">
            <Link href="/" className="text-[#121456] hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-[#121456] hover:text-white transition-colors">About</Link>
            <Link href="/interests" className="text-[#121456] hover:text-white transition-colors">Interests</Link>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;