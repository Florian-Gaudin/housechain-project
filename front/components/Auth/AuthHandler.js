"use client";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const AuthHandler = ({ redirect = false }) => {
    const { data: session } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!redirect) {
            if (session?.error === "RefreshAccessTokenError") {
                signOut({ callbackUrl: "/login", redirect: false });
            }
        }

        if (redirect) {
            if (session === null) {
                if (pathname !== "/login") {
                    router.push("/login");
                }
            } else if (session !== undefined) {
                if (pathname === "/login") {
                    router.push("/");
                }
            }
        }
    }, [session, pathname, router, redirect]);

    return null;
};

export default AuthHandler;
