import React from "react";
import AuthLayout from "../../../components/AuthLayout/AuthLayout";
import SignUpForm from "../../auth/signup/SignUpForm";

export default function SignUp() {
  return (
    <AuthLayout>
      <div className="form-wrapper">
        <div className="form-header">
          <h2>Get started absolutely free</h2>
          <p>
            Already have an account?{" "}
            <a href="/signin" className="auth-link">
              Sign in
            </a>
          </p>
        </div>

        <SignUpForm />

        <p className="terms-text">
          By signing up, I agree to{" "}
          <a href="#">Terms of service</a> and{" "}
          <a href="#">Privacy policy</a>.
        </p>
      </div>
    </AuthLayout>
  );
}
