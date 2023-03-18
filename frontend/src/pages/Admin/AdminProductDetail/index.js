import React from "react";
import { useParams } from "react-router-dom";
import { fetchProduct, updateProduct } from "../../../api";
import { useQuery } from "react-query";
import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../style.css";
import { Formik, FieldArray } from "formik";
import validationSchema from "./validations";
import { message } from "antd";

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
  const handleSubmit = async (values, bag) => {
    console.log("submitted");
    message.loading({ content: "Loading... ", key: "product_update" });

    try {
      await updateProduct(values, product_id);

      message.success({
        content: "The product successfully updates",
        key: "product_update",
        duration: 2,
      });
    } catch (e) {
      message.error("the product does not updated.");
    }
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
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            errors,
            touched,
            handleChange,
            handleBlur,
            values,
            isSubmitting,
          }) => (
            <>
              <Box>
                <Box my={5} textAlign="left">
                  <form onSubmit={handleSubmit}>
                    <FormControl>
                      <FormLabel>Title</FormLabel>
                      <Input
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        disabled={isSubmitting}
                        isInvalid={touched.title && errors.title}
                      />
                      {touched.title && errors.title && (
                        <Text mt={2} color="red.500">
                          {errors.title}
                        </Text>
                      )}
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        disabled={isSubmitting}
                        isInvalid={touched.description && errors.description}
                      />
                      {touched.description && errors.description && (
                        <Text mt={2} color="red.500">
                          {errors.description}
                        </Text>
                      )}
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Price</FormLabel>
                      <Input
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                        disabled={isSubmitting}
                        isInvalid={touched.description && errors.description}
                      />
                      {touched.price && errors.price && (
                        <Text mt={2} color="red.500">
                          {errors.price}
                        </Text>
                      )}
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Photos</FormLabel>
                      <FieldArray
                        name="photos"
                        render={(arrayHelpers) => (
                          <div>
                            {values.photos &&
                              values.photos.map((photo, index) => (
                                <div key={index}>
                                  <Input
                                    name={`photos.${index}`}
                                    value={photo}
                                    disabled={isSubmitting}
                                    onChange={handleChange}
                                    width="90%"
                                  />
                                  <Button
                                    ml="4"
                                    type="button"
                                    colorScheme="red"
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    Remove
                                  </Button>
                                </div>
                              ))}
                            <Button
                              mt="5"
                              onClick={() => arrayHelpers.push("")}
                            >
                              Add a Photo
                            </Button>
                          </div>
                        )}
                      />
                    </FormControl>
                    <Button
                      mt={4}
                      width="full"
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Update
                    </Button>
                  </form>
                </Box>
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default AdminProductDetail;
