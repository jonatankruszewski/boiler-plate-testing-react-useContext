import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"

test('Should render Hello Anonymous Goose when is NOT signed in', () => {
  render(<App />)
  expect(screen.getByText(/Hello/i)).toHaveTextContent('Hello Anonymous Goose')
})

test('Should render Login button when user is NOT signed in', () => {
  render(<App />)
  expect(screen.getByRole('button', { name: "login" })).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: "logout" })).toBeNull()
})

test('Should Login when user is NOT signed in', () => {
  render(<App />)
  const login = screen.getByRole('button', { name: "login" })
  expect(login).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: "logout" })).toBeNull()
  userEvent.click(login)
  expect(screen.getByText(/Hello/i)).toHaveTextContent('Hello Jony')
  expect(screen.getByRole('button', { name: "logout" })).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: "login" })).toBeNull()
})

test('Should Logout after login', () => {
  render(<App />)
  const login = screen.getByRole('button', { name: "login" })
  expect(login).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: "logout" })).toBeNull()
  userEvent.click(login)
  expect(screen.getByText(/Hello/i)).toHaveTextContent('Hello Jony')
  const logout = screen.getByRole('button', { name: "logout" })
  expect(logout).toBeInTheDocument()
  expect(screen.queryByRole('button', { name: "login" })).toBeNull()
  userEvent.click(logout)
  expect(screen.getByText(/Hello/i)).toHaveTextContent('Hello Anonymous Goose')
  expect(screen.queryByRole('button', { name: "logout" })).toBeNull()
  expect(screen.getByRole('button', { name: "login" })).toBeInTheDocument()
})