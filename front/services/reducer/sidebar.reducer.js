"use client";
import { createContext, useReducer } from "react";

// Création du contexte
const SidebarContext = createContext();

// Actions
const actionTypes = {
    TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
};

// Reducer
const sidebarReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
                sidebarContent: action.sidebarContent,
                mainContent: action.mainContent,
                mainTitle: action.mainTitle,
            };
        default:
            return state;
    }
};

// SidebarProvider
const SidebarProvider = ({ children }) => {
    const initialState = {
        isSidebarOpen: false,
        sidebarContent: null,
        mainContent: null,
        mainTitle: null,
    };

    const [state, dispatch] = useReducer(sidebarReducer, initialState);

    return (
        <SidebarContext.Provider value={{ state, dispatch }}>
            {children}
        </SidebarContext.Provider>
    );
};

export { SidebarContext, actionTypes, SidebarProvider };
