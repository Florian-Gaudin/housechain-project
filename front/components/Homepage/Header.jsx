import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import "../../styles/components/_homepageHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const navigation = [
        { name: "Espace personnel", href: "#" },
        { name: "Nos Propriétés", href: "#" },
        { name: "Marché cryto", href: "#" },
        { name: "Contact", href: "#" },
    ];
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Housechain</span>
                        <img className="w-auto" src="logo.jpg" alt="" />
                    </a>
                </div>
                <div className="flex items-center border">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMenuOpen(true)}
                    >
                        <p className="uppercase font-title font-bold text-[25px] bg-gradient-to-r from-purple to-red text-transparent bg-clip-text pt-1 pr-2">
                            Menu
                        </p>
                        <span className="sr-only">Ouvrir le menu</span>
                        <FontAwesomeIcon
                            icon="fa-solid fa-bars"
                            size="2xl"
                            className="bg-gradient-to-r from-purple to-red text-transparent bg-clip-text"
                        />
                        {/* <Bars3Icon
                            className="h-10 w-10 bg-gradient-to-r from-purple to-red text-transparent bg-clip-text"
                            aria-hidden="true"
                        /> */}
                    </button>
                </div>
            </nav>
            <div
                className={`${
                    menuOpen ? "openNav" : ""
                } fixed top-0 right-0 h-[100vh] overflow-hidden px-16 w-[100vw] translate-x-[100%] z-50 transition-all transition-timing bg-white py-6 md:max-w-sm sm:ring-1`}
            >
                <div
                    className={`${
                        menuOpen
                            ? "opacity-100 translate-x-0"
                            : "translate-x-16"
                    } flex items-center justify-between opacity-0 open-nav-content`}
                >
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Housechain</span>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        />
                    </a>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="sr-only">Fermer le menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div
                    className={`${
                        menuOpen
                            ? "opacity-100 translate-x-0"
                            : "translate-x-16"
                    } mt-6 flow-root opacity-0 open-nav-content`}
                >
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="py-6">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                Se connecter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
