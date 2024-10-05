import CardQuestions from "@/components/reading/CardQuestions";
import GapFillingQuestions from "@/components/reading/GapFillingQuestions";
import MatchinHeading from "@/components/reading/MatchinHeading";
import LastReadingPart from "@/components/reading/Part6";
import TrueFalseQuestions from "@/components/reading/TrueFalseQuestions";
import React from "react";

const ReadingTestPage = () => {
  return (
    <div className="max-w-5xl mx-auto h-full p-6 pl-8">
      <GapFillingQuestions />

      <CardQuestions />

      <MatchinHeading />

      <TrueFalseQuestions />
      <LastReadingPart />
    </div>
  );
};

export default ReadingTestPage;
