"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Component() {
  const app = useRef();
  const circle = useRef();

  useGSAP(
    () => {
      // use selectors...
      gsap.to(".box", { x: 200 });

      // or refs...
      gsap.to(circle.current, { rotation: "-=360" });
    },
    { scope: app }
  ); // <-- scope for selector text

  useGSAP();
  return (
    <>
      <div ref={app} className="App">
        <div className="box gradient-blue">selector</div>
        <div className="circle gradient-green" ref={circle}>
          Ref
        </div>
      </div>
    </>
  );
}
