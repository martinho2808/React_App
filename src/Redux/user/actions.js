import axios from "axios";
export const USER_GET_REQUEST = "USER_GET_REQUEST";
export const USER_GET_SUCCESS = "USER_GET_SUCCESS";
export const USER_GET_FAILURE = "USER_GET_FAILURE";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_GET_REQUEST });
    const token = localStorage.getItem("token");
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/api/user`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    if (data == null) {
      dispatch({
        type: USER_GET_FAILURE,
        message: "No data received",
      });
    } else {
      dispatch({
        type: USER_GET_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    console.log("ERROR " + err);
  }
};
