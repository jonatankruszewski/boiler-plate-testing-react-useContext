import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Welcome = () => {
  const { logout, login, isLoggedin, user } = useContext(AuthContext);

  return (
    <div>
      {user && <div>Hello {user}</div>}
      {!user && <div>Hello Anonymous Goose</div>}
      {!isLoggedin && (
        <button aria-label="login" onClick={() => login("Jony")}>
          Log In
        </button>
      )}
      {isLoggedin && (
        <button aria-label="logout" onClick={() => logout()}>
          Log out
        </button>
      )}
    </div>
  );
};

export default Welcome;
