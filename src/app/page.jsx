import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="home">
      <div className="home-profile">
        <h1 className={"home-name " + montserrat.className}>Svartalheim / Aqsyal Raihan Jamil</h1>
        <div className={"home-desc " + inter.className}>
          <p>Web Developer based in Indonesia.</p>
          <p>Presently engaged as a front-end web developer operating on a fulltime basis for Indonesian company.</p>
        </div>
      </div>
      <div className="home-menu">
        <Link href={"/work"}>Work</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </main>
  );
}
