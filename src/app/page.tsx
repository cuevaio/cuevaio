"use client";
export const runtime = "edge";

import { useInView } from "framer-motion";
import * as React from "react";
import { CommunitySlide } from "@/components/slides/community";
import { ContactSlide } from "@/components/slides/contact";
import { CrafterStationSlide } from "@/components/slides/crafter-station";
import { HeroSlide } from "@/components/slides/hero";
import { ProjectsSlide } from "@/components/slides/projects";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function Home() {
  const HeroSlideRef = React.useRef(null);
  const CrafterStationSlideRef = React.useRef(null);
  const ProjectsSlideRef = React.useRef(null);
  const CommunitySlideRef = React.useRef(null);
  const ContactSlideRef = React.useRef(null);

  const crafterStationSlideIsInView = useInView(CrafterStationSlideRef, {
    amount: 0.5,
  });

  const _projectSlideIsInView = useInView(ProjectsSlideRef, {
    amount: 0.5,
  });

  const communitySlideIsInView = useInView(CommunitySlideRef, {
    amount: 0.5,
  });

  return (
    <ScrollArea className="w-[100dvw] h-[100dvh]">
      <div id="salut">
        <div
          className={cn(
            "bg-muted-foreground absolute top-0 bottom-0 right-0 left-0 -z-50 transition-colors duration-500",
            {
              "bg-primary":
                crafterStationSlideIsInView || communitySlideIsInView,
            },
          )}
        ></div>
        <div
          className={cn(
            "bg-muted-foreground absolute h-4 top-0 right-0 left-0 z-40 transition-colors duration-500",
            {
              "bg-primary":
                crafterStationSlideIsInView || communitySlideIsInView,
            },
          )}
        ></div>
        <div
          className={cn(
            "bg-muted-foreground absolute h-4 bottom-0 right-0 left-0 z-40 transition-colors duration-500",
            {
              "bg-primary":
                crafterStationSlideIsInView || communitySlideIsInView,
            },
          )}
        ></div>

        <div
          className={cn(
            "bg-background absolute top-4 bottom-4 right-4 left-4 -z-40 transition-colors duration-500 rounded-lg",
            {
              "bg-primary":
                crafterStationSlideIsInView || communitySlideIsInView,
            },
          )}
        ></div>

        <HeroSlide ref={HeroSlideRef} />
        <CrafterStationSlide ref={CrafterStationSlideRef} />
        <ProjectsSlide ref={ProjectsSlideRef} />
        <CommunitySlide ref={CommunitySlideRef} />
        <ContactSlide ref={ContactSlideRef} />
      </div>
    </ScrollArea>
  );
}
