import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "./authActionTypes";
import { serviceLogin } from "./authServices";

export const useAuth = () => {
  const { user, error, isFetching } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const isLogged = () => !!user;

  const logout = () => {
    dispatch({ type: actionTypes.FETCH_AUTH_LOGOUT });
  };

  const login = async (id, username) => {
    dispatch({ type: actionTypes.FETCH_AUTH_REQUEST });
    try {
      const user = await serviceLogin(id, username);
      dispatch({ type: actionTypes.FETCH_AUTH_SUCCESS, user });
    } catch (e) {
      dispatch({ type: actionTypes.FETCH_AUTH_FAILURE, error: e });
    }
  };

  return { user, error, isFetching, isLogged, logout, login };
};
