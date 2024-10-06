"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  icon: React.ElementType;
  href: string;
  label: string;
};
export const SidebarLink = ({ icon: Icon, href, label }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/admin/${href}`);
  return (
    <Link
      href={`/admin/${href}`}
      className={`flex items-center gap-2 pl-8 p-2 hover:bg-gray-50 cursor-pointer ${
        isActive && "bg-gray-50"
      }`}
    >
      <Icon strokeWidth={0.75} className="w-6 h-6" />
      <p className="mt-1 ">{label}</p>
    </Link>
  );
};
