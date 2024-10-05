import React from "react";
import AudioPlay from "./AudioPlay";
import MCQ from "./MCQ";

const ExtractQuestions = () => {
  return (
    <div className="mt-12">
      <AudioPlay />

      <div className="flex flex-col gap-y-5 my-12">
        <h1 className=" text-2xl font-bold">
          PART 5 <span>Questions 24-29</span>
        </h1>
        <h2 className="text-md font-[15px] text-[#212529]">
          You will hear three extracts.
        </h2>

        <p className="text-md font-[15px] text-[#212529]">
          Choose the correct answe{" "}
          <span className="font-bold"> A, B or C </span>for each question
          <span className="font-bold"> 24-29</span>.
        </p>

        <p className="text-md font-[15px] text-[#212529]">
          There are <span className="font-bold"> FOUR EXTRA </span>
          extra options which you do not need to use
        </p>
      </div>

      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-xl font-bold">Extract One</h1>
          <MCQ
            questionNumber="24. The second speaker says that she believes that"
            choiceA="her children enjoy listening to her read aloud."
            choiceB="she shares a reading habit with other parents."
            choiceC="parents should read aloud to children."
          />
          <MCQ
            questionNumber="25. What do both speakers talk about?"
            choiceA="Their children’s reactions when they read aloud to them."
            choiceB="Their selfish motives for reading aloud to their children."
            choiceC="Their dramatic approach to reading aloud to their children."
          />
        </div>

        <div className="flex flex-col gap-y-6">
          <h1 className="text-xl font-bold">Extract Two</h1>
          <MCQ
            questionNumber="25. The second speaker says that she believes that"
            choiceA="her children enjoy listening to her read aloud."
            choiceB="she shares a reading habit with other parents."
            choiceC="parents should read aloud to children."
          />
          <MCQ
            questionNumber="27. The second speaker says that she believes that"
            choiceA="her children enjoy listening to her read aloud."
            choiceB="she shares a reading habit with other parents."
            choiceC="parents should read aloud to children."
          />
        </div>

        <div className="flex flex-col gap-y-6">
          <h1 className="text-xl font-bold">Extract Three</h1>
          <MCQ
            questionNumber="28. The second speaker says that she believes that"
            choiceA="her children enjoy listening to her read aloud."
            choiceB="she shares a reading habit with other parents."
            choiceC="parents should read aloud to children."
          />
          <MCQ
            questionNumber="29. The second speaker says that she believes that"
            choiceA="her children enjoy listening to her read aloud."
            choiceB="she shares a reading habit with other parents."
            choiceC="parents should read aloud to children."
          />
        </div>
      </div>
    </div>
  );
};

export default ExtractQuestions;
