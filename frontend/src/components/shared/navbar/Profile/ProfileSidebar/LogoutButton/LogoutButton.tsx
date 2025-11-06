import React from "react";
import "./LogoutButton.css";
import { Link } from "react-router-dom";

const LogoutButton = () => {
  return (
    <Link to="#" className="logout-button">
      Logout
    </Link>
  );
};

export default LogoutButton;
