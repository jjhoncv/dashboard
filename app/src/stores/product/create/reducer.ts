import * as actionTypes from "./actionTypes";

const initialState = {
  data: null,
  error: null,
  isFetching: false,
};

export const createReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.PRODUCT_CREATE_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.PRODUCT_CREATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data,
      };

    default:
      return state;
  }
};
