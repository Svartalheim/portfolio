"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Navbar() {
  const social_media = [
    {
      name: "home",
      url: "/",
      icon: "home.svg",
      desc: "",
    },
    {
      name: "discord",
      url: "https://discord.com/users/572704110999240704",
      icon: "discord.svg",
      desc: "",
    },
    {
      name: "github",
      url: "https://github.com/aqsyalraihanjamil",
      icon: "github.svg",
      desc: "",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/jamilss1437",
      icon: "linkedin.svg",
      desc: "",
    },
  ];
  return (
    <>
      <div className="navigation">
        {social_media.map((item) => (
          <NavbarIcon key={item.url} item={item} />
        ))}
        <div className="nav-border"></div>
        <div className={"nav-year " + montserrat.className}>
          <p className="flex">
            {new Date().getUTCFullYear()}
            <span className="xs:pl-1 md:pl-4"> ©</span>
          </p>
        </div>
      </div>
    </>
  );
}

const NavbarIcon = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const openInNewTab = (url) => {
    if (item.name === "home") return;
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const pathname = usePathname();
  useEffect(() => {
    setIsHovered(false);
  }, [pathname]);
  return (
    <>
      {item.name !== "home" ? (
        <button
          key={item.url}
          className={"nav-item" + (isHovered ? " nav-item-hover" : "")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => openInNewTab(item.url)}
        >
          <Image src={"/icon/" + item.icon} width={20} height={20} alt={item.name} />
          <h1 className={"" + montserrat.className}>{item.desc}</h1>
        </button>
      ) : (
        <>
          {pathname === "/" ? (
            <></>
          ) : (
            <Link
              href={item.url}
              className={"nav-item" + (isHovered ? " nav-item-hover" : "")}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image src={"/icon/" + item.icon} width={20} height={20} alt={item.name} />
            </Link>
          )}
        </>
      )}
    </>
  );
};
