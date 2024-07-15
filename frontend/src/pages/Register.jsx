import React from "react";
import Signup from '../components/AuthForm/Register';
import NavBar from "../components/NavBar/NavBar";
import './../components/AuthForm/AuthForm.scss';

const RegisterPage = () => {
  return (
    <div>
      <NavBar />
      <div className="form-container">
        <Signup />
      </div>
    </div>
  );
};

export default RegisterPage;
