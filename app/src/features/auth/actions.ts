import * as authActionTypes from "./actionTypes";
import * as authService from "./services";

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: authActionTypes.LOGIN_REQUEST });
    try {
      const { user, token } = await authService.login(username, password);
      dispatch({
        type: authActionTypes.LOGIN_SUCCESS,
        token: token,
        user: user,
      });
    } catch (e) {
      dispatch({ type: authActionTypes.LOGIN_FAILURE, error: e.message });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: authActionTypes.LOGOUT });
  };
};
