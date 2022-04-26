import axios from 'axios';
import {
  LEVEL_LIST_REQUEST,
  LEVEL_LIST_SUCCESS,
  LEVEL_LIST_FAIL,
} from '../Constants/levelConstants';

export const listLevels = () => async (dispatch) => {
  try {
    dispatch({ type: LEVEL_LIST_REQUEST });
    const { data } = await axios.get('/api/levels');
    dispatch({ type: LEVEL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LEVEL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
