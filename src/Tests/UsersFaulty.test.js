import React from "react";
import UsersPage from "../Components/UsersList";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createReduxStore } from "../Redux/store";

describe("<UsersPage />", () => {
  xit("faulty demonstration", () => {
    render(<UsersPage />);
    expect(screen.getByText(/Welcome/i)).toBeDefined();
  });
  xit("still a faulty demonstration", () => {
    render(
      <Provider store={createReduxStore}>
        <UsersPage />
      </Provider>
    );
    expect(screen.getByText(/Welcome/i)).toBeDefined();
  });
});

// THIS FAILS its meant too!!
