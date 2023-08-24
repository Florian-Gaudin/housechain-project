import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Controller } from "react-hook-form";

export default function Select({
    control,
    options,
    optionKey,
    optionValue,
    optionTag,
    optionClassName,
    label,
    labelClassName,
    validation,
    name,
    className,
    errors,
    defaultOption,
    defaultOptionClassName,
    register,
}) {
    return (
        <div className="">
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Listbox onChange={onChange}>
                        <div className="relative mt-1">
                            <Listbox.Label
                                className={labelClassName}
                            >{`${label}${
                                validation?.required ? " *" : ""
                            }`}</Listbox.Label>
                            <Listbox.Button
                                className={`rounded bg-white py-2 pl-3 pr-10 flex justify-between ${className}`}
                                {...register(name, {
                                    ...validation,
                                    required: validation?.required
                                        ? "Ce champ est requis."
                                        : false,
                                })}
                            >
                                <span className="pointer-events-none flex items-center pr-2">
                                    {value
                                        ? options.find((item) => {
                                              return item.id === Number(value);
                                          })[optionTag]
                                        : defaultOption}
                                </span>
                                <ChevronUpIcon className="rotate-180 transform h-5 w-5" />
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <Listbox.Option
                                        className={`cursor-default ${defaultOptionClassName}`}
                                        disabled
                                    >
                                        {defaultOption}
                                    </Listbox.Option>
                                    {options.map((option) => (
                                        <Listbox.Option
                                            className={`cursor-pointer ${optionClassName}`}
                                            key={option[optionKey]}
                                            value={option[optionValue]}
                                        >
                                            {option[optionTag]}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                        {errors[name] && (
                            <p
                                role="alert"
                                className="block mt-1 text-xs text-red-500 font-semibold"
                            >
                                {errors[name].message}
                            </p>
                        )}
                    </Listbox>
                )}
            />
        </div>
    );
}
