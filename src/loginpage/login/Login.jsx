//Login.js
import {  Routes, Route } from 'react-router-dom';
import Signup from '../signup/Signup'; // Your signup component
import LoginForm from './LoginForm';
import Header2 from "../header/Header1";
import ProtectedRoute from './ProtectedRoute'
import AdminDashboard from './AdminDashboard'
import EmployeeDashboard from './EmployeeDashboard'

function Login() {
  return (
    <div>
       <Header2/>
       
      <div>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/landing" element={<Landing />} /> */}
            <ProtectedRoute path="/admin-dashboard" role="admin">
              <AdminDashboard />
            </ProtectedRoute>
            <ProtectedRoute path="/employee-dashboard" role="employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          </Routes>
      </div>
    </div>
  );
}

export default Login;

