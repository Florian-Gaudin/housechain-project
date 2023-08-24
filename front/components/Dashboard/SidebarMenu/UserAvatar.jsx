import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    REMOVE_ACTIVE_USER,
    SET_ACTIVE_USER,
} from "@/services/reducer/slice/authSlice";
import UserLoggedOutButton from "./UserLoggedOutButton";

const UserAvatar = ({ onClick, children }) => {
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

    const getInitials = (name, surname) => {
        return name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();
    };

    console.log("session et status", session, status);

    if (!session) return <UserLoggedOutButton />;

    return (
        <>
            {session && session?.user ? (
                <div className="rounded-full" onClick={onClick}>
                    <button className="bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text font-bold flex items-center gap-4">
                        <span className="sr-only">Menu utilisateur</span>
                        <span className="uppercase text-xl">
                            {getInitials(
                                session.user.name,
                                session.user.surname
                            )}
                        </span>
                        {children}
                    </button>
                </div>
            ) : (
                <UserLoggedOutButton />
            )}
        </>
    );
};

export default UserAvatar;
