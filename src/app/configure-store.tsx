import createHistory from "history/createBrowserHistory";
import { createStore } from "redux";
import rootReducer from "../app/views/reducers";


export const history = createHistory();

export const store = createStore(rootReducer);