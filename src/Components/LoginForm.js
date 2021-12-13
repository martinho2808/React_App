// import React from "react";
// import { connect } from "react-redux";
// import { loginUserThunk, loginFacebookThunk } from "../Redux/auth/actions";
// import { withRouter } from "react-router-dom";
// import FacebookLogin from "react-facebook-login";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "Please insert an email here",
//       password: "Please insert you password here",
//     };
//   }

//   componentDidMount() {
//     if (this.props.isAuthticated === true) {
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

//   componentClicked() {
//     console.log("clicked");
//     return null;
//   }

//   responseFacebook = (userInfo) => {
//     if (userInfo.accessToken) {
//       this.props.loginFacebookMDP(userInfo.accessToken);
//     }
//     return null;
//   };

//   render() {
//     return (
//       <>
//         <label>Email: </label>
//         <br />
//         <input
//           type="text"
//           value={this.state.email}
//           onChange={this.handleInputChange}
//           name="email"
//         />
//         <br />
//         <label>Password: </label>
//         <br />
//         <input
//           type="text"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//           name="password"
//         />
//         <br />
//         <button onClick={this.login}>Login </button>
//         {this.props.isAuthticated && <p>Login works</p>}

//         <FacebookLogin
//           appId={process.env.REACT_APP_FACEBOOK_APP_ID || ""}
//           autoLoad={true}
//           fields="name,email,picture"
//           onClick={this.componentClicked}
//           callback={this.responseFacebook}
//         />
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     isAuthticated: state.authStore.isAuthticated,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUserMDP: (email, password) =>
//       dispatch(loginUserThunk(email, password)),
//     loginFacebookMDP: (accessToken) => {
//       dispatch(loginFacebookThunk(accessToken));
//     },
//   };
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

// Hooks:
import FacebookLogin from "react-facebook-login";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserThunk, loginFacebookThunk } from "../Redux/auth/actions";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("Insert Email");
  const [password, setPassword] = useState("Insert Password");
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth);
    if (auth === true) {
      navigate("/users");
    }
  }, [auth, navigate]);

  const login = () => {
    dispatch(loginUserThunk(email, password));
  };

  function componentClicked() {
    console.log("clicked");
    return null;
  }

  function responseFacebook(userInfo) {
    if (userInfo.accessToken) {
      loginFacebookThunk(userInfo.accessToken);
    }
    return null;
  }

  return (
    <div>
      <label>
        Email:
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
      {auth && <p>Login Successful!</p>}
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID || ""}
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

export default Login;
