import * as actionTypes from "./actionTypes";
import * as service from "./services";

export const remove = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.PRODUCT_DELETE_REQUEST });
    try {
      const data = await service.remove(id);
      dispatch({
        type: actionTypes.PRODUCT_DELETE_SUCCESS,
        data,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.PRODUCT_DELETE_FAILURE,
        error: e.message,
      });
    }
  };
};
