import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import bgImage from "../../Assets/marssurface.jpg";
import r1 from "../../Assets/comp1.jpg";
import r2 from "../../Assets/comp2.jpg";
import r3 from "../../Assets/comp3.jpg";
import r4 from "../../Assets/comp4.jpg";
import r5 from "../../Assets/comp5.jpg";
import r6 from "../../Assets/comp6.jpg";
import r7 from "../../Assets/comp7.jpg";
import r8 from "../../Assets/comp8.jpg";
import r9 from "../../Assets/comp5.jpg";
import r10 from "../../Assets/comp10.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login = ({ setAdminAuthenticated }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handlehome =()=>{
navigate("/");
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const adminUserId = "admin";
    const adminPassword = "admin123";

    if (userId === adminUserId && password === adminPassword) {
      setAdminAuthenticated(true);
      navigate("/Dashboard");
    } else {
      setErrorMessage("Invalid credentials");
    }
  };

  const handleForgotPassword = () => {
    alert("Please contact the system administrator to reset your password.");
  };

  return (
    <>
    <div
      className="flex flex-row text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-1/2 flex justify-center items-center">
        <div className="box">
          <span style={{ "--i": 1 }}><img src={r1} alt="image1" /></span>
          <span style={{ "--i": 2 }}><img src={r2} alt="image2" /></span>
          <span style={{ "--i": 3 }}><img src={r3} alt="image3" /></span>
          <span style={{ "--i": 4 }}><img src={r4} alt="image4" /></span>
          <span style={{ "--i": 5 }}><img src={r5} alt="image5" /></span>
          <span style={{ "--i": 6 }}><img src={r6} alt="image6" /></span>
          <span style={{ "--i": 7 }}><img src={r7} alt="image7" /></span>
          <span style={{ "--i": 8 }}><img src={r8} alt="image8" /></span>
          <span style={{ "--i": 9 }}><img src={r9} alt="image9" /></span>
          <span style={{ "--i": 10 }}><img src={r10} alt="image10" /></span>
        </div>
      </div>
      <div className="w-1/2 h-screen flex flex-col justify-center items-center">
        <button className="rounded-full bg-blue-400 text-gray-800 font-bold p-6 " onClick={handlehome}>Home</button>
        <form
          className="w-3/4 flex flex-col items-center gap-5 m-20 border-2 border-white rounded-xl py-12"
          onSubmit={handleLogin}
        >
          <h1 className="text-4xl">Welcome Back Admin!</h1>
          <div className="flex flex-col w-3/4  p-2">
            <label className="text-2xl">User ID:</label>
            <input
              className="rounded-sm h-12 text-black p-2 text-center"
              type="text"
              value={userId}
              placeholder="enter userID"
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-3/4  p-2">
            <label className="text-2xl">Password:</label>
            <input
              className="rounded-sm h-12 text-black p-2 text-center"
              type="password"
              value={password}
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={handleForgotPassword} className="text-xl">
            Forgot Password?
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button className="bg-lime-500 p-2 w-64 rounded-xl text-xl" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
