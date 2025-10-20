"use client";

import { CircleIcon } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import * as React from "react";
import useSound from "use-sound";
import { AnimatedText } from "@/components/animated-text";
import { buttonVariants } from "@/components/ui/button";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

type ProjectStatus = "live" | "coming-soon" | "deprecated";
type Project = {
  domain: string;
  title: string;
  description: string;
  status: ProjectStatus;
};

export const ProjectsSlide = ({ ref }: React.ComponentProps<"section">) => {
  const PROJECTS = React.useMemo(
    () =>
      [
        {
          domain: "lupa.build",
          title: "Lupa",
          description: "Knowledge Platform for AI Agents",
          status: "live" as ProjectStatus,
        },
        {
          domain: "text0.dev",
          title: "text0",
          description: "AI Writing Assistant - 1st Place Next.js Hackathon",
          status: "live",
        },
        {
          domain: "githunter.dev",
          title: "GitHunter",
          description: "Tech talent search engine",
          status: "live",
        },
        {
          domain: "opendeepresearch.io",
          title: "Open Deep Research",
          description: "Open source ChatGPT Deep Research",
          status: "live",
        },
        {
          domain: "aifindr.com",
          title: "AIFindr",
          description: "B2B platform to create AI Agents",
          status: "live",
        },
        {
          domain: "instagram.com/reel/DMyiBC3M2DP",
          title: "Compy AI",
          description: "Shopping AI Assistant",
          status: "live",
        },
      ] satisfies Project[],
    [],
  );

  const bottomMessageRef = React.useRef(null);
  const bottomMessageIsInView = useInView(bottomMessageRef, {
    amount: 0.5,
    once: true,
  });

  const projectsContainerRef = React.useRef(null);
  const projectsContainerIsInView = useInView(projectsContainerRef, {
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
      id="projects-section"
      className="relative p-8 md:p-16 h-[100dvh]"
      ref={slideRef}
    >
      <AnimatePresence>
        <motion.div key="sp-1 ">
          <AnimatedText
            el="p"
            className="text-2xl font-bold selection:bg-background"
            text="I BUILD"
            once
          />
          <AnimatedText
            el="h1"
            className="text-6xl font-bold selection:bg-background"
            text="COOL AI PRODUCTS"
          />
        </motion.div>

        <motion.div
          ref={projectsContainerRef}
          key="sp-2"
          className="mt-8 md:mt-16 grid grid-cols-2 gap-4"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, duration: 1.5 },
            },
          }}
          animate={projectsContainerIsInView ? "visible" : "hidden"}
        >
          {PROJECTS.map((project) => (
            <div key={project.domain} className="">
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.a
                    className={buttonVariants({ variant: "outline" })}
                    href={`https://${project.domain}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => play()}
                    whileTap={{ scale: 0.9 }}
                  >
                    {project.title}
                  </motion.a>
                </HoverCardTrigger>
                <HoverCardContent
                  side="right"
                  align="start"
                  className="bg-muted z-40"
                >
                  <div>
                    <p className="text-md">{project.domain}</p>
                    <p className="text-sm my-2">{project.description}</p>
                    <div className="flex items-center space-x-2">
                      <CircleIcon
                        className={cn("w-4 h-4", {
                          "fill-green-500 stroke-green-500":
                            project.status === "live",
                          "fill-blue-500 stroke-blue-500":
                            project.status === "coming-soon",
                          "fill-gray-500 stroke-gray-500":
                            project.status === "deprecated",
                        })}
                      />
                      <span className="text-xs font-bold">
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
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
          <p className="md:text-xl">MOST OF THEM ARE PROUDLY OPEN SOURCE</p>
          <p className="md:text-xl">FEEL FREE TO CHECK THEM OUT</p>
          <p className="md:text-xl">AND CONTRIBUTE</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

ProjectsSlide.displayName = "ProjectsSlide";
