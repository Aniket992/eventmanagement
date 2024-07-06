import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Registration from "./Pages/Registration/Registration";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";
import Login from "./Components/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CreateEventForm from "./Components/CreateEventForm";
import DashboardLayout from "./Components/Layouts/DashboardLayouts";
import { EventsProvider } from "./Components/EventsContext";
import Gallery from "./Pages/Gallery/Gallery";
import Eventpage from "./Pages/Eventpage/Eventpage";

function App() {
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);

  return (
    <EventsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/event/:id" element={<Eventpage/>}/>

          
          <Route
            path="/adminlogin"
            element={<Login setAdminAuthenticated={setAdminAuthenticated} />}
          />
          <Route
            path="/admin/dashboard"
            element={
              <DashboardLayout setAdminAuthenticated={setAdminAuthenticated} />
            }
          >
            <Route
              index
              element={<Dashboard isAdminAuthenticated={adminAuthenticated} />}
            />
            <Route path="createEvent" element={<CreateEventForm />} />
    
          </Route>
        </Routes>
      </BrowserRouter>
    </EventsProvider>
  );
}

export default App;
