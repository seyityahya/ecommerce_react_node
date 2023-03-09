import React from "react";
import Cards from "../../components/Card";
import { Grid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchProductList } from "../../api.js";

function Products() {
  const { isLoading, error, data } = useQuery("products", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="products">
      <Grid templateColumns="repeat(3,1fr)" gap={6}>
        {data.map((item, key) => (
          <Cards key={key} item={item} />
        ))}
      </Grid>
    </div>
  );
}

export default Products;
