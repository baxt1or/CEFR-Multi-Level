import { Choice } from "../listening/Choice";
import MCQ from "../listening/MCQ";
import { MatchinParagraph } from "./MatchinParagraph";

const businessEtiquetteTexts = [
  {
    order: "I",
    text: "Much of today's business is conducted across international borders, and while the majority of the global business community might share the use of English as a common language, the nuances and expectations of business communication might differ greatly from culture to culture. A lack of understanding of the cultural norms and practices of our business acquaintances can result in unfair judgements, misunderstandings and breakdowns in communication. Here are three basic areas of differences in the business etiquette around the world that could help stand you in good stead when you next find yourself working with someone from a different culture.",
  },
  {
    order: "II",
    text: "When discussing this topic in a training course, a German trainee and a British trainee got into a hot debate about whether it was appropriate for someone with a doctorate to use the corresponding title on their business card. The British trainee maintained that anyone who wasn't a medical doctor expecting to be addressed as 'Dr' was disgustingly pompous and full of themselves. The German trainee, however, argued that the hard work and years of education put into earning that PhD should give them full rights to expect to be addressed as 'Dr'.",
  },
  {
    order: "III",
    text: "This stark difference in opinion over something that could be conceived as minor and thus easily overlooked goes to show that we often attach meaning to even the most mundane practices. When things that we are used to are done differently, it could spark the strongest reactions in us. While many Continental Europeans and Latin Americans prefer to be addressed with a title, for example Mr. or Ms. and their surname when meeting someone in a business context for the first time, Americans, and increasingly the British, now tend to prefer using their first names. The best thing to do is to listen and observe how your conversation partner addresses you and, if you are still unsure, do not be afraid to ask them how they would like to be addressed.",
  },
  {
    order: "IV",
    text: "A famous Russian proverb states that 'a smile without reason is a sign of idiocy' and a so-called 'smile of respect' is seen as insincere and often regarded with suspicion in Russia. Yet in countries like the United States, Australia and Britain, smiling is often interpreted as a sign of openness, friendship and respect, and is frequently used to break the ice.",
  },
  {
    order: "V",
    text: "In a piece of research done on smiles across cultures, the researchers found that smiling individuals were considered more intelligent than non-smiling people in countries such as Germany, Switzerland, China and Malaysia. However, in countries like Russia, Japan, South Korea and Iran, pictures of smiling faces were rated as less intelligent than the non-smiling ones. Meanwhile, in countries like India, Argentina and the Maldives, smiling was associated with dishonesty.",
  },
  {
    order: "VI",
    text: "An American or British person might be looking their client in the eye to show that they are paying full attention to what is being said, but if that client is from Japan or Korea, they might find the direct eye contact awkward or even disrespectful. In parts of South America and Africa, prolonged eye contact could also be seen as challenging authority. In the Middle East, eye contact across genders is considered inappropriate, although eye contact within a gender could signify honesty and truthfulness.",
  },
  {
    order: "VII",
    text: "Having an increased awareness of the possible differences in expectations and behavior can help us avoid cases of miscommunication, but it is vital that we also remember that cultural stereotypes can be detrimental to building good business relationships. Although national cultures could play a part in shaping the way we behave and think, we are also largely influenced by the region we come from, the communities we associate with, our age and gender, our corporate culture and our individual experiences of the world. The knowledge of the potential differences should therefore be something we keep at the back of our minds, rather than something that we use to pigeonhole the individuals of an entire nation.",
  },
];

const questionsAndAnswers = [
  {
    question:
      "21. When doing business internationally, there is a possibility that we might misinterpret what each other is saying even though we are speaking the same language.",
    options: ["True", "False", "No Information"],
    answer: "A) True",
  },
  {
    question:
      "22. To the German trainee, having a PhD is a very rare accomplishment.",
    options: ["True", "False", "No Information"],
    answer: "C) No Information",
  },
  {
    question:
      "23. Sometimes, the smallest things can trigger a huge emotional response in us, especially when they are things we are not used to.",
    options: ["True", "False", "No Information"],
    answer: "A) True",
  },
  {
    question:
      "24. In the research done on the perceptions of smiles, people from different countries were asked to rate photos of smiling faces and non-smiling ones.",
    options: ["True", "False", "No Information"],
    answer: "A) True",
  },
  {
    question:
      "25. Making eye contact can be interpreted in different ways in different cultures but is almost always a positive thing.",
    options: ["True", "False", "No Information"],
    answer: "B) False",
  },
];

const questions = [
  {
    question:
      "26. There might be a misunderstanding if an American smiles at a Russian business associate because the Russian might think that the American is ...",
    options: [
      "being fake",
      "challenge their authority",
      "trying to break the ice",
      "disrespectful",
    ],
  },
  {
    question:
      "27. The Japanese, South Koreans and Iranians might interpret a smiling face as being …",
    options: ["friendlier", "less open", "not as intelligent", "dishonest"],
  },
  {
    question:
      "28. Americans and British people sometimes use eye contact to show that they ...",
    options: [
      "like the speaker",
      "are really listening to what is being said",
      "are honest and truthful",
      "are attending to every need of the speaker",
    ],
  },
  {
    question: "29. The last paragraph warns the reader not to ...",
    options: [
      "engage in international business",
      "let national cultures shape the way we behave and think",
      "let miscommunication damage our business relationships",
      "overgeneralize using our knowledge of cultural stereotypes",
    ],
  },
];

const TrueFalseQuestions = () => {
  return (
    <div className="my-12">
      <h1 className="text-center text-2xl font-bold my-4">Part 4</h1>
      <h1 className="text-start text-3xl font-bold my-6 pl-3">
        Cultural behavior in business
      </h1>

      <div className="flex flex-col gap-y-6">
        {businessEtiquetteTexts.map((item) => (
          <MatchinParagraph paragraph={item.text} key={item.order} />
        ))}
      </div>

      <div className="flex flex-col gap-y-5 mt-8 px-4">
        <h1 className=" text-md font-bold">
          For questions 21-25, decide if the following statements agree with the
          information given in the text.
        </h1>

        <p className="text-md font-bold text-[#212529] ">
          Mark your answers on the answer sheet.
        </p>
      </div>

      <div className="flex flex-col gap-y-6 px-4 my-12">
        {questionsAndAnswers.map((item) => (
          <div className="flex flex-col gap-y-4">
            <h1 className="text-md font-medium">
              <span className="font-bold">{item.question.slice(0, 3)}</span>
              {item.question.slice(3)}
            </h1>
            <div className="flex flex-col gap-y-4 pl-4">
              <Choice choice={item.options[0]} choiceType="A" />
              <Choice choice={item.options[1]} choiceType="B" />
              <Choice choice={item.options[2]} choiceType="C" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-y-5 mt-8 px-4">
        <h1 className=" text-md font-bold">
          For questions 26-29, choose the correct answer A, B, C, or D.
        </h1>

        <p className="text-md font-bold text-[#212529] ">
          Mark your answers on the answer sheet.
        </p>
      </div>

      <div className="flex flex-col gap-y-6 px-4 my-12">
        {questions.map((item) => (
          <div className="flex flex-col gap-y-4">
            <h1 className="text-md font-medium">
              <span className="font-bold">{item.question.slice(0, 3)}</span>
              {item.question.slice(3)}
            </h1>
            <div className="flex flex-col gap-y-4 pl-4">
              <Choice choice={item.options[0]} choiceType="A" />
              <Choice choice={item.options[1]} choiceType="B" />
              <Choice choice={item.options[2]} choiceType="C" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrueFalseQuestions;
