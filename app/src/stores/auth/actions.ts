import * as authActionTypes from "./actionTypes";
import * as authService from "./services";

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: authActionTypes.LOGIN_REQUEST });
    try {
      const { user, token } = await authService.login(username, password);
      dispatch({
        type: authActionTypes.LOGIN_SUCCESS,
        token,
        user,
      });
    } catch (e) {
      dispatch({ type: authActionTypes.LOGIN_FAILURE, error: e.message });
    }
  };
};

export const register = (name, lastname, email, username, password) => {
  return async (dispatch) => {
    dispatch({ type: authActionTypes.REGISTER_REQUEST });
    try {
      const { user, token } = await authService.register(
        name,
        lastname,
        email,
        username,
        password
      );
      dispatch({
        type: authActionTypes.REGISTER_SUCCESS,
        token,
        user,
      });
    } catch (e) {
      dispatch({ type: authActionTypes.REGISTER_FAILURE, error: e.message });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: authActionTypes.LOGOUT });
  };
};
