import { fireEvent, render, screen } from "@testing-library/react";
import AuthProvider, { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const CustomTest = () => {
  const { logout, login, isLoggedin, user } = useContext(AuthContext);

  return (
    <div>
      <div data-testid="isLoggedin">{JSON.stringify(isLoggedin)}</div>
      <div data-testid="user">{JSON.stringify(user)}</div>
      <button onClick={() => login("demo")} aria-label="login">
        Login
      </button>
      <button onClick={logout} aria-label="logout">
        LogOut
      </button>
    </div>
  );
};

test("Should render initial values", () => {
  render(
    <AuthProvider>
      <CustomTest />
    </AuthProvider>
  );

  expect(screen.getByTestId("isLoggedin")).toHaveTextContent("false");
  expect(screen.getByTestId("user")).toHaveTextContent("null");
});

test("Should Login", () => {
  render(
    <AuthProvider>
      <CustomTest />
    </AuthProvider>
  );
  const loginButton = screen.getByRole("button", { name: "login" });
  fireEvent.click(loginButton);
  expect(screen.getByTestId("isLoggedin")).toHaveTextContent("true");
  expect(screen.getByTestId("user")).toHaveTextContent("demo");
});

test("Should Logout", () => {
  render(
    <AuthProvider>
      <CustomTest />
    </AuthProvider>
  );
  const loginButton = screen.getByRole("button", { name: "logout" });
  fireEvent.click(loginButton);
  expect(screen.getByTestId("isLoggedin")).toHaveTextContent("false");
  expect(screen.getByTestId("user")).toHaveTextContent("null");
});
