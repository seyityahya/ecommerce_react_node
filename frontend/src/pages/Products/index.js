import React from "react";
import Cards from "../../components/Card";
import { Grid } from "@chakra-ui/react";

function Products() {
  return (
    <div className="products">
      <Grid templateColumns="repeat(3,1fr)" gap={6}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Grid>
    </div>
  );
}

export default Products;
