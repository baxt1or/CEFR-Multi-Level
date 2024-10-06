"use client";
import {
  Book,
  BookType,
  Headset,
  Home,
  Library,
  LogOut,
  NotebookPen,
  Volume,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { SidebarLink } from "./SidebarLink";

const sidebarLinks = [
  {
    icon: Home,
    href: "/",
    label: "Home",
  },
  {
    icon: Headset,
    href: "/listening",
    label: "Listening",
  },
  {
    icon: Book,
    href: "/reading",
    label: "Reading",
  },
  {
    icon: NotebookPen,
    href: "/writing",
    label: "Writing",
  },
  {
    icon: Volume,
    href: "/speaking",
    label: "Speaking",
  },
  {
    icon: BookType,
    href: "/grammar",
    label: "Grammar",
  },
  {
    icon: Library,
    href: "/tests",
    label: "Tests",
  },
];

export const Sidebar = () => {
  return (
    <div className="border-r border-r-gray-200 w-52">
      <div className="flex flex-col items-start justify-around gap-y-4 ">
        <Link href={"/admin"} className="font-bold text-2xl px-8 py-6">
          CEFR TEST
        </Link>

        <div className="flex flex-col gap-y-4 my-8 w-full">
          {sidebarLinks.map((link) => (
            <SidebarLink
              label={link.label}
              href={link.href}
              icon={link.icon}
              key={link.href}
            />
          ))}
        </div>

        <div className="mt-28 cursor-pointer">
          <div className="flex items-center gap-2 pl-10 p-2 ">
            <LogOut strokeWidth={0.75} className="w-6 h-6" />
            <p className="mt-1 ">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
