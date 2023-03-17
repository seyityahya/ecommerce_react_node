import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Orders() {
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
      <Box mt={10}>Orders</Box>
    </div>
  );
}

export default Orders;
