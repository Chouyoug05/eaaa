import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

// Simplified layout for the admin section
const AdminLayout = () => {
  // We simulate an auth check (could be connected to real auth state later)
  const isAuthenticated = localStorage.getItem("isAdminAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex h-screen bg-muted/40 overflow-hidden">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
