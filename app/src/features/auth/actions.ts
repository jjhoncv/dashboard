import * as authActionTypes from "./actionTypes";
import * as authService from "./services";

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: authActionTypes.LOGIN_REQUEST });
    try {
      const { data } = await authService.login(username, password);
      dispatch({
        type: authActionTypes.LOGIN_SUCCESS,
        token: data.token,
        user: data.user,
      });
    } catch (e) {
      dispatch({ type: authActionTypes.LOGIN_FAILURE, error: e });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: authActionTypes.LOGOUT });
  };
};
