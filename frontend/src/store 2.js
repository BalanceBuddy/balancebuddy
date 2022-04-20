import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { taskListReducer, taskDetailsReducer } from './Reducers/taskReducers';
import {
  userCurrentTaskReducer,
  generateNewTaskReducer,
} from './Reducers/userReducers';

import { watchCurrentTask } from './Sagas/saga';

const reducer = combineReducers({
  taskList: taskListReducer,
  taskDetails: taskDetailsReducer,
  userCurrentTask: userCurrentTaskReducer,
  generateNewTask: generateNewTaskReducer,
});

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watchCurrentTask);

export default store;
