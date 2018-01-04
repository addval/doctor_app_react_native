import rootReducer from "./combineReducer";
import { createStore } from "redux";

let store = createStore(rootReducer);
export default store;
