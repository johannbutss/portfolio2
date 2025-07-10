import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import VideoCarousel from "./VideoCarousel";
import { rightImg, watchImg } from "../assets";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="common-padding bg-zinc h-full w-screen overflow-hidden"
    >
      <div className="screen-max-width">
  <div className="mb-12 w-full items-end justify-between md:flex">
    <h1 id="title" className="section-heading">
      Découvrez mes projets phares.
    </h1>
  </div>

  <VideoCarousel />
</div>
    </section>
  );
};

export default Highlights;
