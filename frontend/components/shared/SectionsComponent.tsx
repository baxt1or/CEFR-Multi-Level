import Banner from "@/components/shared/Banner";
import { CardComponent } from "@/components/shared/CardComponent";
import React from "react";

type Props = {
  tests: Test[];
  testType: string;
};

export type Test = {
  id: string;
  testName: string;
  testNumber: string;
  duration: string;
};

export const SectionComponent = ({ tests, testType }: Props) => {
  return (
    <div>
      <Banner label={testType.toUpperCase()} />

      <div className="grid grid-cols-2 max-w-5xl mx-auto gap-4 mt-6 ">
        {tests.map((test) => (
          <CardComponent
            testType={testType}
            id={test.id}
            key={test.testNumber}
            testName={test.testName}
            testNumber={test.testNumber}
            duration={test.duration}
          />
        ))}
      </div>
    </div>
  );
};
