"use client";

import indexSvg from "@/public/assets/svg/index-svg";
import Link from "next/link";

const UserLoggedOut = () => {
    return (
        <div className="flex gap-4">
            <Link
                href="/login"
                className="uppercase relative flex items-center gap-4 flex-shrink-0 transform transition-transform duration-1000 ease-in-out opacity-80 hover:opacity-100 hover:scale-110 shadow-lg rounded-lg cursor-pointer bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text font-bold p-5 text-2xl font-title my-auto"
            >
                {indexSvg.usercircle}
                Mon compte
            </Link>
        </div>
    );
};

export default UserLoggedOut;
