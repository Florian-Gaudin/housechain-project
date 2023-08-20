"use client";

import { useDispatch } from "react-redux";
import UserLoggedIn from "../Auth/UserLoggedIn";
import UserLoggedOut from "../Auth/UserLoggedOut";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import {
    REMOVE_ACTIVE_USER,
    SET_ACTIVE_USER,
} from "@/services/reducer/slice/authSlice";

const ConnectButton = () => {
    const { data: session, status } = useSession();

    const dispatch = useDispatch();
    // Monitor currently signed in user
    useEffect(() => {
        if (session && session?.user) {
            console.log(session.user);
            const userId = session.user.id;
            const userName = session.user.name;
            const userSurname = session.user.surname;
            const userMail = session.user.mail;
            dispatch(
                SET_ACTIVE_USER({
                    mail: userMail,
                    userName: userName,
                    userSurname: userSurname,
                    userId: userId,
                })
            );
        }
        if (!session) {
            dispatch(REMOVE_ACTIVE_USER);
        }
    }, [session, dispatch]);

    console.log("session et status", session, status);

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
