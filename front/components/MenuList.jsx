import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const MenuList = ({ label, items, type }) => {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={`${
                            open ? "text-gray-400" : "text-white"
                        } group bg-black rounded-md inline-flex items-center text-base font-medium focus:outline-none`}
                    >
                        <span>{label}</span>
                        <ChevronDownIcon
                            className={`${
                                open ? "text-gray-400" : "text-white"
                            } ml-2 h-5 w-5`}
                            aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 divide-y divide-black bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    {/* {items.map((item) => (
                                        <a
                                            key={item.name}
                                            href={
                                                type === "companies"
                                                    ? `/centres/${item.slug}`
                                                    : type === "products"
                                                    ? `/prestations/${item.slug}`
                                                    : "#"
                                            }
                                            className="flex items-start hover:bg-gray-50"
                                        >
                                            <p className="text-base font-medium text-gray-900">
                                                {item.name}
                                            </p>
                                        </a>
                                    ))} */}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};
