type Props = {
  questionNumber: string;
  question?: string;
};

export const InputText = ({ question, questionNumber }: Props) => {
  return (
    <div className="inline">
      <span className="text-lg">{question}</span>
      {/* Display the input inline with the text */}
      <span className="font-bold">
        {questionNumber}
        <input
          type="text"
          className="ml-2 w-24 rounded-sm bg-gray-100 p-1 border border-gray-300 inline-block align-middle"
        />
      </span>
    </div>
  );
};
