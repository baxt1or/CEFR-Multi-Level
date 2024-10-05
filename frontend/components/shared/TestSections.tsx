import Link from "next/link";
import React from "react";

export type TestSections = {
  id: string;
  name: string;
};

type Props = {
  tests: TestSections[];
  testType: string;
  testSection: string;
};
export const TestSections = ({ tests, testType, testSection }: Props) => {
  return (
    <div className="max-w-5xl mx-auto h-full p-6 pl-8">
      <div className="grid grid-cols-2 gap-4">
        {tests.map((test) => (
          <Link
            href={`/${testType}/sections/${testSection}/${test.id}`}
            className="flex items-center gap-2 border border-gray-200 p-4 hover:shadow-sm text-center uppercase"
          >
            {test.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
