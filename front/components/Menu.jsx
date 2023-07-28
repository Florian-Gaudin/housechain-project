"use client";

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuList } from "@/components/MenuList";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SearchBlock from "@/components/Search/SearchBlock";

export const Menu = ({ properties }) => {
    return (
        <>
            <Popover className="relative bg-black shadow">
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
                        </div>

                        {/* Mon compte button */}
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
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
                    enter="duration-200 ease-out"
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
            </Popover>
        </>
    );
};
