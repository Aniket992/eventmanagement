import React, { useState, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { EventsContext } from '../../../src/Components/EventsContext';
import Navbar from '../../Components/Navbar/Navbar';
import eventbg from "../../Assets/eventbg.jpg";
import URL from "../../apiconfig";

const Registration = () => {
  const location = useLocation();
  const { event: initialEvent } = location.state || {};
  const { events } = useContext(EventsContext);
  
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    school: '',
    fatherName: '',
    motherName: '',
    address: '',
    phoneNumber: '',
    email: '',
    accommodation: false,
    selectedEvents: initialEvent ? [initialEvent._id] : [],
  });

  const [emailVerified, setEmailVerified] = useState(false);
  const [emailDisabled, setemailDisabled] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpToken, setOtpToken] = useState(''); // New state to store OTP token
  const accommodationFee = 500;
  const [errors,setErrors] = useState();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEventSelect = (eventId) => {
    setFormData((prevData) => {
      const isSelected = prevData.selectedEvents.includes(eventId);
      const selectedEvents = isSelected
        ? prevData.selectedEvents.filter(id => id !== eventId)
        : [...prevData.selectedEvents, eventId];

      return {
        ...prevData,
        selectedEvents,
      };
    });
  };
  const [otpLoading, setOtpLoading] = useState(false); 
  const [verifyLoading, setVerifyLoading] = useState(false); 
  const handleSendOtp = async () => {
    if(!formData.email){
      alert("please enter email.");
      return;
    }
    try {
      setemailDisabled(true);
      setOtpLoading(true);

      const response = await fetch(`${URL}/api/otp/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mailId: formData.email ,otpType:"EMAIL_VERIFICATION"}),
      });

      if (response.ok) {
        const data = await response.json();
        setOtpSent(true);
        setOtpToken(data.token); // Save OTP token
        console.log(data.token);
      } else {
        console.error('OTP send failed:', response.statusText);
        alert(response.statusText);
      }
    } catch (error) {
      console.error('Error sending OTP:', error.message);

    }
    finally
    {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if(!otp){
      alert("please enter otp");
      return;
    }
    try {
     setVerifyLoading(true);
      const response = await fetch(`${URL}/api/otp/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${otpToken}`, // Pass OTP token in the header
        },
        body: JSON.stringify({  otp }),
      });

      if (response.ok) {
        const { success } = await response.json();
        if (success) {
          setEmailVerified(true);
        } else {
          console.error('OTP verification failed');
          alert("OTP verification failed");
          setOtpSent(false);
        }
      } else {
        console.error('OTP verification failed:', response.statusText);
        setErrors(response.statusText);
        alert("OTP verification failed");
        setOtpSent(false);
        setemailDisabled(false);


      } 
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
      setErrors(error.message);
      setOtpSent(false);

    }
    finally{
      setVerifyLoading(false);
    }
  };
  const totalFee = formData.selectedEvents.reduce((total, eventId) => {
    const event = events.find(evt => evt._id === eventId);
    return event ? total + parseInt(event.registrationCharges[0]?.amount || 0) : total;
  }, formData.accommodation ? accommodationFee : 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email||!emailVerified) {
      alert('Please verify your email before proceeding.');
      return;
    }
    if (formData.selectedEvents.length === 0) {
      alert('Please select at least one event.');
      return;
    }

    try {
      const apiUrl = `${URL}/api/payment`;
      const payload = {
        amount: totalFee,
        formData: formData,
        // selectedEvents: formData.selectedEvents,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const { success, success_url, cancel_url } = await response.json();
        if (success) {
          window.location.href = success_url;
        } else {
          window.location.href = cancel_url;
        }
      } else {
        console.error('Payment API call failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error in payment API call:', error.message);
    }
  };

  return (
    <div className="h-full min-h-screen flex flex-col bg-black"
         style={{ backgroundImage: `url(${eventbg})` }}>
      <div className='bg-black bg-opacity-95 min-h-screen h-full'>
        <Navbar />
        <div className='flex flex-col items-center justify-center mt-5 w-full '>
          <h1 className='font-avenger tracking-widest text-4xl text-center text-white mb-3'>Registration Form</h1>
          <form onSubmit={handleSubmit}
                className='flex  flex-col md:flex-row w-full md:w-3/4   border rounded-xl gap-3 p-3'>
            <div className='rounded-xl text-xl justify-evenly text-yellow-400 font-serif flex flex-col tracking-widest font-bold w-full md:w-1/2 '>
              <h1 className='text-center font-normal text-3xl text-fuchsia-500'>Student Details</h1>
              <div className="mb-4 mt-1">
                <label className="block mb-1 tracking-widest">Student Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded bg-transparent" />
              </div>
             
              <div className="mb-4">
                <label className="block mb-1">School Name:</label>
                <input type="text" name="school" value={formData.school} onChange={handleChange} required className="w-full px-3 py-2 border rounded bg-transparent" />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Father's Name:</label>
                <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className="w-full px-3 py-2 border rounded bg-transparent" />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Mother's Name:</label>
                <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required className="w-full px-3 py-2 border rounded bg-transparent" />
              </div>
              <div className='flex justify-between gap-2'>

              <div className="  mb-4 w-1/2">
                <label className="block mb-1">Phone Number:</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full px-2 py-1 border rounded bg-transparent" />
              </div>
              <div className="mb-4 w-1/2">
                <label className="block mb-1">Class:</label>
                <select name="class" value={formData.class} onChange={handleChange} required className="w-full px-3 py-1 border rounded bg-transparent">
                  <option className='bg-black text-center' value="">Select Class</option>
                  <option className='bg-black text-center' value="6th">6th</option>
                  <option className='bg-black text-center' value="7th">7th</option>
                  <option className='bg-black text-center' value="8th">8th</option>
                  <option className='bg-black text-center' value="9th">9th</option>
                  <option className='bg-black text-center' value="10th">10th</option>
                  <option className='bg-black text-center' value="11th">11th</option>
                  <option className='bg-black text-center' value="12th">12th</option>
                </select>
              </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1">Residential Address:</label>
                <textarea name="address" value={formData.address} onChange={handleChange} required className="w-full min-h-11 max-h-32 px-3 py-2 border rounded bg-transparent"></textarea>
              </div>
            </div>

            <div className='text-yellow-400 font-avenger tracking-widest w-full md:w-1/2 p-1 flex flex-col justify-between'>
    
            <div className="mb-4 font-serif">
                <label className="block mb-1">Email Address:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded bg-transparent" disabled={emailDisabled} />
                {emailVerified ? (
                  <p className="text-green-500 mt-2">Email verified</p>
                ) : (
                  <div className="  justify-between flex mt-2">
<button type="button" onClick={handleSendOtp} className="mt-2 px-3 py-1 bg-purple-500 text-white rounded" disabled={otpSent || otpLoading}>
                  {otpLoading ? "Sending..." : otpSent ? "OTP Sent" : "Send OTP"}

                </button>                
                    {otpSent && (
                      <div className="flex items-center">
                        <p className=''>{errors}</p>
                        <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full px-3 py-1 border rounded bg-transparent mr-2" />
                        <button type="button" onClick={handleVerifyOtp} className="mt-2 px-3 py-1 bg-purple-500 text-white rounded" disabled={emailVerified || verifyLoading}>
                  {verifyLoading ? "Verifying..." : emailVerified ? "Verified" : "Verify OTP"}
                </button>                      </div>
                    )}
                  </div>
                )}
              </div>

              <p className="text-lg font-bold">Selected Events:</p>

              <div className="mb-6 flex flex-col gap-3 border h-80 overflow-y-scroll ">
                {events.map((evt) => (
                  <div key={evt._id} className="flex items-center rounded  mb-2 justify-between px-3">
                    <input
                      type="checkbox"
                      name="selectedEvents"
                      value={evt._id}
                      checked={formData.selectedEvents.includes(evt._id)}
                      onChange={() => handleEventSelect(evt._id)}
                      className="w-10 h-7"
                    />
                    <label className="text-white tracking-widest text-xl">{evt.eventName}</label>
                    <label className='text-orange-400 text-2xl'>₹{evt.registrationCharges[0]?.amount}</label>
                  </div>
                ))}
              </div>
              <div className="mb-4 flex justify-between p-3">
                <label className="flex items-center">
                  <input type="checkbox" name="accommodation" checked={formData.accommodation} onChange={handleChange} className="mr-2" />
                </label>
                <label className='text-xl tracking-widest'>Accommodation</label>
                <label className='text-2xl'>{accommodationFee}</label>
              </div>
              <div className="mb-6 p-2 border-t-2">
                <p className="text-xl font-bold tracking-widest text-center text-red-400">Total Fee: ₹{totalFee}</p>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" >Pay</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
