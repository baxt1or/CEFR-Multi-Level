import React from "react";
import { InputText } from "../listening/InputType";

const GapFillingQuestions = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-5 mt-8">
        <h1 className=" text-2xl font-bold">
          PART 1 <span>Questions 1-6</span>
        </h1>

        <div className="flex gap-2 items-center">
          <h2 className="text-md font-[15px] text-[#212529]">
            Read the text. Fill in each gap with{" "}
            <span className="font-bold">ONE</span> word.
          </h2>

          <p className="text-md font-[15px] text-[#212529]">
            You must use a word which is somewhere in the rest of the text.
          </p>
        </div>
      </div>

      <h1 className="text-center font-bold text-black text-2xl">
        Black Friday in the United States
      </h1>

      <div className="flex flex-col gap-y-6">
        <h1 className="text-2xl font-bold text-center">
          The ancient city of Cuzco
        </h1>
        <div className="text-md">
          Black Friday is the day after Thanksgiving Day and the Friday before
          Cyber Monday in the United States. It is a busy shopping day and is a
          holiday in some states.
        </div>

        <div className="text-md">
          Black Friday is not a federal <InputText questionNumber="1" />, but is
          a public holiday in some states. Many organizations also close for the
          Thanksgiving weekend. Many people have a{" "}
          <InputText questionNumber="2" />
          off work or choose to take a day from their quota of annual leave on
          Black Friday. Some people use this to make trips to see family members
          or friends who live in other areas or to go on vacation. Others use it
          to start shopping for the Christmas season.
        </div>

        <div className="text-md">
          <InputText questionNumber="3" />
          for Christmas presents is also popular on Black Friday. Many stores
          have special offers and lower their prices on some goods, such as
          toys.
        </div>

        <div className="text-md">
          Public transit systems may run on their normal schedule or may have
          changes. Some stores extend their opening hours on Black Friday. There
          can also be congestion on roads to popular shopping destinations.
        </div>

        <div className="text-md">
          Black Friday is one of the busiest shopping days in the USA. There are
          two popular theories as to why the day after Thanksgiving Day is
          called Black Friday. One theory is that the wheels of vehicles in
          heavy traffic on the day after Thanksgiving Day left many black
          markings on the road surface, leading to the term Black Friday.
        </div>
        <div className="text-md">
          The other <InputText questionNumber="4" /> is that the term Black
          Friday comes from an old way of recording business accounts. Losses
          were recorded in red ink and profits in black{" "}
          <InputText questionNumber="5" />. Many businesses, particularly small
          businesses, started making profits prior to Christmas. Many hoped to
          start showing a <InputText questionNumber="6" />, marked in black ink,
          on the day after Thanksgiving Day.
        </div>
      </div>
    </div>
  );
};

export default GapFillingQuestions;
