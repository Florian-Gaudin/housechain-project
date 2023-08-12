"use client";

import Link from "next/link";

const UserLoggedOut = () => {
    return (
        <div className="flex gap-4">
            <button className="mt-[60px]">
                <Link href="/login">Se connecter</Link>
            </button>

            <button className="mt-[60px]">
                <Link href="/register">S'inscrire</Link>
            </button>
        </div>
    );
};

export default UserLoggedOut;
