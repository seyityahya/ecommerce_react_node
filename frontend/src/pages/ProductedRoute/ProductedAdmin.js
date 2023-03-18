import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AdminHome from "../Admin/AdminHome";

function ProductedAdmin() {
  const { user, loggedIn } = useAuth();

  return (
    <>
      {loggedIn === true && user.role === "admin" && <AdminHome />}
      {loggedIn === true && user.role === "user" && <Navigate to={"/"} />}
      {loggedIn === false && <Navigate to={"/"} />}
    </>
  );
}

export default ProductedAdmin;
