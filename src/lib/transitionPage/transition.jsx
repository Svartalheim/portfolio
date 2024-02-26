"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Transition() {
  const pathname = usePathname();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    setIsAnimatingOut(false);
    const intervalId = setInterval(() => setIsAnimatingOut(true), 750);
    return () => {
      clearInterval(intervalId);
    };
  }, [pathname]);

  const dropIn = {
    hidden: {
      y: "100vh",
    },
    visible: {
      x: "0",
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      y: "-100vh",
      transition: { duration: 0.3 },
    },
  };
  const blurIn = {
    initial: {
      y: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: "-150vh",
      transition: { duration: 0.7, delay: 0.3 },
      opacity: 0,
    },
  };
  return (
    <div className="page-switch">
      <AnimatePresence>
        {!isAnimatingOut && (
          <motion.div
            variants={blurIn}
            initial={"initial"}
            animate={"visible"}
            exit={"exit"}
            className="layer-2"
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isAnimatingOut && (
          <>
            <motion.div
              variants={dropIn}
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
              className="layer-1"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
