import React from "react";
import Login from "../components/AuthForm/LogIn";
import NavBar from "../components/NavBar/NavBar";
import './../components/AuthForm/AuthForm.scss';

const LogInPage = () => {
  return (
    <div>
      <NavBar />
      <div className="form-container">
        <Login />
      </div>
    </div>
  );
};

export default LogInPage;
