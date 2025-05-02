import Image from "next/image";
import Main from "./components/Main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <div className="container mx-auto px-60 py-7">
        <Main />
      </div>
    </main>
  );
}
