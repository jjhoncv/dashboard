import * as actionTypes from "./actionTypes";

const initialState = {
  user: null,
  token: null,
  error: {},
  isFetching: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: {
          isError: false,
          message: action.error,
        },
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.token,
        user: action.user,
      };
    case actionTypes.LOGOUT:
      return {
        initialState,
      };
    default:
      return state;
  }
};
