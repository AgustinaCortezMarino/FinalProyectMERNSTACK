import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { lugaresReducer } from "./appRedux";

const rootReducers = combineReducers({
  app: lugaresReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
