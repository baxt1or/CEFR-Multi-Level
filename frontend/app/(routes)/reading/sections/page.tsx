import Banner from "@/components/shared/Banner";
import { PartSectionComponent } from "@/components/shared/PartSectionComponent";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const sections = [
  {
    href: "gap-filling",
    label: "Gap Filling",
  },
  {
    href: "card-matching",
    label: "Card Matching",
  },
  {
    href: "heading",
    label: "Matching Heading",
  },
  {
    href: "true-false",
    label: "True, False or Not Given",
  },
  {
    href: "mcq",
    label: "Multiple Choice",
  },
];

const ReadingTestSections = () => {
  return <PartSectionComponent testType="reading" sections={sections} />;
};

export default ReadingTestSections;
