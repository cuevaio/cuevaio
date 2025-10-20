"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import * as React from "react";

import { AnimatedText } from "@/components/animated-text";

export const CrafterStationSlide = ({
  ref,
}: React.ComponentProps<"section">) => {
  const achievementsRef = React.useRef(null);
  const achievementsIsInView = useInView(achievementsRef, {
    amount: 0.5,
    once: true,
  });

  const bottomMessageRef = React.useRef(null);
  const bottomMessageIsInView = useInView(bottomMessageRef, {
    amount: 0.5,
    once: true,
  });

  const slideRef = React.useRef<HTMLElement>(null);
  const slideIsInView = useInView(slideRef, {
    amount: 0.5,
  });

  return (
    <section
      id="crafter-station-section"
      className="relative p-8 md:p-16 h-[100dvh]"
      ref={slideRef}
    >
      <AnimatePresence>
        <motion.div key="sp-1">
          <AnimatedText
            el="p"
            className="text-2xl font-bold selection:bg-background"
            text="CO-FOUNDED"
            once
          />
          <AnimatedText
            el="h1"
            className="text-6xl font-bold selection:bg-background"
            text="CRAFTER STATION"
          />
        </motion.div>

        <motion.div
          ref={achievementsRef}
          key="sp-2"
          className="mt-8 md:mt-16 space-y-4"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, duration: 1.5 },
            },
          }}
          animate={achievementsIsInView ? "visible" : "hidden"}
        >
          <p className="md:text-xl">
            🏆 1ST PLACE - 2025 GLOBAL NEXT.JS HACKATHON
          </p>
          <p className="md:text-xl">⭐ 600+ GITHUB STARS ACROSS PROJECTS</p>
          <p className="md:text-xl">
            🌎 BUILDING WITH THE MOST CRACKED ENGINEERS IN LATAM
          </p>
        </motion.div>

        <motion.div
          ref={bottomMessageRef}
          key="sp-3"
          className="absolute bottom-8 right-8 left-8 md:bottom-16 md:right-16 md:left-16 space-y-4 selection:bg-background"
          initial={{
            opacity: 0,
          }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: { delay: 1, duration: 1 },
            },
          }}
          animate={
            slideIsInView
              ? bottomMessageIsInView
                ? "visible"
                : "hidden"
              : "hidden"
          }
        >
          <p className="md:text-xl">BUILDING INNOVATIVE SOFTWARE THAT MAKES</p>
          <p className="md:text-xl">
            ADVANCED TECHNOLOGY ACCESSIBLE TO EVERYONE
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

CrafterStationSlide.displayName = "CrafterStationSlide";
