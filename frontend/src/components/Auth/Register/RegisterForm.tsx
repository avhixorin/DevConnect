import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({
    username: "",
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
      <StyledWrapper>
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex-column">
            <label>Username </label>
          </div>
          <div className="inputForm">
            <img src="/assets/user-logo.svg" className="w-5 h-5" alt="" />
            <input
              placeholder="Enter your Username"
              className="input"
              type="text"
              name="username"
              onChange={handleChange}
              value={userData.username}
            />
          </div>
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
          <button type="submit" className="button-submit">
            Sign Up
          </button>
          <p className="p">
            Already have an account?{" "}
            <button onClick={() => navigate("/login")} className="span">
              Sign In
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
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .form button {
    align-self: flex-end;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
  }

  .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 100%;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border: 1.5px solid #2d79f3;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }

  .flex-row > div > label {
    font-size: 14px;
    color: black;
    font-weight: 400;
  }

  .span {
    font-size: 14px;
    margin-left: 5px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;
  }

  .button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }

  .p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }

  .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .btn:hover {
    border: 1px solid #2d79f3;
  }
`;

export default RegisterForm;
