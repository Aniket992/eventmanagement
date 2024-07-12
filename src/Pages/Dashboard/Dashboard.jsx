import React, { useState } from 'react';
import Footer from "../../Components/Footer/Footer";
import EventCard from '../../Components/AdminComponents/Event/Event';
import ContactCard from '../../Components/AdminComponents/Contact/Contact';
import AboutCard from '../../Components/AdminComponents/About/About';
import GalleryCard from '../../Components/AdminComponents/Gallery/Gallery';
import RegistrationCard from "../../Components/AdminComponents/Registrations/Registrations";
import './Dashboard.css';
import AdminNav from '../../Components/AdminNav/AdminNav';
import useAuth from "../../Components/AdminComponents/UseAuth/UseAuth";

const Dashboard = () => {
  const isLoading = useAuth();
  const [activeComponent, setActiveComponent] = useState('event');

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case 'event':
        return <EventCard />;
      case 'contact':
        return <ContactCard />;
      case 'about':
        return <AboutCard />;
      case 'gallery':
        return <GalleryCard />;
      case 'registration':
        return <RegistrationCard />;
      default:
        return <EventCard />;
    }
  };

  return (
    <div className="bg-gray-500 text-white min-h-screen flex flex-col">
      <AdminNav setActiveComponent={setActiveComponent} />
      <div className="dashboard-container p-10 flex-1">
        <h1 className="text-3xl font-bold mb-5 text-center">Welcome Admin!</h1>
        <div className="grid grid-cols-1 gap-6">
          {renderComponent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
