import Navbar from "@/components/shared/Navbar";
import React from "react";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mt-22">{children}</div>;
    </>
  );
};

export default RoutesLayout;
