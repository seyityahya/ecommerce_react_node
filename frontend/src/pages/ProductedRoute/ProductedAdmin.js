import React from "react";
import { Navigate } from "react-router-dom";
import Admin from "../Admin/index";
import { useAuth } from "../../contexts/AuthContext";

function ProductedAdmin() {
  const { user, loggedIn } = useAuth();
  console.log(user);

  return (
    <>
      {loggedIn === true && user.role === "admin" && <Admin />}
      {loggedIn === true && user.role === "user" && <Navigate to={"/"} />}
      {loggedIn === false && <Navigate to={"/"} />}
    </>
  );
}

export default ProductedAdmin;
