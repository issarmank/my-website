"use client";
import React from 'react';
import Link from 'next/link';
import { League_Spartan } from "next/font/google";
import { useTheme } from 'next-themes';

const league_spartan = League_Spartan({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="ml-8 px-4 py-2 text-gray-100 hover:scale-125 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-gray-100 text-[#121456] dark:bg-[#121456] dark:text-gray-100">
      <div className="container mx-auto px-60">
        <div className="flex justify-between items-center h-20">
          {/* Navigation Links */}
          <div className="flex space-x-12 mx-auto w-fit items-center">
            <Link href="/" className="text-[#121456] hover:scale-110 transition-colors dark:text-gray-100">Home</Link>
            <Link href="/about" className="text-[#121456] hover:scale-110 ransition-colors dark:text-gray-100">About</Link>
            <Link href="/interests" className="text-[#121456] hover:scale-110 transition-colors dark:text-gray-100">Interests</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;