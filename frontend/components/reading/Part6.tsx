import { Choice } from "../listening/Choice";
import { GapQuestion } from "../listening/GapQuestion";

const paragraphs = [
  {
    order: 1,
    text: "When you picture mountain climbers scaling Mount Everest, what probably comes to mind are teams of climbers with Sherpa guides leading them to the summit, equipped with oxygen masks, supplies and tents. And in most cases, you'd be right, as 97 per cent of climbers use oxygen to ascend to Everest's summit at 8,850 meters above sea level. The thin air at high altitudes makes most people breathless at 3,500 meters, and the vast majority of climbers use oxygen past 7,000 meters. A typical climbing group will have 8–15 people in it, with an almost equal number of guides, and they'll spend weeks to get to the top after reaching Base Camp.",
  },
  {
    order: 2,
    text: "But ultra-distance and mountain runner Kilian Jornet Burgada ascended the mountain in May 2017 alone, without an oxygen mask or fixed ropes for climbing. Oh, and he did it in 26 hours. With food poisoning. And then, five days later, he did it again, this time in only 17 hours.",
  },
  {
    order: 3,
    text: "Born in 1987, Kilian has been training for Everest his whole life. And that really does mean his whole life, as he grew up 2,000 metres above sea level in the Pyrenees in the ski resort of Lles de Cerdanya in Catalonia, north-eastern Spain. While other children his age were learning to walk, Kilian was on skis. At one and a half years old he did a five-hour hike with his mother, entirely under his own steam. He left his peers even further behind when he climbed his first mountain and competed in his first cross-country ski race at age three. By age seven, he had scaled a 4,000er and, at ten, he did a 42-day crossing of the Pyrenees.",
  },
  {
    order: 4,
    text: "He was 13 when he says he started to take it 'seriously' and trained with the Ski Mountaineering Technical Centre (CTEMC) in Catalonia, entering competitions and working with a coach. At 18, he took over his own ski-mountaineering and trail-running training, with a schedule that only allows a couple of weeks of rest a year. He does as many as 1,140 hours of endurance training a year, plus strength training and technical workouts as well as specific training in the week before a race. For his record-breaking ascent and descent of the Matterhorn, he prepared by climbing the mountain ten times until he knew every detail of it, even including where the sun would be shining at every part of the day.",
  },
  {
    order: 5,
    text: "Sleeping only seven hours a night, Kilian Jornet seems almost superhuman. His resting heartbeat is extremely low at 33 beats per minute, compared with the average man's 60 per minute or an athlete's 40 per minute. He breathes more efficiently than average people too, taking in more oxygen per breath, and he has a much faster recovery time after exercise as his body quickly breaks down lactic acid – the acid in muscles that causes pain after exercise.",
  },
  {
    order: 6,
    text: "All this is thanks to his childhood in the mountains and to genetics, but it is his mental strength that sets him apart. He often sets himself challenges to see how long he can endure difficult conditions in order to truly understand what his body and mind can cope with. For example, he almost gave himself kidney failure after only drinking 3.5 liters of water on a 100km run in temperatures of around 40°C.",
  },
  {
    order: 7,
    text: "It would take a book to list all the races and awards he's won and the mountains he's climbed. And even here, Kilian’s achievements exceed the average person as, somehow, he finds time to record his career on his blog and has written three books, Run or Die, The Invisible Border and Summits of My Life.",
  },
];

const questions = [
  {
    question: "34. The majority of climbers on Everest …",
    options: [
      "need oxygen to finish their ascent",
      "are accompanied",
      "make slow progress to the top",
      "(all of the above)",
    ],
  },
  {
    question: "35. Kilian Jornet is unlike most Everest climbers because…",
    options: [
      "he is a professional climber.",
      "he ascended faster.",
      "he found the climb difficult",
      "(all of the above)",
    ],
  },
];

const LastReadingPart = () => {
  return (
    <div className="my-12">
      <h1 className="text-center text-2xl font-bold my-4">Part 5</h1>
      <h1 className="text-start text-3xl font-bold my-6 pl-3">
        A biography of Kilian Jornet
      </h1>
      <h2 className="text-md font-[15px] text-[#212529] px-3">
        Read the following text for questions{" "}
        <span className="font-bold">30-35</span>.
      </h2>

      <div className="flex flex-col gap-y-5 px-3 my-6">
        {paragraphs.map((item) => (
          <p>{item.text}</p>
        ))}
      </div>

      <div className="flex flex-col gap-y-5 mt-8 px-4">
        <h1 className=" text-md font-bold">
          For questions
          <span className="font-bold"> 30-33</span>, fill in the missing
          information in the numbered spaces.
        </h1>

        <p className="text-md font-medium text-[#212529] ">
          Write no more than
          <span className="font-bold"> ONE WORD and / or A NUMBER </span>
          for each question.
        </p>
      </div>

      <div className="flex flex-col gap-y-6 px-3 my-12">
        <GapQuestion
          questionNumber="30"
          question="30. It’s normal to find it hard to breathe at"
          end="meters above sea level."
        />
        <GapQuestion
          questionNumber="31"
          question="31. Kilian reached the summit of Everest in"
          end="hours on his second attempt."
        />
        <GapQuestion
          questionNumber="32"
          question="32. He was"
          end="years old when he walked a long way without being carried."
        />
        <GapQuestion
          questionNumber="33"
          question="33. At age"
          end=", he became his own trainer."
        />
      </div>

      <div className="flex flex-col gap-y-5 mt-8 px-4">
        <h1 className=" text-md font-bold">
          For questions 34-35, choose the correct answer A, B, C, or D.
        </h1>
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

export default LastReadingPart;
