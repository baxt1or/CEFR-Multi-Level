import Link from "next/link";
import React from "react";

type Props = {
  children?: React.ReactNode;
  href: string;
  label: string;
};
const DropDownMenu = ({ children, href, label }: Props) => {
  return (
    <div className="relative group h-fit w-fit">
      <Link
        href={href}
        className="text-xs absolute font-light text-muted-foreground"
      >
        {label}
        <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform ease-out duration-300"></span>
      </Link>
    </div>
  );
};

export default DropDownMenu;
