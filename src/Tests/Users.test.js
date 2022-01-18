// import React from "react";
// import UsersPage from "../Components/UsersList";
// import { render, screen } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { store } from "../Redux/store";
// // import every method from 'react-redux'
// // pack them in an object named redux
// import * as redux from "react-redux";
// // import every function from 'action.js'
// // pack them in an object named userActions
// import * as userActions from "../Redux/user/actions";

// describe("<UsersPage />", () => {
//   it("get action thunk called upon componentDidMount", () => {
//     // ask jest to spy on the function 'getUser()'
//     const spy = jest.spyOn(userActions, "getUser");
//     const getUser = jest.fn();
//     spy.mockReturnValue(getUser);
//     render(
//       <Provider store={store}>
//         <UsersPage />
//       </Provider>
//     );
//     expect(getUser).toHaveBeenCalled();
//     spy.mockRestore();
//   });
//   it("getting list items after selecting Redux state", () => {
//     // ask jest to spy on the method 'useSelector()'
//     const spy = jest.spyOn(redux, "useSelector");
//     // this time useSelector() should return a value as it supposed to
//     spy.mockReturnValue({
//       users: [{ name: "ftwd1" }, { name: "ftwd2" }],
//     });
//     render(
//       <Provider store={store}>
//         <UsersPage />
//       </Provider>
//     );
//     // and the screen should render something accordingly
//     expect(screen.getAllByText(/ftwd/i).length).toEqual(2);
//     spy.mockRestore();
//   });
// });

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import UsersPage from '../Components/UsersList'
import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../Redux/store.js'

const server = setupServer(
  rest.get(`${process.env.REACT_APP_API_SERVER}/api/user/`, (req, res, ctx) => {
    return res(ctx.json([{ name: 'ftwd1' }, { name: 'ftwd2' }]))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('<UsersPage />', () => {
  it('can show user names asynchronously', async () => {
    render(
      <Provider store={store}>
        <UsersPage />
      </Provider>
    )
    expect(screen.queryByText(/ftwd/i)).toBeFalsy()
    await waitFor(() => screen.getAllByText(/ftwd/i))
    expect(screen.getAllByText(/ftwd/i).length).toEqual(2)
  })
})
