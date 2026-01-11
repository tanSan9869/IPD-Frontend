import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx"
import RoleSelection from "./components/RoleSelection";
import Login from "./components/Login";
import SignupPatient from "./components/SignupPatient";
import SignupDoctor from "./components/SignupDoctor";

import OTPVerification from "./otp-verification/OTPVerification";

import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorsList from "./pages/DoctorsList";
import PatientRequests from "./pages/PatientRequests";

import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import DoctorPatientFiles from "./pages/DoctorPatientFiles.jsx";
import "./index.css";

export default function App() {
  // Read latest auth state on each render (login flow should set these in localStorage)
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/patient-login" element={<Login role="patient" />} />
      <Route path="/doctor-login" element={<Login role="doctor" />} />
      <Route path="/patient-signup" element={<SignupPatient />} />
      <Route path="/doctor-signup" element={<SignupDoctor />} />
      <Route path="/otp-verification" element={<OTPVerification />} />

      {/* Patient protected routes */}
      <Route
        path="/patient-dashboard/:id"
       element={<ProtectedRoute requiredRole="patient"><PatientDashboard/></ProtectedRoute>}
      />
      <Route
        path="/doctors-list"
        element={
          
          <DoctorsList />
         
        
        }
      />
      <Route
        path="/my-requests"
        element={<ProtectedRoute requiredRole="patient"><PatientRequests/></ProtectedRoute>}
      />
      {/* Alias for common typo/variant */}
      <Route path="/myrequests" element={<Navigate to="/my-requests" replace />} />
 <Route
  path="/doctor/patient/:patientId/files"
  element={<ProtectedRoute requiredRole="doctor"><DoctorPatientFiles/></ProtectedRoute>}
 />


      {/* Doctor protected routes */}
      <Route
        path="/doctor-dashboard/:id"
        element={<ProtectedRoute requiredRole="doctor"><DoctorDashboard/></ProtectedRoute>}
      />
          {/* Catch-all: redirect unknown routes to home to avoid 404s */}
          <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
