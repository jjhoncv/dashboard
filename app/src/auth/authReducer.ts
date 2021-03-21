import * as actionTypes from "./authActionTypes";

const initialState = {
  user: null,
  error: {},
  isFetching: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_AUTH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: {
          isError: false,
          message: action.error,
        },
      };
    case actionTypes.FETCH_AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
      };
    case actionTypes.FETCH_AUTH_LOGOUT:
      return {
        initialState,
      };
    default:
      return state;
  }
};
