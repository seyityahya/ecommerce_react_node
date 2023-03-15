import React from "react";
import { Link } from "react-router-dom";
import { Alert, Image, AlertIcon, Button, Box, Text } from "@chakra-ui/react";
import { useBasket } from "../../contexts/BasketContext";

function Basket() {
  const { items } = useBasket();

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <div>
      {items.length < 1 && (
        <Alert status="warning">
          <AlertIcon />
          You have not any items in your basket.
        </Alert>
      )}
      {items.length > 0 && (
        <>
          <ul>
            {items.map((item) => (
              <li key={item._id}>
                <Link to={`/product/${item._id}`}>
                  {item.title} - {item.price} $
                  <Image
                    htmlWidth={200}
                    src={item.photos[0]}
                    alt="basket item"
                  />
                </Link>
                <Button mt="2" size="sm" colorScheme="red" onClick={() => {}}>
                  Remove from Basket
                </Button>
              </li>
            ))}
          </ul>
          <Box mt="10">
            <Text fontSize="22">Total: {total}$</Text>
          </Box>
        </>
      )}
    </div>
  );
}

export default Basket;
