import { Box, Text, Button } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchProductList, deleteProduct } from "../../../api";
import { Table, Popconfirm } from "antd";

function AdminProducts() {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchProductList
  );

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`/admin/products/${record._id}`}>
              <Button colorScheme={"facebook"}>Edit</Button>
            </Link>
            <Popconfirm
              title="Are you sure"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    alert("ürün silindi");
                  },
                });
              }}
              onCancel={() => console.log("iptal edildi")}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <Button colorScheme={"facebook"} ml="5">
                Delete
              </Button>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [deleteMutation]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={4}
          mr={10}
        >
          <Text fontSize="2xl" p="5">
            Products
          </Text>
          <Button colorScheme={"facebook"}>
            <Link to="/admin/products/new">New</Link>
          </Button>
        </Box>

        <Table dataSource={data} columns={columns} rowKey="_id" />
      </Box>
    </div>
  );
}

export default AdminProducts;
