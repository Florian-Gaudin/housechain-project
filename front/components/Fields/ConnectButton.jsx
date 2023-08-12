"use client";

import UserLoggedIn from "../Auth/UserLoggedIn";
import UserLoggedOut from "../Auth/UserLoggedOut";
import { useSession } from "next-auth/react";

const ConnectButton = () => {
    const { data: session, status } = useSession();

    // console.log("session et status", session, status);

    if (!session) return <UserLoggedOut />;

    return (
        <>
            {session && session?.user ? (
                <UserLoggedIn user={session?.user} />
            ) : (
                <UserLoggedOut />
            )}
        </>
    );
};
export default ConnectButton;
