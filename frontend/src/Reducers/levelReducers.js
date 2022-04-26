import {
  LEVEL_LIST_REQUEST,
  LEVEL_LIST_SUCCESS,
  LEVEL_LIST_FAIL,
} from '../Constants/levelConstants';

export const levelListReducer = (state = { levels: [] }, action) => {
  switch (action.type) {
    case LEVEL_LIST_REQUEST:
      return { loading: true, levels: [] };
    case LEVEL_LIST_SUCCESS:
      return { loading: false, levels: action.payload };
    case LEVEL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
