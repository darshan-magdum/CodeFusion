import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Accounts/Styles/Accounts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Admin login
      const adminResponse = await axios.post("http://localhost:8080/Admin/login", { email, password });
      const { token, adminId, message } = adminResponse.data;
  
      // Store the token in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("userId", adminId);
  
      toast.success(message, { autoClose: 3000 });
  
      // Clear the form fields
      setEmail("");
      setPassword("");
  
      // Redirect to admin dashboard
      window.location = `/AdminDashboard?adminId=${adminId}`;
      
    } catch (adminError) {
      try {
        // Attempt manager login if admin login fails
        const managerResponse = await axios.post("http://localhost:8080/Manager/login", { email, password });
        const { token, managerId, message } = managerResponse.data;
  
        // Store the token in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("userId", managerId);
  
        toast.success(message, { autoClose: 3000 });
  
        // Clear the form fields
        setEmail("");
        setPassword("");
  
        // Redirect to manager dashboard
        setTimeout(() => {
          navigate(`/SplashScreen?managerId=${managerId}`);
        }, 2000);
    
        
      } catch (managerError) {
        setError("Invalid email or password. Please try again.");
      }
    }
  };
  
  return (
    <div className="Accounts-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="right-section">
        <div className="right-section-wrapper">
        <h1 className="Accounts-title">
  Welcome Back! Log in to access your account.
</h1>
<h3 className="Accounts-description">
  We streamline documentation and code reviews to save you time.
</h3>

        </div>
      </div>

      <div className="left-section">
        <div className="left-section-wrapper">
          <div className="form">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <input
                type="email"
                className="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="form-btn">
                <span className="form-btn-text">Log In</span>
              </button>
            </form>
            {error && <p className="text-danger">{error}</p>}
         <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
