import React from "react";
import UsersPage from "../Components/UsersList";
// import for mock API serup
import { rest } from "msw";
import { setupServer } from "msw/node";
// introducing waitFor(), a utility dealing with async operations
import { render, waitFor, screen } from "./test-utils";

// mock the get request for /api/user/
const server = setupServer(
  rest.get(`${process.env.REACT_APP_API_SERVER}/api/user/`, (req, res, ctx) => {
    return res(ctx.json([{ name: "ftwd1" }, { name: "ftwd2" }]));
  })
);

// startup and cleanup
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// remember that the action thunk 'getUser()' is actually asynchronous?
// waitFor() will wait asynchronously until the assertion to be true or timeout
describe("<UsersPage />", () => {
  it("can show user names asynchronously", async () => {
    render(<UsersPage />);
    // to prove that something does not exist on the screen,
    // always use screen.queryByText(/ftwd/i), because
    // screen.getAllByText(/ftwd/i) will always fail the whole test
    expect(screen.queryByText(/ftwd/i)).toBeFalsy();
    await waitFor(() => {
      expect(screen.getAllByText(/ftwd/i).length).toEqual(2);
    });
    // await waitFor(() => screen.getAllByText() ) = await screen.findAllByText()
    let occurrence = await screen.findAllByText(/ftwd/i);
    expect(occurrence.length).toEqual(2);
  });
});
