import { signOut } from "next-auth/react";
import Link from "next/link";
const SettingsMenu = () => {
    return (
        <div className="absolute w-48 py-1 mt-2 bg-white rounded-md shadow-lg focus:outline-none origin-origin-bottom-left left-10 bottom-10">
            <button className="block px-4 py-2 text-sm text-left text-bg hover:bg-bglight w-full">
                <Link href="/profile">Mon compte</Link>
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
                    // fetch(`${process.env.NEXT_PUBLIC_API}/api/logout`);
                    signOut({ redirect: false, callbackUrl: "/" });
                }}
            >
                Déconnexion
            </button>
        </div>
    );
};

export default SettingsMenu;
