import { signOut } from "next-auth/react";
import Link from "next/link";
const UserMenu = ({ origin }) => {
    return (
        <div
            className={`${origin} absolute w-48 py-1 mt-2 bg-white rounded-md shadow-lg focus:outline-none`}
        >
            <button className="block px-4 py-2 text-sm text-left text-bg hover:bg-bglight w-full">
                <Link href="/profile">Mon compte</Link>
            </button>

            <a
                href="/dashboard#myWallet"
                className="block px-4 py-2 text-sm text-bg text-left hover:bg-bglight w-full"
            >
                Mon portefeuille
            </a>

            <button
                className="block px-4 py-2 text-sm text-bg text-left hover:bg-bglight w-full"
                onClick={() => signOut({ redirect: false, callbackUrl: "/" })}
            >
                Déconnexion
            </button>
        </div>
    );
};

export default UserMenu;
