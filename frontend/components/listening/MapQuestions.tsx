import AudioPlay from "./AudioPlay";
import Image from "next/image";
import { GapQuestion } from "./GapQuestion";
import { Selector } from "./Selector";

const choices = [
  {
    speakerNumber: "19",
    speaker: "The Reynolds House",
  },
  {
    speakerNumber: "20",
    speaker: "The Thumb",
  },
  {
    speakerNumber: "21",
    speaker: "The Museum",
  },
  {
    speakerNumber: "22",
    speaker: "The Contemporary Art Gallery",
  },
  {
    speakerNumber: "23",
    speaker: "he Warner Gallery",
  },
];

const MapQuestions = () => {
  return (
    <div className="mt-12">
      <AudioPlay />

      <div className="flex flex-col gap-y-5 my-12">
        <h1 className=" text-2xl font-bold">
          PART 4 <span>Questions 19-23</span>
        </h1>
        <h2 className="text-md font-[15px] text-[#212529]">
          You will hear someone giving a talk.
        </h2>

        <p className="text-md font-[15px] text-[#212529]">
          Label the places <span className="font-bold"> 19-23 </span>on the map
          <span className="font-bold">A-F</span>.
        </p>

        <p className="text-md font-[15px] text-[#212529]">
          There are <span className="font-bold"> FOUR EXTRA </span>
          extra options which you do not need to use
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/map.png"
          alt="map"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-6 mt-4">
        {choices.map((speaker) => (
          <div className="flex items-center gap-2">
            <p className="font-bold">{speaker.speakerNumber}.</p>
            <p>{speaker.speaker}</p>
            <Selector />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapQuestions;
