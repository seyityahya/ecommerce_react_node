import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
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
      <Box mt={10}>
        <Text fontSize="2xl" p="5">
          Welcome Admin
        </Text>
        <Box ml={10}>
          You can see orders
          <Link to="/admin/orders">
            <Button ml={4} height={6}>
              Orders
            </Button>
          </Link>
        </Box>
        <Box ml={10} mt={4}>
          You can see products
          <Link to="/admin/products">
            <Button ml={4} height={6}>
              Products
            </Button>
          </Link>
        </Box>
        <Box ml={10} mt={4}>
          You can edit or delete your products
          <Link to="/admin/products">
            <Button ml={4} height={6}>
              Edit or Delete
            </Button>
          </Link>
        </Box>
        <Box ml={10} mt={4}>
          You can upload new products
          <Link to="/admin/products/new">
            <Button ml={4} height={6}>
              New Products
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default AdminHome;
