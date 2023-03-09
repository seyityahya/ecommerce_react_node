import React from "react";
import {
  Card,
  Text,
  Image,
  Stack,
  Heading,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <Card maxW="sm">
      <Link to="/#">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Product"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>İphone</Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Link>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Cards;
