import { Search, User } from "lucide-react";
import React from "react";

export const AdmingNavbar = () => {
  return (
    <header className="p-3 border-b  px-6">
      <nav className="flex items-center justify-between">
        <div className="flex gap-3 rounded-xl p-2 bg-gray-100 items-center hover:border hover:border-blue-200">
          <Search strokeWidth={0.75} className="w-6 h-6" />
          <input type="text" className="bg-gray-100" />
        </div>

        <div className="flex items-center gap-4">
          <p className="flex flex-col items-end font-light text-xs text-black">
            John Smith
            <span className="text-muted-foreground">Admin</span>
          </p>
          <div className="p-1 rounded-full border border-gray-200">
            <User strokeWidth={0.75} className="h-5 w-5" />
          </div>
        </div>
      </nav>
    </header>
  );
};
