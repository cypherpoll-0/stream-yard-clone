import { combineReducers } from "redux";

import userSlice from "./user/userSlice";
import streamSlice from "./stream/streamSlice";

const rootReducer = combineReducers({
	user: userSlice,
	stream: streamSlice,
});

export default rootReducer;
