import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { loggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">eCommerce</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {!loggedIn && (
          <>
            <Link to="/signin">
              <Button colorScheme="whatsapp">Login</Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="facebook">Register</Button>
            </Link>
          </>
        )}
        {loggedIn && (
          <>
            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
