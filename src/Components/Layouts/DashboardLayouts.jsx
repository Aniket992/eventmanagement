import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from "../../Components/AdminNav/AdminNav";

const DashboardLayout = ({ setAdminAuthenticated }) => {
  return (
    <div>
      <AdminNav setAdminAuthenticated={setAdminAuthenticated} />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
