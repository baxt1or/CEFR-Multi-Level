const choices = [
  {
    questionType: "A",
    choice: "A time when opportunities were limited",
  },
  {
    questionType: "B",
    choice: "The reasons why Fernando’s product is needed",
  },
  {
    questionType: "C",
    choice: "A no-risk solution",
  },
  {
    questionType: "D",
    choice: "Two inventions and some physical details",
  },
  {
    questionType: "E",
    choice: "The contrasting views of different generations",
  },
  {
    questionType: "F",
    choice: "A disturbing experience",
  },
  {
    questionType: "G",
    choice: "The problems with replacing a consumer item",
  },
  {
    questionType: "H",
    choice: "Looking back at why water was bottled",
  },
];

export const HeadingTable = () => {
  return (
    <div className="border border-gray-200 flex flex-col w-[400px] p-4 my-12">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-lg font-bold text-center">List of Headings</h1>
        {choices.map((item) => (
          <div className="flex items-center gap-3" key={item.questionType}>
            <h1 className="font-bold">{item.questionType}.</h1>
            <p className="text-md">{item.choice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
