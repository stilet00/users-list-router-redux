import { combineReducers, createStore, applyMiddleware } from "redux";
import users from "./users/reducers";
import todos from "./todos/reducers";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  users, todos
});
const enchancer = applyMiddleware(thunk);
const store = createStore(rootReducer, enchancer);
export default store;
