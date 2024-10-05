import { SectionComponent, Test } from "@/components/shared/SectionsComponent";
import React from "react";

const tests: Test[] = [
  {
    id: "1",
    testName: "Listening",
    testNumber: "Test 1",
    duration: "60",
  },
  {
    id: "2",
    testName: "Listening",
    testNumber: "Test 2",
    duration: "60",
  },
  {
    id: "3",
    testName: "Listening",
    testNumber: "Test 3",
    duration: "60",
  },
];

const ListeningPage = () => {
  return <SectionComponent tests={tests} testType="listening" />;
};

export default ListeningPage;
