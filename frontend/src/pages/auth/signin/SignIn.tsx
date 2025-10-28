import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <p>Sign in form placeholder.</p>
      <p>
        Don't have an account? <Link to="/auth/sign-up">Sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
