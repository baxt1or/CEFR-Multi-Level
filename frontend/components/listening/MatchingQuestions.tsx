import React from "react";
import AudioPlay from "./AudioPlay";
import { Selector } from "./Selector";

const choices = [
  {
    choiceType: "A",
    choice: "Why people go on excursion.",
  },
  {
    choiceType: "B",
    choice: "Why he or she avoids museum.",
  },
  {
    choiceType: "C",
    choice: "The most famous museum in the world.",
  },
  {
    choiceType: "D",
    choice: " Idea for an online museum.",
  },
  {
    choiceType: "E",
    choice: "School Museum.",
  },
  {
    choiceType: "F",
    choice: "Recent excursion.",
  },
];

const speakers = [
  {
    speakerNumber: "15",
    speaker: "Speaker 1",
  },
  {
    speakerNumber: "16",
    speaker: "Speaker 2",
  },
  {
    speakerNumber: "17",
    speaker: "Speaker 3",
  },
  {
    speakerNumber: "18",
    speaker: "Speaker 4",
  },
];

const MatchingQuestions = () => {
  return (
    <div className="mt-12">
      <AudioPlay />

      <div className="flex flex-col gap-y-5 mt-8">
        <h1 className=" text-2xl font-bold">
          PART 3 <span>Questions 15-18</span>
        </h1>
        <h2 className="text-md font-[15px] text-[#212529]">
          You will hear people speaking in different situations.
        </h2>

        <p className="text-md font-[15px] text-[#212529]">
          Match each speaker <span className="font-bold">15-18</span> to the
          place where the speaker is <span className="font-bold">A-F</span>.
        </p>

        <p className="text-md font-[15px] text-[#212529]">
          There are <span className="font-bold">TWO EXTRA</span> places which
          you do not need to use.
        </p>
      </div>

      <div className="flex flex-col gap-y-3 my-12">
        {choices.map((item) => (
          <div className="flex items-center gap-3" key={item.choiceType}>
            <h1 className="font-bold">{item.choiceType}.</h1>
            <p>{item.choice}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-y-4">
        {speakers.map((speaker) => (
          <div className="flex items-center gap-2">
            <p className="font-bold">{speaker.speakerNumber}.</p>
            <Selector />
            <p>{speaker.speaker}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingQuestions;
