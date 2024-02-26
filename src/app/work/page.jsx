"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Inter, Montserrat } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });


  // const dropIn = {
  //   hidden: {
  //     y: 50,
  //     opacity: 0,
  //     filter: "blur(15px)",
  //   },
  //   visible: {
  //     filter: "blur(0px)",
  //     x: "0",
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       delay: 1,
  //     },
  //   },
  //   exit: {
  //     x: "-100vw",
  //     transition: { duration: 1 },
  //     opacity: 0,
  //   },
  // };

export default function Work() {
  const [modalOpen, setModalOpen] = useState(false);
  const [slidingText, setSlidingText] = useState(false);

  const work_experience = [
    {
      title: "BigBuilder",
      desc: "by BigBox • Website • 1yr currently",
    },
    {
      title: "BigStyle",
      desc: "by BigBox • Storybook/Components • 6mo currently",
    },
    {
      title: "Bigsocial",
      desc: "by BigBox • Website • 3-4mo",
    },
    {
      title: "LKPP",
      desc: "by BigBox • Website • 1yr currently",
    },
    {
      title: "Yggdrasil",
      desc: "by myself n friends • Bot/Discord • 2yr",
    },
  ];

  const workRef = useRef();
  useGSAP(
    () => {
      console.log("working work");
      // if (modalOpen) {
      gsap.to(".work", { duration: 0, y: 50, filter: "blur(15px)" });
      gsap.to(".work", { duration: 1, delay: 1, filter: "blur(0px)", y: 0 });
    },
    { scope: workRef, dependencies: [] }
  );


  useEffect(() => {
    if (!modalOpen && slidingText) {
      setSlidingText(false);
    }
  }, [modalOpen]);

  return (
    <>
      <div ref={workRef} className="w-full">
        <div className="work">
          <div className="work-profile" onClick={() => setModalOpen(true)}>
            <h1 className={"home-name " + montserrat.className}>Work</h1>
            <div className={"home-desc " + inter.className}>
              <p>
                This is a showcase of my best work in a variety of fields including website development and application bot.
              </p>
              <p>
                The world of digital website development is constantly evolving. I’m still learning and gaining new skills
                every day.
              </p>
            </div>
          </div>
          <div className="work-menu">
            {work_experience.map((item, index) => (
              <WorkItems item={item} key={index} onClick={() => setModalOpen(true)} />
            ))}
          </div>
        </div>
      </div>
      <DetailExperience onClickBack={() => setModalOpen(false)} modalOpen={modalOpen} />
    </>
  );
}

const WorkItems = ({ item, onClick }) => {
  return (
    <div className="work-item" onClick={onClick}>
      <h1>{item.title}</h1>
      <div className={"work-desc " + montserrat.className}>
        <p>- {item.desc}</p>
      </div>
    </div>
  );
};

const DetailExperience = ({ onClickBack, modalOpen }) => {
  const detailExperienceRef = useRef();
  useGSAP(
    () => {
      console.log(modalOpen, "mop");
      if (modalOpen) {
        gsap.to(".box", { xPercent: -100 });
      } else {
        gsap.to(".box", { xPercent: 100 });
      }
      // use selectors...

      // or refs...
      // gsap.to(circle.current, { rotation: "-=360" });
    },
    { scope: detailExperienceRef, dependencies: [modalOpen] }
  ); // <-- scope for selector text

  return (
    <div
      ref={detailExperienceRef}
      className="fixed top-0 left-full bg-black"
      onClick={() => {
        console.log("?");
        onClickBack(modalOpen);
      }}
    >
      {modalOpen}
      <div className="box">AHSIOOOOOOOOOOawoujaoudas</div>
    </div>
  );
};
