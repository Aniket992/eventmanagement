import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";
import Payment from "./Pages/Payment/Payment";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";
import Login from "./Components/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import React, { useState } from "react";

function App() {
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />}></Route>
        <Route
                    path="/dashboard"
                    element={
                        adminAuthenticated ? (
                            <Dashboard/>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />        <Route
          path="/login"
          element={<Login setAdminAuthenticated={setAdminAuthenticated} />}
        />{" "}
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
