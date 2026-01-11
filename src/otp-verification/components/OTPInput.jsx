import React, { useState } from "react"; 

const OTPInput = ({ onVerifyOTP }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus(); // ✅ fixed safe focus
    }

    if (newOtp.every((digit) => digit !== "")) {
      onVerifyOTP(newOtp.join(""));
    }
  };

  return (
    <div className="otp-field">
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          value={digit}
          maxLength={1}   // ✅ fixed: must be number not string
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
