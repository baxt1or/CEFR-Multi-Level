import React from "react";

type Props = {
  title: string;
  header1: string;
  header2: string;
};

const Header = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className=" text-2xl font-bold">
        PART 1 <span>Questions 1-8</span>
      </h1>
      <h2 className="text-md font-[15px] text-[#212529]">
        You will hear some sentences. You will hear each sentence{" "}
        <span className="font-bold">twice</span>.
      </h2>

      <p className="text-md font-[15px] text-[#212529]">
        Choose the correct reply to each sentence{" "}
        <span className="font-bold">A, B, or C</span>.
      </p>
    </div>
  );
};

export default Header;
