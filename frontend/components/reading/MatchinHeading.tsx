import React from "react";
import { HeadingTable } from "./HeadingTable";
import { Selector } from "../listening/Selector";
import { MatchinParagraph } from "./MatchinParagraph";

const answers = [
  {
    answerNumber: "15",
    answer: "Paragraph I",
  },
  {
    answerNumber: "16",
    answer: "Paragraph II",
  },
  {
    answerNumber: "17",
    answer: "Paragraph III",
  },
  {
    answerNumber: "18",
    answer: "Paragraph IV",
  },
  {
    answerNumber: "19",
    answer: "Paragraph V",
  },
  {
    answerNumber: "20",
    answer: "Paragraph VI",
  },
];

const paragraphs = [
  {
    order: "I",
    text: "In 2017, Carlos Ferrando, a Spanish engineer-turned-entrepreneur, saw a piece of art in a museum that profoundly affected him. ‘What Lies Under’, a photographic composition by Indonesian digital artist Ferdi Rizkiyanto, shows a child crouching by the edge of the ocean and ‘lifting up’ a wave, to reveal a cluster of assorted plastic waste, from polyethylene bags to water bottles. The artwork, designed to raise public awareness, left Ferrando angry – and fuelled with entrepreneurial ideas.",
  },
  {
    order: "II",
    text: "Ferrando runs a Spanish-based design company, Closca, that produces an ingenious foldable bicycle helmet. But he has now also designed a stylish glass water bottle with a stretchy silicone strap and magnetic closure mechanism that means it can be attached to almost anything, from a bike to a bag to a pushchair handle. The product comes with an app that tells people where they can fill their bottles with water for free.",
  },
  {
    order: "III",
    text: "The intention is to persuade people to stop buying water in plastic bottles, thus saving consumers money and reducing the plastic waste piling up in our oceans. ‘Bottled water is now a $100 billion business, and 81 per cent of the bottles are not recycled. It’s a complete waste – water is only 1.5 per cent of the price of the bottle!’ Ferrando cries. Indeed, environmentalists estimate that by 2050 there will be more plastic in our oceans than fish and that’s mainly down to such bottles. ‘We are trying to create a sense that being environmentally sophisticated is a status symbol,’ he adds. ‘We want people to clip their bottles onto what they are wearing, to show that they are recycling – and to look cool.’",
  },
  {
    order: "IV",
    text: "Ferrando’s story is fascinating because it seems like an indicator of something unexpected. Three decades ago, conspicuous consumption – the purchase of luxuries, such as handbags, shoes, cars, etc. on a lavish scale – heightened people’s social status. Indeed, the closing decades of the 20th century were a time when it seemed that anything could be turned into a commodity. Hence the fact that water became a consumer item, sold in plastic bottles, instead of just emerging, for free, from a tap.",
  },
  {
    order: "V",
    text: "Today, though, conspicuous extravagance no longer seems desirable among consumers. Now, recycling is fashionable – as is cycling rather than driving. Plastic water bottles have become so common that they do not command status; instead, what many millennials – young people born in the late 20th century – prefer to post on social media are ‘real’ (refillable) bottles or even the once widespread Thermos bottles. Some teenagers currently think that these stainless-steel vacuum-insulated water bottles that are coming back onto the market are ultra ‘cool’; never mind the fact that they feel oddly out-of-date to anyone over the age of 40 or that teenagers in the 1970s would have avoided ever being seen with one.",
  },
  {
    order: "VI",
    text: "It is uncertain whether Closca will succeed in its goal. Although its foldable bike helmet is available in some outlets in New York, including the Museum of Modern Art, it can be very hard for any design entrepreneur to really take off in the global mass market, though not as hard as it might have been in the past. If an entrepreneur had wanted to fund a smart invention a few decades ago, he or she would have had to either raise a bank loan, borrow money from a family member or use a credit card. Things have moved on slightly since then.",
  },
];

const MatchinHeading = () => {
  return (
    <div className="my-16">
      <div className="flex flex-col gap-y-5 mt-8">
        <h1 className=" text-2xl font-bold">
          PART 3 <span>Questions 15-20</span>
        </h1>

        <h1>
          Read the text and choose the correct heading for each paragraph from
          the list of headings below.
        </h1>

        <div className="flex gap-2 items-center">
          <h2 className="text-md font-[15px] text-[#212529]">
            There are more headings than paragraphs, so you will not use all of
            them.
          </h2>

          <p className="text-md font-[15px] text-[#212529]">
            You cannot use any heading more than once
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <HeadingTable />
      </div>

      <div className="flex flex-col gap-y-4">
        {answers.map((item) => (
          <div className="flex items-center gap-2">
            <p className="font-bold">{item.answerNumber}.</p>
            <p>{item.answer}</p>
            <Selector />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-y-8 my-12">
        <h1 className="text-2xl font-bold text-center">
          Plastic is no longer fantastic
        </h1>

        {paragraphs.map((item) => (
          <MatchinParagraph
            paragraph={item.text}
            paragraphNumber={item.order}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchinHeading;
