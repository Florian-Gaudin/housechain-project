import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
    authUser: authReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
