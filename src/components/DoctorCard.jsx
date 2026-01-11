import React from "react";

const DoctorCard = ({ doctor, onApply, onDecline, isApplied }) => {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p>Specialist: {doctor.specialization}</p>

      {isApplied ? (
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => onDecline(doctor._id)}
        >
          Cancel Request
        </button>
      ) : (
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => onApply(doctor._id)}
        >
          Apply
        </button>
      )}
    </div>
  );
};

export default DoctorCard;
