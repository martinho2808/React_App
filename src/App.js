// Hook based functional component

import { Routes, BrowserRouter, Link, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Navbar, NavItem, Container } from "react-bootstrap";

import LoginPage from "./Pages/LoginPage";
import LinksPage from "./Pages/LinksPage";
import PeoplePage from "./Pages/PeoplePage";
import UsersPage from "./Pages/UsersPage";
import FormPage from "./Pages/FormPage";
import SignupPage from "./Pages/SignupPage";
import { logoutNowThunk } from "./Redux/auth/actions";

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = useSelector((state) => state.authStore.isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function App() {
  let isAuthenticated = useSelector((state) => state.authStore.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark">
          <Container>
            <NavItem>
              <Link to="/users">Users</Link>
            </NavItem>
            <NavItem>
              <Link to="/people">People</Link>
            </NavItem>
            <NavItem>
              <Link to="/links">Links</Link>
            </NavItem>
            <NavItem>
              <Link to="/login">Login</Link>
            </NavItem>
            <NavItem>
              <Link to="/form">Form</Link>
            </NavItem>
            <NavItem>
              <Link to="/signup">Signup</Link>
            </NavItem>

            {isAuthenticated ? (
              <button onClick={() => dispatch(logoutNowThunk())}>Logout</button>
            ) : null}
          </Container>
        </Navbar>

        <Routes>
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/users"
            element={
              <RequireAuth redirectTo="/login">
                <UsersPage />
              </RequireAuth>
            }
          />

          <Route
            path="/people"
            element={
              <RequireAuth redirectTo="/login">
                <PeoplePage />
              </RequireAuth>
            }
          />

          <Route
            path="/links"
            element={
              <RequireAuth redirectTo="/login">
                <LinksPage />
              </RequireAuth>
            }
          />

          <Route
            path="/form"
            element={
              <RequireAuth redirectTo="/login">
                <FormPage />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// class React Router This implementatio broke in the last upgrade of React-Router-Dom v6 (for class routing with private routes please use v5 )

// import React from "react";
// import { Routes, BrowserRouter, Link, Route, Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { Navbar, NavItem, Container } from "react-bootstrap";

// import LoginPage from "./Pages/LoginPage";
// import LinksPage from "./Pages/LinksPage";
// import PeoplePage from "./Pages/PeoplePage";
// import UsersPage from "./Pages/UsersPage";
// import FormPage from "./Pages/FormPage";
// import SignupPage from "./Pages/SignupPage";
// import { logoutNowThunk } from "./Redux/auth/actions";

// const PurePrivateRoute = ({ component, isAuthenticated, ...rest }) => {
//   const Component = component;
//   if (Component != null) {
//     return (
//       <Route
//         {...rest}
//         render={(props) =>
//           isAuthenticated ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{ pathname: "/login", state: { from: props.location } }}
//             />
//           )
//         }
//       />
//     );
//   } else {
//     return null;
//   }
// };
// const mapStateToProps = (state) => {
//   return {
//     isAuthenticated: state.authStore.isAuthenticated,
//   };
// };

// const PrivateRoute = connect(mapStateToProps)(RequireAuth);
// const mapStateToPropsApp = (state) => {
//   return {
//     isAuthenticated: state.authStore.isAuthenticated,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logOutMDP: () => dispatch(logoutNowThunk()),
//   };
// };

// export default connect(mapStateToPropsApp, mapDispatchToProps)(App);
