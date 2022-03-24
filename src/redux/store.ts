import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import authReduser from "./auth/reducer";
// import profileReduser from "./profile/profileReducer";

const reducers = combineReducers({
	auth: authReduser,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
