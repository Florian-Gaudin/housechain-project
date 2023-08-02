"use client";
import "../styles/globals.scss";
import localFont from "next/font/local";
import SearchBarProvider from "@/contexts/SearchBarContext";
import { Menu } from "@/components/Menu";
import api from "../services/api";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../services/reducer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    fas,
    faForward,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(fas, faForward, faCircleXmark);

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export const metadata = {
    title: "Housechain",
    description: "L'immobilier réinventé par la blockchain",
};

export default function RootLayout({ children }) {
    return (
        <Provider store={store}>
            <html lang="fr" className="font-body">
                <body className="relative flex flex-col min-h-screen">
                    <SearchBarProvider>{children}</SearchBarProvider>
                </body>
            </html>
        </Provider>
    );
}
