import { combineReducers } from 'redux';
import {childReducer} from "./childReducer";

export default combineReducers({
    childReducer,
});
