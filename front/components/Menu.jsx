"use client";
import MenuSocials from "./MenuSocials";
import indexSvg from "../public/assets/svg/index-svg";
import { useEffect, useRef } from "react";

export const Menu = ({ menuOpen, setMenuOpen }) => {
    const navigation = [
        { name: "Espace personnel", href: "#" },
        { name: "Nos Propriétés", href: "#" },
        { name: "Marché cryto", href: "#" },
        { name: "Contact", href: "#" },
    ];

    const menuRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                menuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menuOpen, setMenuOpen]);

    return (
        <>
            <div
                ref={menuRef}
                onClick={() => setMenuOpen(false)}
                className={`${
                    menuOpen ? "openNav" : ""
                } fixed top-0 right-0 h-[100vh] overflow-hidden w-[100vw] translate-x-[100%] z-50 transition-all transition-timing bg-white py-6 md:max-w-sm sm:ring-1`}
            >
                <span className="flex justify-end mr-5 mt-5">
                    {indexSvg.xmark}
                </span>
                <div
                    className={`${
                        menuOpen
                            ? "opacity-100 translate-x-0"
                            : "translate-x-16"
                    } mt-6 flow-root opacity-0 open-nav-content py-5`}
                >
                    <a href="/">
                        <h2 className="text-3xl md:text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text text-center">
                            Housechain
                        </h2>
                    </a>
                    <span className="w-[70%] h-[1px] block border border-solid border-bglight mx-auto mt-10"></span>
                    <div className="py-6">
                        <div className="mx-auto group">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg py-5 px-16 text-sm md:text-lg font-bold leading-7 uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text text-center group-hover:scale-150 transition-all duration-1000"
                            >
                                Se connecter
                            </a>
                        </div>
                    </div>
                    <span className="w-[70%] h-[1px] block border border-solid border-bglight mx-auto mb-5"></span>
                </div>
                <div
                    className={`${
                        menuOpen
                            ? "opacity-100 translate-x-0"
                            : "translate-x-16"
                    } mt-6 flow-root opacity-0 open-nav-content`}
                >
                    <div className="-my-6">
                        <div className="space-y-2 py-6">
                            {navigation.map((item, index) => (
                                <div
                                    className="hover:bg-bglight group"
                                    key={index}
                                >
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 flex flex-row items-center gap-6 py-5 px-16 text-lg font-bold leading-7 uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text"
                                    >
                                        {indexSvg.anglesRight}
                                        {item.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <MenuSocials />
                    </div>
                </div>
            </div>
        </>
    );
};
