import { AdmingNavbar } from "@/components/admin/AdmingNavbar";
import { Sidebar } from "@/components/admin/Sidebar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex-grow">
        <AdmingNavbar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
