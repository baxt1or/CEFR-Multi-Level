import React from "react";
import MCQ from "./MCQ";
import Header from "./Header";
import AudioPlay from "./AudioPlay";

const MCQuestions = () => {
  return (
    <div>
      <AudioPlay />

      <Header />
      <div className="grid grid-cols-1 gap-y-6 mt-8">
        <MCQ
          questionNumber="Question 1"
          choiceA="That’s too bad."
          choiceB="No, I’m not."
          choiceC="I think it is."
        />

        <MCQ
          questionNumber="Question 2"
          choiceA="Actually, I think it’s Tammy’s"
          choiceB="Don’t forget to take your belongings."
          choiceC="We don’t have any more of those bags."
        />

        <MCQ
          questionNumber="Question 3"
          choiceA="That’s too bad."
          choiceB="No, I’m not."
          choiceC="I think it is."
        />

        <MCQ
          questionNumber="Question 4"
          choiceA="That’s too bad."
          choiceB="No, I’m not."
          choiceC="I think it is."
        />

        <MCQ
          questionNumber="Question 5"
          choiceA="That’s too bad."
          choiceB="No, I’m not."
          choiceC="I think it is."
        />

        <MCQ
          questionNumber="Question 6"
          choiceA="That’s too bad."
          choiceB="No, I’m not."
          choiceC="I think it is."
        />

        <MCQ
          questionNumber="Question 7"
          choiceA="That’s too bad."
          choiceB="No, I’m not."
          choiceC="I think it is."
        />

        <MCQ
          questionNumber="Question 8"
          choiceA="That’s too bad."
          choiceB="No, I’m not."
          choiceC="I think it is."
        />
      </div>
    </div>
  );
};

export default MCQuestions;
