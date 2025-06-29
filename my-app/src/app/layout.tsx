import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); // Load Inter font

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}> {/* Apply Inter font */}
      <body className="bg-black text-white">
        <div className="px-6 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

