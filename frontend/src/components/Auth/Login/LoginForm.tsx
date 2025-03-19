import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
const LoginForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex-column">
            <label>Email </label>
          </div>
          <div className="inputForm">
            <img src="/assets/email-logo.svg" className="w-5 h-5" alt="" />
            <input
              placeholder="Enter your Email"
              className="input"
              type="text"
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
          </div>
          <div className="flex-column">
            <label>Password </label>
          </div>
          <div className="inputForm">
            <img src="/assets/password-logo.svg" className="w-6 h-6" alt="" />
            <input
              placeholder="Enter your Password"
              className="input"
              type="password"
              name="password"
              onChange={handleChange}
              value={userData.password}
            />
          </div>
          <div className="flex justify-end">
            <span className="span">Forgot password?</span>
          </div>
          <button type="submit" className="button-submit">Sign In</button>
          <p className="p">
            Don't have an account?{" "}
            <button onClick={() => navigate("/register")} className="span">
              Sign Up
            </button>
          </p>
          <p className="p line">Or With</p>
          <div className="flex-row">
            <button className="btn google">
              <img src="/assets/google-logo.svg" className="w-5 h-5" alt="" />
              Google
            </button>
            <button className="btn apple">
              <img src="/assets/github-logo.svg" className="w-6 h-6" alt="" />
              Github
            </button>
          </div>
        </form>
    </div>
  );
};

export default LoginForm;