const options = [
  {
    optionType: "A",
    text: "a person with two small children who wants a few hours a week of unskilled work in the early mornings",
  },
  {
    optionType: "B",
    text: "a person with no experience or qualifications who is looking for a short-term full-time job, Monday to Friday",
  },
  {
    optionType: "C",
    text: "a lively student with no experience, who cannot work on weekdays",
  },
  {
    optionType: "D",
    text: "a person with more than 20 years’ experience in catering who would like to run a business",
  },
  {
    optionType: "E",
    text: "a catering college graduate who is now looking for his first full-time job",
  },
  {
    optionType: "F",
    text: "a person with many years’ experiences working in hotels who is now looking for well-paid part time employment in a hotel",
  },
  {
    optionType: "G",
    text: "a building that has changed its function several times",
  },
  {
    optionType: "H",
    text: "furniture of the same kind that was used when the building was new",
  },
  { optionType: "I", text: "being open for tours on certain days of the week" },
  { optionType: "J", text: "the museum having just reopened" },
];

const CardQuestions = () => {
  return (
    <div className="my-12">
      <div className="flex flex-col gap-y-6">
        <h1 className="text-2xl font-bold ">
          Part 2 <span>Questions 7-14</span>
        </h1>
        <p>
          Read the texts <span className="font-bold">7-14</span> and the
          statements <span className="font-bold"> A-J</span>.
        </p>
        <p>
          Decide which text matches with the situation described in the
          statements.
        </p>
        <p>
          Each statement can be used <span className="font-bold">ONCE</span>{" "}
          only.{" "}
        </p>
        <p>
          There are <span className="font-bold">TWO</span> extra statements
          which you do not need to use.
        </p>
      </div>
    </div>
  );
};

export default CardQuestions;
