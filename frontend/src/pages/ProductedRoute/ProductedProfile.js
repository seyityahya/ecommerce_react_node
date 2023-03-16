import React from "react";
import { Navigate } from "react-router-dom";
import Profile from "../Profile";
import { useAuth } from "../../contexts/AuthContext";

function ProductedProfile() {
  const { loggedIn } = useAuth();

  return (
    <>
      {loggedIn === true && <Profile />}
      {loggedIn === false && <Navigate to={"/"} />}
    </>
  );
}

export default ProductedProfile;
