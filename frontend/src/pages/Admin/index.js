import React from "react";
import "./style.css";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHome from "./AdminHome";
import { Box } from "@chakra-ui/react";

function Admin() {
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Order</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Admin;
