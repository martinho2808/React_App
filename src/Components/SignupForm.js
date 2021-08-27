import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signupThunk } from "../Redux/auth/actions";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "Please insert an email here",
      password: "Please insert you password here",
      name: "Please insert name here",
    };
  }

  componentDidMount() {
    if (this.props.isAuthticated === true) {
      this.props.history.push("/users");
    }
  }

  signup = () => {
    this.props.signupMDP(
      this.state.email,
      this.state.password,
      this.state.name
    );
  };

  handleInputChange = (e) => {
    if (e.currentTarget.name === "email") {
      this.setState({
        email: e.currentTarget.value,
      });
    } else if (e.currentTarget.name === "password") {
      this.setState({
        password: e.currentTarget.value,
      });
    } else if (e.currentTarget.name === "name") {
      this.setState({
        name: e.currentTarget.value,
      });
    }
  };

  render() {
    return (
      <>
        <label>Email: </label>
        <br />
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleInputChange}
          name="email"
        />
        <br />
        <label>Name: </label>
        <br />
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
          name="name"
        />
        <br />
        <label>Password: </label>
        <br />
        <input
          type="text"
          value={this.state.password}
          onChange={this.handleInputChange}
          name="password"
        />
        <br />
        <button onClick={this.signup}>Signup </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthticated: state.authStore.isAuthticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signupMDP: (email, password, name) =>
      dispatch(signupThunk(email, password, name)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));

// Hooks:
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { loginUserThunk } from "./redux/actions/actions";

// const Login = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const auth = useSelector((state) => state.auth);
//   const { isAuthenticated } = auth;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (isAuthenticated === true) {
//       props.history.push("/users");
//     }
//   }, [isAuthenticated]);

//   const login = () => {
//     dispatch(loginUserThunk(email, password));
//   };

//   return (
//     <div>
//       <label>
//         Username:
//         <input
//           onChange={(e) => setEmail(e.currentTarget.value)}
//           type="text"
//           value={email}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           onChange={(e) => setPassword(e.currentTarget.value)}
//           type="text"
//           value={password}
//         />
//       </label>
//       <br />
//       <button onClick={login}>Login</button>
//       {isAuthenticated && <p>Login Successful!</p>}
//     </div>
//   );
// };

// export default Login;
