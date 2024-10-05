import CardQuestions from "@/components/reading/CardQuestions";
import GapFillingQuestions from "@/components/reading/GapFillingQuestions";
import React from "react";

const ReadingGapFillingSectionPage = () => {
  return (
    <div className="max-w-5xl mx-auto h-full p-6 pl-8">
      <GapFillingQuestions />
    </div>
  );
};

export default ReadingGapFillingSectionPage;
