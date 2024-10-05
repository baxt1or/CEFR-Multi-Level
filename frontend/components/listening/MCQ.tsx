import { Choice } from "./Choice";

type Props = {
  questionNumber: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
};

const MCQ = ({ questionNumber, choiceA, choiceB, choiceC }: Props) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-lg font-bold">{questionNumber}</h1>
      <div className="flex flex-col gap-y-4">
        <Choice choice={choiceA} choiceType="A" />
        <Choice choice={choiceB} choiceType="B" />
        <Choice choice={choiceC} choiceType="C" />
      </div>
    </div>
  );
};

export default MCQ;
