import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import styles from "./welcome.module.css";

const Welcome = () => {
  const { logout, login, isLoggedin, user } = useContext(AuthContext);

  return (
    <main className={styles.root}>
      {user && <h1>Hello {user}!</h1>}
      {!user && <h1>Hello Anonymous Goose</h1>}
      {!isLoggedin && (
        <button aria-label="login" className={styles.button} onClick={() => login("Jony")}>
          Log In
        </button>
      )}
      {isLoggedin && (
        <button aria-label="logout" className={styles.button} onClick={() => logout()}>
          Log out
        </button>
      )}
    </main>
  );
};

export default Welcome;
