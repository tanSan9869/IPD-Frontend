// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
      <h1>Welcome to Dashboard</h1>
      <p>Select where you want to go:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>
          <Link to="/doctor-dashboard" style={{ textDecoration: "none", color: "blue" }}>
            👨‍⚕️ Doctor Dashboard
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link to="/patient-dashboard" style={{ textDecoration: "none", color: "blue" }}>
            🧑‍🦰 Patient Dashboard
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link to="/doctors-list" style={{ textDecoration: "none", color: "blue" }}>
            📋 Doctors List
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link to="/doctor-request" style={{ textDecoration: "none", color: "blue" }}>
            📩 Doctor Requests
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
