import React from "react";
import { Navigate } from "react-router-dom";
import Admin from "../Admin";
import { useAuth } from "../../contexts/AuthContext";

function ProductedAdmin() {
  const { user, loggedIn } = useAuth();
  console.log(user);

  return (
    <>
      {user.role === "admin" && <Admin />}
      {user.role === "user" && <Navigate to={"/"} />}
    </>
  );
}

export default ProductedAdmin;
