// import React from "react";
// import { connect } from "react-redux";
// import { loginUserThunk } from "../Redux/auth/actions";
// import { withRouter } from "react-router-dom";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "Please insert an email here",
//       password: "Please insert you password here",
//     };
//   }

//   componentDidMount() {
//     if (this.props.isAuthenticated === true) {
//       this.props.history.push("/users");
//     }
//   }

//   login = () => {
//     this.props.loginUserMDP(this.state.email, this.state.password);
//   };

//   handleInputChange = (e) => {
//     if (e.currentTarget.name === "email") {
//       this.setState({
//         email: e.currentTarget.value,
//       });
//     } else if (e.currentTarget.name === "password") {
//       this.setState({
//         password: e.currentTarget.value,
//       });
//     }
//   };

//   render() {
//     return (
//       <>
//         <label>
//           Email:
//           <br />
//           <input
//             type="text"
//             value={this.state.email}
//             onChange={this.handleInputChange}
//             name="email"
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <br />
//           <input
//             type="text"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//             name="password"
//           />
//         </label>
//         <br />
//         <button onClick={this.login}>Login </button>
//         {this.props.isAuthenticated && <p>Login works</p>}
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     isAuthenticated: state.authStore.isAuthenticated,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUserMDP: (email, password) =>
//       dispatch(loginUserThunk(email, password)),
//   };
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

// Hooks:
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserThunk } from "../Redux/auth/actions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector(
    (state) => state.authStore.isAuthenticated
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push("/users");
    }
  }, [isAuthenticated]);

  const login = () => {
    dispatch(loginUserThunk(email, password));
  };

  return (
    <div>
      <label>
        Username:
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="text"
          value={email}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          onChange={(e) => setPassword(e.currentTarget.value)}
          type="text"
          value={password}
        />
      </label>
      <br />
      <button onClick={login}>Login</button>
      {isAuthenticated && <p>Login Successful!</p>}
    </div>
  );
};

export default Login;
