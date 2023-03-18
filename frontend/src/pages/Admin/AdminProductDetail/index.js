import React from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../../api";
import { useQuery } from "react-query";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../style.css";
import { Formik } from "formik";
function AdminProductDetail() {
  const { product_id } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    ["admin:product", product_id],
    () => fetchProduct(product_id)
  );
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error {error.message}</div>;
  }
  const handleSubmit = () => {
    console.log("submitted");
  };
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
        <Text fontsize="2xl">Edit</Text>
        <Formik
          initialValues={{
            title: data.title,
            description: data.description,
            price: data.price,
            photos: data.photos,
          }}
          onSubmit={handleSubmit}
        ></Formik>
      </Box>
    </div>
  );
}

export default AdminProductDetail;
