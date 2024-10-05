type Props = {
  questionNumber: string;
  question?: string;
  end?: string;
};

export const GapQuestion = ({ question, questionNumber, end }: Props) => {
  return (
    <div className="flex items-center gap-4 ">
      <h1 className="text-md">{question}</h1>
      <div className="flex items-center gap-2 font-bold text-md">
        {questionNumber}
        <input type="text" className="rounded-sm bg-gray-100 p-2" />
        <p className="font-medium">{end}</p>
      </div>
    </div>
  );
};
