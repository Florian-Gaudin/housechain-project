import { signOut } from "next-auth/react";
import Link from "next/link";
const UserMenu = ({ origin, noSession }) => {
    return (
        <div
            className={`${origin} absolute w-48 py-1 mt-2 bg-white rounded-md shadow-lg focus:outline-none`}
        >
            {noSession ? (
                <div>
                    <button
                        className="block px-4 py-2 text-sm text-bg text-left hover:bg-bglight w-full"
                        onClick={() => {
                            signOut({ redirect: false, callbackUrl: "/login" });
                        }}
                    >
                        <Link href="/login">Se connecter</Link>
                    </button>
                </div>
            ) : (
                <div>
                    <button className="block px-4 py-2 text-sm text-left text-bg hover:bg-bglight w-full">
                        <Link href="/dashboard#profile">Mon compte</Link>
                    </button>

                    <a
                        href="/contact"
                        className="block px-4 py-2 text-sm text-bg text-left hover:bg-bglight w-full"
                    >
                        Nous contacter
                    </a>

                    <button
                        className="block px-4 py-2 text-sm text-bg text-left hover:bg-bglight w-full"
                        onClick={() => {
                            signOut({ redirect: false, callbackUrl: "/" });
                        }}
                    >
                        Déconnexion
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
