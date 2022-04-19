import {
  USER_CURRENT_TASK_REQUEST,
  USER_CURRENT_TASK_SUCCESS,
  USER_CURRENT_TASK_FAIL,
  USER_GENERATE_NEW_TASK_REQUEST,
  USER_GENERATE_NEW_TASK_SUCCESS,
  USER_GENERATE_NEW_TASK_FAIL,
} from '../Constants/userConstants';

export const userCurrentTaskReducer = (
  state = { task: { resources: [] } },
  action
) => {
  switch (action.type) {
    case USER_CURRENT_TASK_REQUEST:
      return { loading: true, ...state };
    case USER_CURRENT_TASK_SUCCESS:
      return { loading: false, task: action.payload };
    case USER_CURRENT_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
