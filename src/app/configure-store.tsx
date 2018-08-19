import createHistory from "history/createBrowserHistory";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../app/views/reducers";
import ReduxThunk from 'redux-thunk';


export const history = createHistory();

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
export const store = createStoreWithMiddleware(rootReducer);
