import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Error404() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Error 404</AlertTitle>
      <AlertDescription>This page was not found.</AlertDescription>
    </Alert>
  );
}

export default Error404;
