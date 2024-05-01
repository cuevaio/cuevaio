"use client";
export const runtime = "edge";

import { useInView } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";

import { HeroSlide } from "@/components/slides/hero";
import { ProjectsSlide } from "@/components/slides/projects";
import { cn } from "@/lib/utils";
import * as React from "react";
import { ContactSlide } from "@/components/slides/contact";

export default function Home() {
  const ViewportRef = React.useRef(null);

  const HeroSlideRef = React.useRef(null);
  const ProjectsSlideRef = React.useRef(null);
  const ContactSlideRef = React.useRef(null);

  const projectSlideIsInView = useInView(ProjectsSlideRef, {
    amount: 0.5,
  });

  return (
    <ScrollArea className="w-[100dvw] h-[100dvh]" viewportRef={ViewportRef}>
      <div id="holi">
        <div
          className={cn(
            "bg-muted-foreground absolute top-0 bottom-0 right-0 left-0 -z-50 transition-colors duration-500",
            { "bg-primary": projectSlideIsInView }
          )}
        ></div>
        <div
          className={cn(
            "bg-muted-foreground absolute h-4 top-0 right-0 left-0 z-40 transition-colors duration-500",
            { "bg-primary": projectSlideIsInView }
          )}
        ></div>
        <div
          className={cn(
            "bg-muted-foreground absolute h-4 bottom-0 right-0 left-0 z-40 transition-colors duration-500",
            { "bg-primary": projectSlideIsInView }
          )}
        ></div>

        <div
          className={cn(
            "bg-background absolute top-4 bottom-4 right-4 left-4 -z-40 transition-colors duration-500 rounded-lg",
            { "bg-primary": projectSlideIsInView }
          )}
        ></div>

        <HeroSlide ref={HeroSlideRef} />
        <ProjectsSlide ref={ProjectsSlideRef} />
        <ContactSlide ref={ContactSlideRef} />
      </div>
    </ScrollArea>
  );
}
