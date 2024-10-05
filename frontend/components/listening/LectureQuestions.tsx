import React from "react";
import AudioPlay from "./AudioPlay";
import { GapQuestion } from "./GapQuestion";
import { InputText } from "./InputType";

const LectureQuestions = () => {
  return (
    <div className="mt-12">
      <AudioPlay />

      <div className="flex flex-col gap-y-5 my-12">
        <h1 className=" text-2xl font-bold">
          PART 6 <span>Questions 30-35</span>
        </h1>
        <h2 className="text-md font-[15px] text-[#212529]">
          You will hear a part of a lecture.
        </h2>

        <p className="text-md font-[15px] text-[#212529]">
          For each question, fill in the missing information in the numbered
          space.
        </p>

        <p className="text-md font-[15px] text-[#212529]">
          Write no more than <span className="font-bold">ONE WORD</span> for
          each answer.
        </p>
      </div>

      <div className="flex flex-col gap-y-6">
        <h1 className="text-2xl font-bold text-center">
          The ancient city of Cuzco
        </h1>
        <div className="text-lg ">
          The words open-air <InputText questionNumber="30" /> are sometimes
          used to describe the city because of its historic buildings. Cuzco was
          originally designed in the shape of a mountain lion. The Incas built
          houses in Cuzco without <InputText questionNumber="31" /> to keep out
          the cold.
        </div>
        <div className="text-lg ">
          Ava says the fierce sun in Cuzco was a problem for some people but not
          for her. Watching the rehearsals, Ava found the{" "}
          <InputText questionNumber="32" /> dancing particularly impressive. Ava
          was surprised by the wide range of <InputText questionNumber="33" />{" "}
          when the main parade began. Ava believes the builders of the walls
          first made <InputText questionNumber="34" /> of certain stones. Ava
          had read there were no <InputText questionNumber="35" /> at the
          ancient Festival of the Sun
        </div>
      </div>
    </div>
  );
};

export default LectureQuestions;
