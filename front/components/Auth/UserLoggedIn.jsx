// "use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

const UserLoggedIn = ({ user }) => {
    // console.log(user);
    return (
        <div className="">
            <h2 className="">Bonjour {user.name} !</h2>

            <div className="flex">
                <button className="">
                    <Link href="/profile">Mon espace perso</Link>
                </button>

                <button className="">
                    <Link href="/wallet">Mon portefeuille</Link>
                </button>
            </div>

            <button
                className=""
                onClick={() => signOut({ redirect: false, callbackUrl: "/" })}
            >
                Se déconnecter
            </button>
        </div>
    );
};

export default UserLoggedIn;
