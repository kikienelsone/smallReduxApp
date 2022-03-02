import {combineReducers} from "redux";
import {likesReducer} from "./likesReducer";
import {inputReducer} from "./inputReducer";
import {appReducer} from "./appReducer"
import {commentsReducer} from "./commentsReducer";


export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    appReducer,
    commentsReducer
})