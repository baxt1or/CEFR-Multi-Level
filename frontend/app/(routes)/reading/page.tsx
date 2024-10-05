import Banner from "@/components/shared/Banner";
import { CardComponent } from "@/components/shared/CardComponent";
import React from "react";

const tests = [
  {
    id: "1",
    testName: "Reading",
    testNumber: "Test 1",
    duration: "60",
  },
  {
    id: "2",
    testName: "Reading",
    testNumber: "Test 2",
    duration: "60",
  },
  {
    id: "3",
    testName: "Reading",
    testNumber: "Test 3",
    duration: "60",
  },
];

const ReadingPage = () => {
  return (
    <div>
      <Banner label="Reading" />
      <div className="grid grid-cols-2 max-w-5xl mx-auto gap-4 mt-6 ">
        {tests.map((test) => (
          <CardComponent
            testType="reading"
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

export default ReadingPage;
