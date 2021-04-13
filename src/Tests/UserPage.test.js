import React from "react";
import UsersPage from "../Pages/UsersPage";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../Redux/store";

describe("<UsersPage />", () => {
  it("faulty demonstration", () => {
    render(
      <Provider store={store}>
        <UsersPage />
      </Provider>
    );
    expect(screen.getByText(/Welcome/i)).toBeDefined();
  });
});
