import Banner from "@/components/shared/Banner";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type Section = {
  href: string;
  label: string;
};

type Props = {
  testType: string;
  sections: Section[];
};
export const PartSectionComponent = ({ testType, sections }: Props) => {
  return (
    <div>
      <Banner label={testType[0].toUpperCase() + testType.slice(1)} />
      <div className="grid grid-cols-1 gap-4 min-h-full max-w-4xl mx-auto mt-6">
        {sections.map((section) => (
          <Link
            href={`/${testType}/sections/${section.href}`}
            key={section.href}
            className="flex items-center justify-between rounded-3xl border border-gray-200 p-4 text-center uppercase font-medium text-lg"
          >
            {section.label}

            <ChevronRight strokeWidth={0.75} className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </div>
  );
};
