import Image from "next/image";
import About from "../components/About";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <div className="container mx-auto px-12 py-7">
        <Navbar />
        <About />
      </div>
    </main>
  );
}

export default AboutPage;
