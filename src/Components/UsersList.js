import React from "react";
import { connect } from "react-redux";
import { getUser } from "./redux/actions/actions";

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.getUserMDP();
  }

  render() {
    console.log(this.props.usersMSP);
    return (
      <>
        <h2> Welcome to the user page, much more exciting than groups!</h2>
        <p>Well done for getting this far! </p>
        <ul>
          {this.props.usersMSP &&
            this.props.usersMSP.map((user, i) => <li key={i}>{user.name}</li>)}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersMSP: state.userStore.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserMDP: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);

// Hooks:
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getUser } from "./redux/actions/actions";

// const UsersPage = () => {
//   const { users } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUser());
//   }, []);
//   return (
//     <div>
//       <h1>Welcome to the user page</h1>
//       <p>Well done for getting this far.</p>
//       <ul>{users && users.map((user, i) => <li key={i}>{user.name}</li>)}</ul>
//     </div>
//   );
// };

// export default UsersPage;
