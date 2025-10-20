"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import * as React from "react";
import useSound from "use-sound";
import { AnimatedText } from "@/components/animated-text";
import { buttonVariants } from "@/components/ui/button";

export const HeroSlide = ({ ref }: React.ComponentProps<"section">) => {
  const GREETINGS = React.useMemo(() => ["SALUT", "HOLA", "HI"], []);
  const HERO = React.useMemo(
    () => ["JE SUIS ANTHONY", "SOY ANTHONY", "I'M ANTHONY"],
    [],
  );

  const [index, setIndex] = React.useState<number>(0);
  const [play] = useSound("/sounds/bite.mp3", { volume: 0.5 });

  const slideRef = React.useRef<HTMLElement>(null);
  const slideIsInView = useInView(slideRef, {
    amount: 0.5,
  });

  return (
    <section
      id="hero-section"
      className="relative p-8 md:p-16 h-[100dvh]"
      ref={slideRef}
    >
      <AnimatePresence mode="wait">
        <motion.div key={index}>
          <AnimatedText
            el="p"
            className="text-2xl font-bold"
            text={GREETINGS[index]}
            once
          />
          <AnimatedText
            el="h1"
            className="text-6xl font-bold"
            text={HERO[index]}
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="mt-4"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { delay: 1 },
        }}
      >
        <motion.button
          className={buttonVariants({ variant: "outline" })}
          onClick={async () => {
            play();
            await new Promise((r) => setTimeout(r, 100));
            setIndex((cv) => {
              if (cv === GREETINGS.length - 1) {
                return 0;
              }
              return cv + 1;
            });
          }}
          whileTap={{ scale: 0.9 }}
        >
          CLICK ME!
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 left-8 md:bottom-16 md:right-16 md:left-16 space-y-4"
        initial={{
          opacity: 0,
        }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: { duration: 1, delay: 1 },
          },
        }}
        animate={slideIsInView ? "visible" : "hidden"}
      >
        <p className="md:text-xl">PRODUCT ENGINEER</p>
        <p className="md:text-xl">CO-FOUNDER AT CRAFTER STATION</p>
        <p className="md:text-xl">BUILDING PRODUCTS PEOPLE LOVE</p>
      </motion.div>
    </section>
  );
};

HeroSlide.displayName = "HeroSlide";
