// Hooks:
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../Redux/user/actions";

const UsersPage = () => {
  const users = useSelector((state) => state.userStore.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  console.log(users);
  return (
    <div>
      <h1>Welcome to the user page</h1>
      <p>Well done for getting this far.</p>
      <ul>{users && users.map((user, i) => <li key={i}>{user.name}</li>)}</ul>
    </div>
  );
};

export default UsersPage;

// class
// import React from "react";
// import { connect } from "react-redux";
// import { getUser } from "../Redux/user/actions";

// class UsersPage extends React.Component {
//   componentDidMount() {
//     this.props.getUserMDP();
//   }

//   render() {
//     console.log(this.props.usersMSP);
//     return (
//       <>
//         <h2> Welcome to the user page, much more exciting than groups!</h2>
//         <p>Well done for getting this far! </p>
//         <ul>
//           {this.props.usersMSP &&
//             this.props.usersMSP.map((user, i) => <li key={i}>{user.name}</li>)}
//         </ul>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     usersMSP: state.userStore.user, // removed for mocking tests
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUserMDP: () => dispatch(getUser()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
