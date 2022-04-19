import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { taskListReducer, taskDetailsReducer } from './Reducers/taskReducers';
import { userCurrentTaskReducer } from './Reducers/userReducers';

const reducer = combineReducers({
  taskList: taskListReducer,
  taskDetails: taskDetailsReducer,
  userCurrentTask: userCurrentTaskReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
