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
import { EventsProvider } from "./Components/EventsContext";
import Gallery from "./Pages/Gallery/Gallery";
import Eventpage from "./Pages/Eventpage/Eventpage";

function App() {

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
            element={<Login />}
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard/>
            }
          >
           
            <Route path="createEvent" element={<CreateEventForm />} />
    
          </Route>
        </Routes>
      </BrowserRouter>
    </EventsProvider>
  );
}

export default App;
