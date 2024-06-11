import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminNav = ({ setAdminAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAdminAuthenticated(false);
    localStorage.removeItem('token'); // Clear token or other relevant data from local storage
    navigate('/adminlogin');
  };

  const handleGoToDashboard = () => {
    navigate('/admin/dashboard');
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold cursor-pointer" onClick={handleGoToDashboard}>Admin Dashboard</h1>
          <div className="flex space-x-4">
            <Link to="/admin/dashboard/createEvent" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Create Event</Link>
            <Link to="/admin/dashboard/update-contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Update Contact</Link>
            <Link to="/admin/dashboard/update-about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Update About</Link>
            <Link to="/admin/dashboard/events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Events</Link>
            <button onClick={handleLogout} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
