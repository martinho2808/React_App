import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import {Navbar, NavItem, Container } from "react-bootstrap";

import LoginPage from "./Pages/LoginPage";
import LinksPage from "./Pages/LinksPage";
import PeoplePage from "./Pages/PeoplePage";
import UsersPage from "./Pages/UsersPage";
import FormPage from "./Pages/FormPage";
import SignupPage from "./Pages/SignupPage";
import { logoutNowThunk } from "./Redux/auth/actions";

const PurePrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const Component = component;
  if (Component != null) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  } else {
    return null;
  }
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authStore.isAuthenticated,
  };
};

const PrivateRoute = connect(mapStateToProps)(PurePrivateRoute);
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar  bg='dark'>
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

            {this.props.isAuthenticated ? (
              <button onClick={() => this.props.logOutMDP()}>Logout</button>
            ) : null}
            </Container>
          </Navbar>
          <Route path="/signup" component={SignupPage} />

          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/users" component={UsersPage} />
          <PrivateRoute path="/people" component={PeoplePage} />
          <PrivateRoute path="/links" component={LinksPage} />
          <PrivateRoute path="/form" component={FormPage} />
        </div>
      </Router>
    );
  }
}

const mapStateToPropsApp = (state) => {
  return {
    isAuthenticated: state.authStore.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutMDP: () => dispatch(logoutNowThunk()),
  };
};

export default connect(mapStateToPropsApp, mapDispatchToProps)(App);
