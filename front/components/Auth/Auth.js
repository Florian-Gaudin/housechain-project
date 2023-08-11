"use client";
import { useState } from "react";
import RefreshTokenHandler from "./RefreshTokenHandler";
import { SessionProvider } from "next-auth/react";
import AuthHandler from "./AuthHandler";

export default function Auth({ children }) {
    const [interval, setInterval] = useState(0);

    return (
        <SessionProvider refetchInterval={interval}>
            {children}
            <RefreshTokenHandler setInterval={setInterval} />
            <AuthHandler />
        </SessionProvider>
    );
}
