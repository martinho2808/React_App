import React from "react";
import UsersPage from "../Pages/UsersPage";
import { render, screen } from "@testing-library/react";

describe("<UsersPage />", () => {
  it("faulty demonstration", () => {
    render(<UsersPage />);
    expect(screen.getByText(/Welcome/i)).toBeDefined();
  });
});
