import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { heroVideo, smallHeroVideo } from "../assets";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) setVideoSrc(smallHeroVideo);
    else setVideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  useGSAP(() => {
    gsap.to("#video-wrapper", { opacity: 1, y: -30, delay: 1.2 });
    gsap.to("#cta", { opacity: 1, y: -20, delay: 1.8 });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black pt-6">
      {/* Vidéo Hero */}
      <div
        id="video-wrapper"
        className="w-full flex justify-center opacity-0 translate-y-10"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          key={videoSrc}
          className="w-[95vw] max-w-[1200px] rounded-3xl shadow-2xl"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* CTA */}
      <div
        id="cta"
        className="flex flex-col items-center gap-2 mt-8 opacity-0 translate-y-10"
      >
        <a
          href="#highlights"
          className="px-7 py-2 bg-blue-600 text-white rounded-full text-lg font-medium transition-all shadow-md hover:bg-blue-700"
          style={{ backgroundColor: "#2563eb", color: "white" }} // for safety
        >
          Voir
        </a>
        <p className="text-white text-sm opacity-80">De 2024 à 2025</p>
      </div>
    </section>
  );
};

export default Hero;
