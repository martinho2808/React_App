import axios from "axios";

// Constants

export const LOGIN_REQUEST_ACTION = "LOGIN_REQUEST_ACTION";
export const LOGIN_SUCCESS_ACTION = "LOGIN_SUCCESS_ACTION";
export const LOGIN_FAILURE_ACTION = "LOGIN_FAILURE_ACTION";
export const LOGOUT_NOW_ACTION = "LOGOUT_NOW_ACTION";

// Action creators thunk
export const loginUserThunk = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST_ACTION });
    console.log(email, password);
    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/api/login`,
      {
        email: email,
        password: password,
      }
    );

    const { data } = response;
    if (data == null) {
      dispatch({
        type: LOGIN_FAILURE_ACTION,
        message: "Unknown Error",
      });
    } else if (!data.token) {
      dispatch({
        type: LOGIN_FAILURE_ACTION,
        message: data.message || "No Token!",
      });
    } else {
      localStorage.setItem("token", data.token);
      dispatch({ type: LOGIN_SUCCESS_ACTION });
    }
  } catch (err) {
    console.log("ERROR " + err);
  }
};

export const logoutNowThunk = () => (dispatch) => {
  localStorage.clear("token");
  dispatch({ type: LOGOUT_NOW_ACTION });
};
