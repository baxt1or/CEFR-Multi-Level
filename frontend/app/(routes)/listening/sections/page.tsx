import Banner from "@/components/shared/Banner";
import { PartSectionComponent } from "@/components/shared/PartSectionComponent";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const sections = [
  {
    href: "mcq",
    label: "Multiple choice (Part 1)",
  },
  {
    href: "gap-filling",
    label: "Gap Filling",
  },
  {
    href: "speaker-matching",
    label: "Matching Speakers",
  },
  {
    href: "map",
    label: "Map",
  },
  {
    href: "extract",
    label: "Extract Questions",
  },
  {
    href: "lecture",
    label: "Gap Filling (Lecture)",
  },
];

const ListeningTestSection = () => {
  return <PartSectionComponent sections={sections} testType="listening" />;
};

export default ListeningTestSection;
