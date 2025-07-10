import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { chipImg, frameImg, frameVideo } from "../assets";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="Chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Motion design en mouvement.
            <br />Réalisé avec précision.
          </h2>

          <p className="hiw-subtitle">
            Cette vidéo illustre le cœur de mon processus créatif : un motion design élégant,
            inspiré du style Apple, entièrement conçu sous After Effects avec une animation soignée.
          </p>
        </div>

        <div className="mb-14 mt-10 md:mt-20">
          <div className="flex-center relative h-full">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="Frame"
                className="relative z-10 bg-transparent"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                loop // 👈 ajout de loop ici
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray mt-3 text-center font-semibold">
            Portfolio Motion Design
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 flex-col justify-center">
            <p className="hiw-text g_fadeIn">
              Réalisée entièrement sous After Effects, cette animation met en lumière mon savoir-faire
              dans l’alliance du mouvement fluide, du design épuré et de la narration moderne pour donner vie aux expériences digitales.
            </p>

            <br />
            <p className="hiw-text g_fadeIn">
              Chaque image est conçue avec soin, alliant technique et créativité : la signature de mon approche graphique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
