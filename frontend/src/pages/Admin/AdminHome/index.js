import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "../style.css";

function AdminHome() {
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="/admin/orders">Order</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Box mt={10}>Admin Home</Box>
    </div>
  );
}

export default AdminHome;
