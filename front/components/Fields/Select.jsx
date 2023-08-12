"use client";

import { Fragment, useContext, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { SearchBarContext } from "@/context/SearchBarContext";

export default function Select({
    items,
    label,
    placeholder,
    type,
    defaultValue,
}) {
    let placeholderItem = {
        name: placeholder,
        value: null,
    };

    const [selected, setSelected] = useState(placeholderItem);
    const { setFirstSelectedValue, setSecondSelectedValue } =
        useContext(SearchBarContext);

    function handleOnChange(data) {
        setSelected(data);
        if (type === "companies" || data === placeholderItem) {
            setFirstSelectedValue(data);
        } else if (type === "products") {
            setSecondSelectedValue(data);
        }
    }

    return (
        <Listbox value={selected} onChange={handleOnChange}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-left pl-3 text-sm font-medium text-gray-700">
                        {label}
                    </Listbox.Label>
                    <div className="mt-1 relative">
                        <Listbox.Button className="bg-white relative w-full rounded-md pl-3 pr-10 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span
                                className={`${
                                    selected.name === placeholderItem.name &&
                                    "text-[#A7A7A7]"
                                } block truncate`}
                            >
                                {selected.name}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <ChevronDownIcon
                                    className="h-5 w-5 text-primary"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {defaultValue ? (
                                    <Listbox.Option
                                        value={placeholderItem}
                                        className="relative py-2 pl-10 pr-4"
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`${
                                                        selected
                                                            ? "font-semibold"
                                                            : "font-normal"
                                                    } block truncate`}
                                                >
                                                    {placeholderItem.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ) : null}
                                {items.map((item) => (
                                    <Listbox.Option
                                        key={item.id}
                                        className={({ selected }) => {
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                selected ? "bg-[#C6C7C8]" : ""
                                            }`;
                                        }}
                                        value={item}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`${
                                                        selected
                                                            ? "font-semibold"
                                                            : "font-normal"
                                                    } block truncate`}
                                                >
                                                    {item.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
}
