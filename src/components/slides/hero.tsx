"use client";

import * as React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

import { AnimatedText } from "@/components/animated-text";
import { buttonVariants } from "@/components/ui/button";

// @ts-ignore
import useSound from "use-sound";

export const HeroSlide = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((_, ref) => {
  const GREETINGS = React.useMemo(() => ["SALUT", "HOLA", "HI"], []);
  const HERO = React.useMemo(
    () => ["JE SUIS ANTHONY", "SOY ANTHONY", "I'M ANTHONY"],
    []
  );

  const [index, setIndex] = React.useState<number>(0);
  const [play] = useSound("/sounds/bite.mp3", { volume: 0.5 });

  // @ts-ignore
  const slideIsInView = useInView(ref, {
    amount: 0.5,
  });

  return (
    <section
      id="hero-section"
      className="relative p-8 md:p-16 h-[100dvh]"
      ref={ref}
    >
      <AnimatePresence>
        <motion.div key="sp-1">
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

        <motion.div
          key="sp-2"
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
          key="sp-3"
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
          <p className="md:text-xl">
            I&apos;M A SOFTWARE ENGINEER OBSESSED WITH USER EXPERIENCE
          </p>
          <p className="md:text-xl">BUILDING PRODUCTS PEOPLE LOVE</p>
          <p className="md:text-xl">MOSTLY FOR THE WEB</p>
          <p className="md:text-xl">SINCE 2020</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
});

HeroSlide.displayName = "HeroSlide";
