import CardQuestions from "@/components/reading/CardQuestions";
import Banner from "@/components/shared/Banner";
import { TestSections } from "@/components/shared/TestSections";

export const tests = [
  {
    id: "1",
    name: "Test 1",
  },
  {
    id: "2",
    name: "Test 2",
  },
  {
    id: "3",
    name: "Test 3",
  },
  {
    id: "4",
    name: "Test 4",
  },
];

const ReadingCardMatchingSectionPage = () => {
  return (
    <TestSections
      tests={tests}
      testSection="card-matching"
      testType="reading"
    />
  );
};

export default ReadingCardMatchingSectionPage;