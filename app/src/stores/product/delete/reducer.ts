import * as actionTypes from "./actionTypes";

const initialState = {
  data: null,
  error: null,
  isFetching: false,
};

export const deleteReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.PRODUCT_DELETE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.PRODUCT_DELETE_SUCCESS:
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
