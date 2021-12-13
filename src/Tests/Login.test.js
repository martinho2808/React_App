import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
// introducing fireEvent() method
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// introducing .toHaveTextContent() method
import "@testing-library/jest-dom/extend-expect";
import Login from "../Components/LoginForm";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByText("Login"));
    await waitFor(() => {
      expect(screen.queryByText(/success/i)).toBeFalsy();
    });
  });

  it("can show success message after login", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    fireEvent.change(screen.getByLabelText(/username/i), {
      currentTarget: { value: "sam" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      currentTarget: { value: "123" },
    });
    fireEvent.click(screen.getByText("Login"));
    let result = await screen.findByText(/success/i);
    expect(result).toHaveTextContent(/login/i);
  });
});
