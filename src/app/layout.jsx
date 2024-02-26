import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/navigation/navigation";
import Transition from "@/lib/transitionPage/transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Svartalheim",
  description: "ReactJS/NextJS web developer // fresh graduate node.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " section-wrapper"}>
        <Transition />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
