import { combineReducers, createStore, applyMiddleware } from "redux";
import users from "./Users/reducers";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  users,
});

const enchancer = applyMiddleware(thunk);
const store = createStore(rootReducer, enchancer);
export default store;
