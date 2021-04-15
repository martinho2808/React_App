import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
// introducing fireEvent() method
import { render, fireEvent, waitFor, screen } from "./test-utils";
// introducing .toHaveTextContent() method
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../Components/LoginForm";

const server = setupServer(
  rest.post(
    `${process.env.REACT_APP_API_SERVER}/api/login`,
    (req, res, ctx) => {
      return res(ctx.json({ token: "test" }));
    }
  ),
  rest.get(`${process.env.REACT_APP_API_SERVER}/api/user/`, (req, res, ctx) => {
    return res(ctx.json([{ name: "test" }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("<Login />", () => {
  it("can show success message after login", async () => {
    render(
      <BrowserRouter>
        <Route>
          <Login />
        </Route>
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText(/email/i), {
      currentTarget: { value: "sam" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      currentTarget: { value: "123" },
    });
    fireEvent.click(screen.getByText("Login"));
    let result = await screen.findByText(/work/i);
    expect(result).toHaveTextContent(/login/i);
  });
  it("handles server error", async () => {
    server.use(
      rest.post(
        `${process.env.REACT_APP_API_SERVER}/api/login`,
        (req, res, ctx) => {
          return res(ctx.json({}));
        }
      )
    );
    render(
      <BrowserRouter>
        <Route>
          <Login />
        </Route>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Login"));
    await waitFor(() => {
      expect(screen.queryByText(/success/i)).toBeFalsy();
    });
  });
});
