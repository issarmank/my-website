import Image from "next/image";
import Main from "../components/Main";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-7">
        <Main />
        <Experience />
      </div>
    </main>
  );
}
