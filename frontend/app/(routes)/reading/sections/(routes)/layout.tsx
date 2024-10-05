import Banner from "@/components/shared/Banner";
import React from "react";

const ReadingSectionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Banner label="Reading" />
      {children}
    </div>
  );
};

export default ReadingSectionsLayout;
