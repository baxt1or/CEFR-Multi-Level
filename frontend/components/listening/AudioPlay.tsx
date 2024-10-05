import { Play } from "lucide-react";

const AudioPlay = () => {
  return (
    <div className="w-full rounded-3xl bg-gray-100 flex items-center gap-x-2 p-3  mt-2 mb-5">
      <div className="w-[10%] flex items-center gap-1">
        <div className="rounded-full hover:bg-white hover:border border-gray-200 p-1">
          <Play strokeWidth={0.75} className="w-4 h-4" />
        </div>
        <p className="text-xs">0:00 / 08:21</p>
      </div>
      <div className="w-[83%] h-[0.150rem] bg-black rounded-full" />
      <div className="w-[5%] text-xs">00.12</div>
    </div>
  );
};

export default AudioPlay;
