"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import * as React from "react";
import useSound from "use-sound";
import { AnimatedText } from "@/components/animated-text";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const CommunitySlide = ({ ref }: React.ComponentProps<"section">) => {
  const contentRef = React.useRef(null);
  const contentIsInView = useInView(contentRef, {
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

  const [play] = useSound("/sounds/bite.mp3", { volume: 0.5 });

  return (
    <section
      id="community-section"
      className="relative p-8 md:p-16 h-[100dvh]"
      ref={slideRef}
    >
      <AnimatePresence>
        <motion.div key="sp-1">
          <AnimatedText
            el="p"
            className="text-2xl font-bold selection:bg-background"
            text="SHARING"
            once
          />
          <AnimatedText
            el="h1"
            className="text-6xl font-bold selection:bg-background"
            text="KNOWLEDGE"
          />
        </motion.div>

        <motion.div
          ref={contentRef}
          key="sp-2"
          className="mt-8 md:mt-16 space-y-6"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, duration: 1.5 },
            },
          }}
          animate={contentIsInView ? "visible" : "hidden"}
        >
          <div className="space-y-2">
            <p className="md:text-xl">🎤 SPEAKER - AI & DEV WORKSHOPS</p>
            <div className="flex gap-2 flex-wrap">
              <motion.a
                className={buttonVariants({ variant: "outline", size: "sm" })}
                href="https://youtu.be/i2tdG57SZv4"
                target="_blank"
                rel="noreferrer"
                onClick={() => play()}
                whileTap={{ scale: 0.9 }}
              >
                Intro to Vercel AI SDK
              </motion.a>
              <motion.a
                className={buttonVariants({ variant: "outline", size: "sm" })}
                href="https://youtu.be/14PdsS60mz4"
                target="_blank"
                rel="noreferrer"
                onClick={() => play()}
                whileTap={{ scale: 0.9 }}
              >
                Background Jobs for AI
              </motion.a>
              <motion.a
                className={buttonVariants({ variant: "outline", size: "sm" })}
                href="https://youtu.be/vZlWvpoq1Hw"
                target="_blank"
                rel="noreferrer"
                onClick={() => play()}
                whileTap={{ scale: 0.9 }}
              >
                Deep Research Agent
              </motion.a>
            </div>
          </div>

          <div className="space-y-2">
            <p className="md:text-xl">🎯 HACKATHON ORGANIZER</p>
            <div className="flex gap-2 flex-wrap">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <motion.a
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                    href="https://www.colombiatechfest.ai-hackathon.co/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => play()}
                    whileTap={{ scale: 0.9 }}
                  >
                    Colombia Tech Fest
                  </motion.a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Partners</h4>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="secondary">Firecrawl</Badge>
                      <Badge variant="secondary">Supabase</Badge>
                      <Badge variant="secondary">Vercel</Badge>
                      <Badge variant="secondary">ElevenLabs</Badge>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <motion.a
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                    href="https://www.peru.ai-hackathon.co/"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => play()}
                    whileTap={{ scale: 0.9 }}
                  >
                    Peru AI Hackathon
                  </motion.a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Partners</h4>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="secondary">Firecrawl</Badge>
                      <Badge variant="secondary">Supabase</Badge>
                      <Badge variant="secondary">Vercel</Badge>
                      <Badge variant="secondary">ElevenLabs</Badge>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          <p className="md:text-xl">👨‍🏫 HACKATHON MENTOR & JUDGE</p>
          <p className="md:text-xl">📺 TECH INTERVIEWS IN LATAM</p>
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
          <p className="md:text-xl">PASSIONATE ABOUT COMMUNITY & OPEN SOURCE</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

CommunitySlide.displayName = "CommunitySlide";
