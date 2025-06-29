import React from 'react';
import Homepage from '../components/homepage';
import Projects from './projects/page';
import './globals.css'; // Import global styles

export default function Home() {
  return (
    <>
      <Homepage />
      <main>
        <Projects />
      </main> 
    </>
  );
}
