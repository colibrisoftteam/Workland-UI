import rootReducer from "./reducers/reducers";
import {createStore} from "redux";


export const store = createStore(rootReducer);