import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    mail: null,
    userName: null,
    userSurname: null,
    userId: null,
};

const authSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            state.isLoggedIn = true;
            const { mail, userName, userSurname, userId } = action.payload;
            state.mail = action.payload.mail;
            state.userName = action.payload.userName;
            state.userSurname = action.payload.userSurname;
            state.userId = action.payload.userId;

            console.log(action.payload);
        },
        REMOVE_ACTIVE_USER: (state, action) => {
            state.isLoggedIn = false;
            state.mail = null;
            state.userName = null;
            state.userSurname = null;
            state.userId = null;
            console.log(state.isLoggedIn, state, action.payload);
        },
    },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.mail;
export const selectUsername = (state) => state.auth.userName;
export const selectUserId = (state) => state.auth.userId;

export default authSlice.reducer;
