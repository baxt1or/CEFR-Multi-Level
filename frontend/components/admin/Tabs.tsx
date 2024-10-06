"use client";

import { ReactNode, useState } from "react";

type Props = {
  tabsLabels: string[];
  contents: ReactNode[];
};

export const Tabs = ({ tabsLabels, contents }: Props) => {
  const [isActive, setIsActive] = useState<number | null>(null);

  return (
    <div className="mt-4">
      <div className="flex items-center gap-4 pl-4">
        {tabsLabels.map((tab, index) => (
          <button
            onClick={() => setIsActive(index)}
            key={`tab_${index}`}
            className={`border px-3 py-2 cursor-pointer rounded-xl ${
              isActive === index ? "bg-black text-white" : ""
            } `}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col mx-auto">
        {contents &&
          contents.map((content, index) => {
            if (isActive == index) {
              return (
                <div key={`content_${index}`} className="mt-4 ">
                  {content}
                </div>
              );
            }

            return null;
          })}
      </div>
    </div>
  );
};
