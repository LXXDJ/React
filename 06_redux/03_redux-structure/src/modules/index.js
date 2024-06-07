import { combineReducers } from "redux";
import menuReducer from "./MenuModules";
import reviewReducer from "./ReivewModules";

const rootReducer = combineReducers({ // 하나의 rootReducer 안에서 관리될 수 있도록 combineReducers로 합친다.
    menuReducer,
    reviewReducer
});

export default rootReducer;