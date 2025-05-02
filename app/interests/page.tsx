import Image from "next/image";
import Interests from "../components/Interests";
import Navbar from "../components/Navbar";

const InterestsPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-gray-100">
      <div className="container mx-auto px-12 py-7">
        <Navbar />
        <Interests />
      </div>
    </main>
  );
}

export default InterestsPage;