"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Inter, Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const detail_work = {
  bigbuilder: {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: [
      "https://img.freepik.com/premium-vector/victory-business-achievement-triumph-award-winning-accomplishment-leadership-success-determination-career-success-concept-cheerful-businessman-winner-raising-flag-winning-trophy_212586-2040.jpg?w=996",
      "https://img.freepik.com/premium-vector/victory-business-achievement-triumph-award-winning-accomplishment-leadership-success-determination-career-success-concept-cheerful-businessman-winner-raising-flag-winning-trophy_212586-2040.jpg?w=996",
    ],
  },
};

export default function Work() {
  const [modalOpen, setModalOpen] = useState(false);

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
      gsap.to(".work", { duration: 0, y: 50, filter: "blur(15px)" });
      gsap.to(".work", { duration: 1, delay: 0.8, filter: "blur(0px)", y: 0 });
    },
    { scope: workRef, dependencies: [] }
  );
  useGSAP(
    () => {
      if (modalOpen) {
        gsap.to(".work", { filter: "blur(5px)", pointerEvents: "none" });
      } else {
        gsap.to(".work", { filter: "blur(0px)", pointerEvents: "auto" });
      }
    },
    { scope: workRef, dependencies: [modalOpen] }
  );

  return (
    <>
      <div ref={workRef} className="w-full">
        <div className="work">
          <div className="work-profile" onClick={() => setModalOpen(false)}>
            <h1 className={"home-name " + montserrat.className}>Work</h1>
            <div className={"home-desc " + inter.className}>
              <p>
                This is a showcase of my best work in a variety of fields
                including website development and application bot.
              </p>
              <p>
                The world of digital website development is constantly evolving.
                I’m still learning and gaining new skills every day.
              </p>
            </div>
          </div>
          <div className="work-menu">
            {work_experience.map((item, index) => (
              <WorkItems
                item={item}
                key={index}
                onClick={() => setModalOpen(true)}
              />
            ))}
          </div>
        </div>
      </div>
      <DetailExperience
        onClickBack={() => setModalOpen(false)}
        modalOpen={modalOpen}
      />
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
      if (modalOpen) {
        gsap.to(".wrapper", { yPercent: -100, y: 4 });
      } else {
        gsap.to(".wrapper", { yPercent: 100 });
      }
      if (modalOpen) {
        gsap.to(".work-detail-dim", {
          pointerEvents: "auto",
          backdropFilter: "blur(7px)",
          backgroundColor: "rgba(209, 213, 219, 0.25)",
        });
      } else {
        gsap.to(".work-detail-dim", {
          backgroundColor: "rgba(209, 213, 219, 0)",
          pointerEvents: "none",
          backdropFilter: "blur(0px)",
        });
      }
    },
    { scope: detailExperienceRef, dependencies: [modalOpen] }
  );

  return (
    <div ref={detailExperienceRef}>
      <div
        className={"work-detail-dim"}
        onClick={() => {
          onClickBack(modalOpen);
        }}
      >
        <div
          className="work-detail"
          onClick={() => {
            onClickBack(modalOpen);
          }}
        >
          <div className="wrapper">
            <div className={"desc " + inter.className}>
              <p className={montserrat.className}>Description</p>
              {detail_work["bigbuilder"].desc}
            </div>
            <div className={"desc " + inter.className}>
              <p className={montserrat.className}>Preview</p>
              <div className="flex flex-col gap-4">
                {detail_work["bigbuilder"].image.map((item, index) => (
                  <div key={index}>
                    <Image
                      src={item}
                      width={600}
                      height={338}
                      style={{ maxHeight: "338px" }}
                      alt="prop image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
