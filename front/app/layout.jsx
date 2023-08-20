"use client";
import Header from "@/components/Include/_header";
import "../styles/globals.scss";
import SessionProvider from "@/context/NextAuthContext/SessionProvider.jsx";
import { Provider } from "react-redux";
import store from "@/services/reducer/store";
import { SidebarProvider } from "@/services/reducer/sidebar.reducer";

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className="font-body">
            <head>
                <title>Housechain</title>
                <meta
                    name="description"
                    content="L'immobilier réinventé par la blockchain"
                />
            </head>
            <body className="relative flex flex-col min-h-screen">
                <SessionProvider>
                    <Provider store={store}>
                        <SidebarProvider>{children}</SidebarProvider>
                    </Provider>
                </SessionProvider>
            </body>
        </html>
    );
}
