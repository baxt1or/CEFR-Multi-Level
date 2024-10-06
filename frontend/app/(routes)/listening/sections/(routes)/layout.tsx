import Banner from "@/components/shared/Banner";
import React from "react";

const ListeningTestSectionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Banner label="Listening" />
      {children}
    </div>
  );
};

export default ListeningTestSectionLayout;
