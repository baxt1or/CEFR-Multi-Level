import Answers from "@/components/listening/Answers";
import AudioPlay from "@/components/listening/AudioPlay";
import ExtractQuestions from "@/components/listening/ExtractQuestions";
import GapFilling from "@/components/listening/GapFilling";
import Header from "@/components/listening/Header";
import LectureQuestions from "@/components/listening/LectureQuestions";
import MapQuestions from "@/components/listening/MapQuestions";
import MatchingQuestions from "@/components/listening/MatchingQuestions";
import MCQuestions from "@/components/listening/MCQuestions";

const ListeningTestPage = () => {
  return (
    <div className="max-w-5xl mx-auto h-full p-6 pl-8">
      <MCQuestions />

      <GapFilling />

      <MatchingQuestions />
      <MapQuestions />

      <ExtractQuestions />
      <LectureQuestions />

      <div className="my-12 flex flex-col">
        <h1 className="text-2xl font-bold text-center">Answers</h1>
        <div className="flex items-center gap-6 my-12">
          <Answers label="One" />
          <Answers label="Two" />
          <Answers label="Three" />
          <Answers label="Four" />
          <Answers label="Five" />
          <Answers label="Six" />
        </div>
      </div>
    </div>
  );
};

export default ListeningTestPage;
