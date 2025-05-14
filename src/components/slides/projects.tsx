"use client";

import * as React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

import { AnimatedText } from "@/components/animated-text";
import { buttonVariants } from "@/components/ui/button";
import { CircleIcon } from "lucide-react";

// @ts-ignore
import useSound from "use-sound";

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

export const ProjectsSlide = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((_, ref) => {
  const PROJECTS = React.useMemo(
    () =>
      [
        {
          domain: "text0.dev",
          title: "text0",
          description: "Absurldy smart and personal autocomplete",
          status: "live",
        },
        {
          domain: "githunter.dev",
          title: "GitHunter",
          description: "Tech talent search engine",
          status: "live",
        },
        {
          domain: "compy.cueva.io",
          title: "Compy AI",
          description: "Shopping AI Assitant",
          status: "live",
        },
        {
          domain: "enroll.utec.fyi",
          title: "USCHEDULE",
          description: "PLAN YOUR SEMESTER IN SECONDS",
          status: "live",
        },
        {
          domain: "trygradual.com",
          title: "Gradual",
          description: "AI powered learning platform",
          status: "coming-soon",
        },
        {
          domain: "classrooms.cueva.io",
          title: "UTEC Classrooms",
          description: "Find free classrooms in UTEC",
          status: "deprecated",
        },
      ] satisfies Project[],
    []
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

  // @ts-ignore
  const slideIsInView = useInView(ref, {
    amount: 0.5,
  });

  const [play] = useSound("/sounds/bite.mp3", { volume: 0.5 });

  return (
    <section
      id="projects-section"
      className="relative p-8 md:p-16 h-[100dvh]"
      ref={ref}
    >
      <AnimatePresence>
        <motion.div key="sp-1 ">
          <AnimatedText
            el="p"
            className="text-2xl font-bold selection:bg-background"
            text="I WORK ON"
            once
          />
          <AnimatedText
            el="h1"
            className="text-6xl font-bold selection:bg-background"
            text="COOL PROJECTS"
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
                          "fill-red-500 stroke-red-500":
                            project.status === "deprecated",
                          "fill-green-500 stroke-green-500":
                            project.status === "live",
                          "fill-blue-500 stroke-blue-500":
                            project.status === "coming-soon",
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
});

ProjectsSlide.displayName = "ProjectsSlide";
