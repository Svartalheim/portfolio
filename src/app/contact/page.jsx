"use client";
import Component from "@/lib/tes/tes";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Contact() {
  const [show, setShow] = useState(true);
  // useEffect(() => {
  //   setInterval(() => {
  //     setShow(!show);
  //   }, 5000);
  // }, [show]);
  return (
    <div>
      <AnimatePresence mode="wait">{show ? <Component key="dialog" /> : null}</AnimatePresence>
    </div>
  );
}
