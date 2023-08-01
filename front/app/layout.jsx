"use client";
import "../styles/globals.scss";
import { Inter } from "next/font/google";
import SearchBarProvider from "@/contexts/SearchBarContext";
import { Menu } from "@/components/Menu";
import api from "../services/api";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../services/reducer";

const inter = Inter({ subsets: ["latin"] });

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
            <html lang="fr" className={inter.className}>
                <body className="relative flex flex-col min-h-screen">
                    <SearchBarProvider>{children}</SearchBarProvider>
                </body>
            </html>
        </Provider>
    );
}
