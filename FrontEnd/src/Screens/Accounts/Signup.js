import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Accounts/Styles/Accounts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import termsPdf from "../Accounts/Terms and Condition/Terms.pdf";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match. Please try again.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/Manager/signup",
        {
          name,
          email,
          password,
        }
      );

      const { managerId } = response.data;

      toast.success("Created Account successfully!", { autoClose: 1000 });
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");

      // Redirect to splash screen with managerId as URL parameter
      setTimeout(() => {
        navigate(`/SplashScreen?managerId=${managerId}`);
      }, 2000);
    } catch (error) {
      console.error("Signup Error:", error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="Accounts-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="right-section">
        <div className="right-section-wrapper">
          <h1 className="Accounts-title">
            Welcome! Let's get started by setting up your account. 
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
                type="text"
                className="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="email"
                placeholder="Email"
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
              <input
                type="password"
                className="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="form-btn">
                <span className="form-btn-text">Create Account</span>
              </button>
              {error && <p className="text-danger">{error}</p>}
              <p className="terms">
                By clicking the button, you are agreeing to our{" "}
                <a
                  href={termsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terms-highlight"
                >
                  Terms and Services
                </a>
              </p>
            </form>

            <p className="terms">
              Already have an account? <Link to="/Login">&nbsp;Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
