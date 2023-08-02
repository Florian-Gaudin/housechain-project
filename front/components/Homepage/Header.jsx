import { useState } from "react";
import "../../styles/components/_homepageHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Socials from "./Socials";

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
                <div className="flex items-center fixed right-8 top-8 animate-background rounded-lg bg-gray-900 from-purple to-red bg-[length:400%_400%] p-0.5 animate-spin hover:bg-gradient-to-r">
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
                </div>
            </nav>
            <div
                onClick={() => setMenuOpen(false)}
                className={`${
                    menuOpen ? "openNav" : ""
                } fixed top-0 right-0 h-[100vh] overflow-hidden w-[100vw] translate-x-[100%] z-50 transition-all transition-timing bg-white py-6 md:max-w-sm sm:ring-1`}
            >
                <span className="text-bglight block text-right mr-5 mt-5 cursor-pointer">
                    <FontAwesomeIcon
                        icon="fa-solid fa-circle-xmark"
                        size="2xl"
                    />
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
                        <div className="hover:bg-bglight rounded-lg w-[70%] mx-auto group">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg py-5 px-16 text-sm md:text-lg font-bold leading-7 uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text text-center transition-all group-hover:scale-110"
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
                            {navigation.map((item) => (
                                <div className="hover:bg-bglight group">
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block py-5 px-16 text-lg font-bold leading-7 uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text"
                                    >
                                        <span className="text-bg transition-all group-hover:ml-2">
                                            <FontAwesomeIcon
                                                icon="fa-solid fa-angle-right"
                                                size="md"
                                            />
                                        </span>
                                        <span className="text-bg group-hover:translate-x-6 mr-4">
                                            <FontAwesomeIcon
                                                icon="fa-solid fa-angle-right"
                                                size="md"
                                            />
                                        </span>
                                        {item.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-5 justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="3em"
                                viewBox="0 0 512 512"
                                className="fill-bglight hover:fill-bg p-2"
                            >
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                Facebook
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="3em"
                                viewBox="0 0 512 512"
                                className="fill-bglight hover:fill-bg p-2"
                            >
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
