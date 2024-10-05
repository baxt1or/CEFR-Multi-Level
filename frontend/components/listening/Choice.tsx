import React from "react";
import { Checkbox } from "../ui/checkbox";

type Props = {
  choice: string;
  choiceType: string;
};

export const Choice = ({ choice, choiceType }: Props) => {
  return (
    <div className="flex items-center gap-4 font-bold">
      {choiceType}.
      <div className="flex items-center gap-2">
        <Checkbox id="terms2" className="rounded-full" />
        <label
          htmlFor="terms2"
          className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {choice}
        </label>
      </div>
    </div>
  );
};
