import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Text, Button, Alert, AlertIcon, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Profile() {
  const { user, logout, loggedIn } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  return (
    <div>
      {loggedIn === false && (
        <>
          <Alert status="warning">
            <AlertIcon />
            You are not logged in. please login and try again.
          </Alert>
          <Link to="/signin">
            <Button mt={4} colorScheme="whatsapp" variant="solid">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button mt={4} ml={4} colorScheme="facebook" variant="solid">
              Register
            </Button>
          </Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Text fontSize={28} fontWeight={700}>
            Profile
          </Text>
          <Box mt={4}>
            <Text fontSize={20}>email: {user.email}</Text>
            <Text fontSize={20}>role: {user.role}</Text>
          </Box>

          <br />
          <br />
          <Link to="/">
            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
              Logout
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Profile;
