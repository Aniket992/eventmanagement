// src/Components/EmailVerification.jsx

import React, { useState, useEffect } from "react";
import URL from "../../apiconfig";

const EmailVerification = ({ email, onEmailChange, onEmailVerified }) => {
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpToken, setOtpToken] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpCooldown, setOtpCooldown] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [emailLocked, setEmailLocked] = useState(false);

  useEffect(() => {
    let timer;
    if (otpCooldown) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            setOtpCooldown(false);
            setCountdown(60);
            return 60;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [otpCooldown]);

  const handleSendOtp = async () => {
    if (!email) {
      alert("Please enter the email.");
      return;
    }

    try {
      setOtpLoading(true);
      setOtpError("");
      setEmailLocked(true); // Lock email field immediately

      const response = await fetch(`${URL}/api/otp/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mailId: email,
          otpType: "EMAIL_VERIFICATION",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setOtpSent(true);
        setOtpToken(data.token);
        setOtpCooldown(true);
      } else {
        const errorMessage = await response.text();
        setOtpError(errorMessage);
        setEmailLocked(false); // Unlock email if OTP sending fails
      }
    } catch (error) {
      setOtpError(error.message);
      setEmailLocked(false); // Unlock email if there's an error
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter OTP.");
      return;
    }

    try {
      setVerifyLoading(true);
      setOtpError("");

      const response = await fetch(`${URL}/api/otp/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${otpToken}`,
        },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        const { success } = await response.json();
        if (success) {
          onEmailVerified(true);
          setEmailLocked(true); // Lock email field after successful verification
        } else {
          setOtpError("OTP verification failed");
        }
      } else {
        const errorData = await response.json();
        setOtpError(errorData.message);
      }
    } catch (error) {
      setOtpError(error.message);
    } finally {
      setVerifyLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 tracking-wides font-normal text-white">
        Email:
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => !emailLocked && onEmailChange(e.target.value)}
        className="w-full border rounded-lg py-2 px-3"
        disabled={emailLocked}
      />
      <button
        type="button"
        onClick={handleSendOtp}
        disabled={otpCooldown || otpLoading || emailLocked}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        {otpLoading ? "Sending OTP..." : "Send OTP"}
      </button>
      {otpSent && !otpCooldown && (
        <p className="text-green-500 mt-2">OTP sent successfully!</p>
      )}
      {otpCooldown && (
        <p className="text-gray-300 mt-2">Resend OTP in {countdown} seconds</p>
      )}

      {/* OTP Input and Verify Button */}
      {otpSent && (
        <div className="mt-4">
          <label className="block mb-1 tracking-wides font-normal text-white">
            OTP:
          </label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border rounded-lg py-2 px-3"
          />
          <button
            type="button"
            onClick={handleVerifyOtp}
            disabled={!otpSent || verifyLoading}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            {verifyLoading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
      )}
      {otpError && <p className="text-red-500 mt-2">{otpError}</p>}
    </div>
  );
};

export default EmailVerification;
