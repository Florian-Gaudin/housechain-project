"use client";
import MenuSocials from "./MenuSocials";
import indexSvg from "../public/assets/svg/index-svg";

// import Link from "next/link";
// import { Popover, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { MenuList } from "@/components/MenuList";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import SearchBlock from "@/components/Search/SearchBlock";

export const Menu = ({ properties, menuOpen, setMenuOpen }) => {
    const navigation = [
        { name: "Espace personnel", href: "#" },
        { name: "Nos Propriétés", href: "#" },
        { name: "Marché cryto", href: "#" },
        { name: "Contact", href: "#" },
    ];

    return (
        <>
            <div
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
            {/* <Popover className="relative bg-black shadow">
                <div className="mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:pr-8">
                            <a href="/">
                                <span className="sr-only">Housechain</span>
                                <img
                                    className="h-8 w-auto sm:h-20"
                                    src="/images/logo_cryo_noir.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                            </Popover.Button>
                        </div>
                        <Popover.Group
                            as="nav"
                            className="hidden md:flex space-x-10"
                        >
                            <MenuList
                                label="Les propriétés"
                                items={properties}
                                type="properties"
                            />
                        </Popover.Group>
                        <div className="px-6 py-2 bg-primary text-white">
                            <Link href="/market">Marché crypto</Link>
                        </div>
                        <div className="px-6 py-2 bg-primary text-white">
                            <Link href="/contact">Nous contacter</Link>
                        </div> */}

            {/* Mon compte button */}
            {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="#"
                                className="flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md bg-white hover:bg-indigo-700 md:py-2 md:text-lg md:px-10"
                            >
                                Mon compte
                            </a>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-100 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
                    >
                        @TODO IMPLEMENT MENU MOBILE HERE
                    </Popover.Panel>
                </Transition>
            </Popover> */}
        </>
    );
};
