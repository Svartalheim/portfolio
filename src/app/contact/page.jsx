"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import React from "react";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="title">Hello.</h1>
      <div className={"desc " + montserrat.className}>
        <p>
          Need a beautiful, well-structured website that you can own ? Get in
          touch with me.
        </p>
        <p>
          Email:{" "}
          <Link href={"mailto:gboomers313@gmail.com"} className="hyperlink">
            @gboomers313@gmail.com
          </Link>
        </p>
        <p>
          On the internet:{" "}
          <Link
            href={"https://www.linkedin.com/in/jamilss1437"}
            passHref={true}
            className="hyperlink"
          >
            LinkedIn
          </Link>{" "}/{" "}
          <Link
            href={"https://discord.com/users/572704110999240704"}
            passHref={true}
            className="hyperlink"
          >
            Discord
          </Link>{" "}
          (mostly){" "}

        </p>
      </div>
    </div>
  );
}
