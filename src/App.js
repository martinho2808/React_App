import React from "react";
import { Routes, BrowserRouter, Link, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Navbar, NavItem, Container } from "react-bootstrap";

import LoginPage from "./Pages/LoginPage";
import LinksPage from "./Pages/LinksPage";
import PeoplePage from "./Pages/PeoplePage";
import UsersPage from "./Pages/UsersPage";
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

            {isAuthenticated ? (
              <button onClick={() => dispatch(logoutNowThunk())}>Logout</button>
            ) : null}
          </Container>
        </Navbar>

        <Routes>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import { connect } from "react-redux";

// import { Navbar, NavItem, Container } from "react-bootstrap";

// import LoginPage from "./Pages/LoginPage";
// import LinksPage from "./Pages/LinksPage";
// import PeoplePage from "./Pages/PeoplePage";
// import UsersPage from "./Pages/UsersPage";
// import { GroupsPage } from "./Pages/GroupsPage";
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
// const mapDispatchToProps = (dispatch) => {
//   return {
//     logOutMDP: () => dispatch(logoutNowThunk()),
//   };
// };
// const PrivateRoute = connect(mapStateToProps)(PurePrivateRoute);

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Navbar bg='dark'>
//             <Container>
//             <NavItem>
//               <Link to="/users">Users</Link>
//             </NavItem>
//             <NavItem>
//               <Link to="/people">People</Link>
//             </NavItem>
//             <NavItem>
//               <Link to="/links">Links</Link>
//             </NavItem>
//             <NavItem>
//               <Link to="/groups">Groups</Link>
//             </NavItem>
//             <NavItem>
//               <Link to="/login">Login</Link>
//             </NavItem>
//             <button onClick={() => this.props.logOutMDP()}>Logout</button>
//             </Container>
//           </Navbar>

//           <Route path="/login" component={LoginPage} />
//           <PrivateRoute path="/users" component={UsersPage} />
//           <PrivateRoute path="/groups" component={GroupsPage} />
//           <PrivateRoute path="/people" component={PeoplePage} />
//           <PrivateRoute path="/links" component={LinksPage} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
