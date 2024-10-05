import { GapQuestion } from "./GapQuestion";
import AudioPlay from "./AudioPlay";

const GapFilling = () => {
  return (
    <div className="mt-12">
      <AudioPlay />
      <div className="flex flex-col gap-y-5 mt-8">
        <h1 className=" text-2xl font-bold">
          PART 2 <span>Questions 9-14</span>
        </h1>
        <h2 className="text-md font-[15px] text-[#212529]">
          You will hear someone giving a talk.
        </h2>

        <p className="text-md font-[15px] text-[#212529]">
          For each question, fill in the missing information in the numbered
          space.
        </p>

        <p className="text-md font-[15px] text-[#212529]">
          Write <span className="font-bold">ONE WORD and / or A NUMBER</span>.
          for each answer.
        </p>
      </div>

      <div className="flex flex-col gap-y-4 mt-8">
        <h1 className="text-3xl font-bold text-black text-center">
          School trip to farm
        </h1>

        <div className="flex flex-col gap-y-6">
          <GapQuestion
            questionNumber="9"
            question="Meeting place: 8 a.m. next to the "
          />
          <GapQuestion question="Need to bring: a" questionNumber="10" />
          <GapQuestion
            questionNumber="11"
            question="Morning activity: feeding the "
          />
          <GapQuestion questionNumber="12" question="Afternoon activity:" />
          <GapQuestion questionNumber="13" question="Return to school at" />
          <GapQuestion
            questionNumber="14"
            question="For more information: www."
          />
        </div>
      </div>
    </div>
  );
};

export default GapFilling;
