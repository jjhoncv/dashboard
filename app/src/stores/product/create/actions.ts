import * as actionTypes from "./actionTypes";
import * as service from "./services";

export const create = (datap) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.PRODUCT_CREATE_REQUEST });
    try {
      const data = await service.create(datap);
      dispatch({
        type: actionTypes.PRODUCT_CREATE_SUCCESS,
        data,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.PRODUCT_CREATE_FAILURE,
        error: e.message,
      });
    }
  };
};
