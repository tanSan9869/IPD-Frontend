// frontend/src/utils/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenExpired } from './api.js';

// ProtectedRoute usage:
// <ProtectedRoute requiredRole="patient"> <PatientDashboard/> </ProtectedRoute>
export default function ProtectedRoute({ children, requiredRole }) {
  // derive auth state from localStorage (set at login)
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const role = typeof window !== 'undefined' ? localStorage.getItem('role') : null;

  if (!token || isTokenExpired(token)) {
    // Not authenticated - redirect to appropriate login
    const redirectPath = requiredRole === 'doctor' ? '/doctor-login' : '/patient-login';
    try { localStorage.removeItem('token'); localStorage.removeItem('role'); localStorage.removeItem('id'); } catch (e) {}
    return <Navigate to={redirectPath} replace />;
  }

  if (requiredRole && role !== requiredRole) {
    // Not authorized for this role
    return <Navigate to="/" replace />;
  }

  return children;
}
