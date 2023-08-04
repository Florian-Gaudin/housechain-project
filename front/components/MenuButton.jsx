"use client";
import { useState } from "react";
import { Menu } from "./Menu";

const MenuButton = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-5 h-full w-full bg-transparent back"
                onClick={() => setMenuOpen(true)}
            >
                <p className="uppercase font-title font-bold text-[25px] bg-move bg-gradient-to-r from-purple to-red text-transparent bg-clip-text pt-1">
                    Menu
                </p>
                <span className="sr-only">Ouvrir le menu</span>
            </button>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    );
};

export default MenuButton;
