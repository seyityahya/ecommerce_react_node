import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  return (
    <div>
      <Text fontSize={22}>Profile</Text>
      <code>{JSON.stringify(user)}</code>
      <br />
      <br />
      <Link to="/">
        <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
          Logout
        </Button>
      </Link>
    </div>
  );
}

export default Profile;
