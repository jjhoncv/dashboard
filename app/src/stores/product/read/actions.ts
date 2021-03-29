import * as actionTypes from "./actionTypes";
import * as service from "./services";

export const read = (id = null) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.PRODUCT_READ_REQUEST });
    try {
      const data = await service.read(id);
      dispatch({
        type: actionTypes.PRODUCT_READ_SUCCESS,
        data,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.PRODUCT_READ_FAILURE,
        error: e.message,
      });
    }
  };
};
