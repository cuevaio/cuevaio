"use client";

import * as React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

import { AnimatedText } from "@/components/animated-text";
import { buttonVariants } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

import { LinkedInIcon } from "@/components/icons/ui/linkedin";
import { XIcon } from "@/components/icons/ui/x";
import { GithubIcon } from "@/components/icons/ui/github";

// @ts-ignore
import useSound from "use-sound";

import { cn } from "@/lib/utils";

export const ContactSlide = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((_, ref) => {
  const bottomMessageRef = React.useRef(null);
  const bottomMessageIsInView = useInView(bottomMessageRef, {
    amount: 0.5,
    once: true,
  });

  const socialsContainerRef = React.useRef(null);
  const socialsContainerIsInView = useInView(socialsContainerRef, {
    amount: 0.5,
    once: true,
  });

  const [play] = useSound("/sounds/bite.mp3", { volume: 0.5 });

  // @ts-ignore
  const slideIsInView = useInView(ref, {
    amount: 0.5,
  });

  return (
    <section
      id="socials-section"
      className="relative p-8 md:p-16 h-[100dvh]"
      ref={ref}
    >
      <AnimatePresence>
        <motion.div key="sp-1 ">
          <AnimatedText
            el="p"
            className="text-2xl font-bold selection:bg-background"
            text="LET'S"
            once
          />
          <AnimatedText
            el="h1"
            className="text-6xl font-bold selection:bg-background"
            text="GET IN TOUCH"
          />
        </motion.div>

        <motion.div
          ref={socialsContainerRef}
          key="sp-2"
          className="mt-8 md:mt-16 flex gap-8"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, duration: 1.5 },
            },
          }}
          animate={socialsContainerIsInView ? "visible" : "hidden"}
        >
          <motion.a
            className={cn(buttonVariants({ variant: "default" }), "h-16 w-16")}
            onClick={async () => {
              play();
              await new Promise((r) => setTimeout(r, 100));
            }}
            whileTap={{ scale: 0.9 }}
            href="mailto:hi@cueva.io"
            target="_blank"
            rel="noreferrer"
          >
            <MailIcon className="w-6 h-6" />
          </motion.a>

          <motion.a
            className={cn(buttonVariants({ variant: "default" }), "h-16 w-16")}
            onClick={async () => {
              play();
              await new Promise((r) => setTimeout(r, 100));
            }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/cuevaio/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="w-6 h-6" />
          </motion.a>

          <motion.a
            className={cn(buttonVariants({ variant: "default" }), "h-16 w-16")}
            onClick={async () => {
              play();
              await new Promise((r) => setTimeout(r, 100));
            }}
            whileTap={{ scale: 0.9 }}
            href="https://www.x.com/cuevaio"
            target="_blank"
            rel="noreferrer"
          >
            <XIcon className="w-6 h-6" />
          </motion.a>

          <motion.a
            className={cn(buttonVariants({ variant: "default" }), "h-16 w-16")}
            onClick={async () => {
              play();
              await new Promise((r) => setTimeout(r, 100));
            }}
            whileTap={{ scale: 0.9 }}
            href="https://www.github.com/cuevaio"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="w-6 h-6" />
          </motion.a>
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
          <p className="md:text-xl">I&apos;M ALWAYS OPEN TO NEW PROJECTS</p>
          <p className="md:text-xl">COME SAY HI!</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
});

ContactSlide.displayName = "ProjectsSlide";
