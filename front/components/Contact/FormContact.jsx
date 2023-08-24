"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { processError } from "@/services/formErrors";
import Button from "@/components/Fields/Button";
import Input from "@/components/Form/Input";
import Textarea from "@/components/Form/Textarea";
import LoaderIcon from "@/components/Icons/LoaderIcon";
import Link from "next/link";

const FormContact = () => {
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =
        useState(false);

    const {
        register,
        reset,
        control,
        formState: { errors, isSubmitting },
        handleSubmit,
        setError,
    } = useForm();

    const onSubmit = (data) => {
        fetch(`${process.env.NEXT_PUBLIC_API}/api/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (response.status === 400) {
                response.json().then((data) => {
                    processError(data.errors, setError);
                });
            }
            if (response.status === 201) {
                reset();
                setIsSuccessfullySubmitted(true);
            }
        });
    };

    const inputProps = { register, errors };

    return (
        <form
            className="w-3/5 mx-auto text-left"
            action=""
            method="post"
            onSubmit={handleSubmit(onSubmit)}
        >
            {isSuccessfullySubmitted && (
                <div className="p-4 text-lg text-center text-bold rounded-lg bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Merci ! Votre message a bien été envoyé.
                </div>
            )}
            <Input
                type="text"
                name="name"
                label="Votre nom"
                labelClassName="text-[1rem] mt-5"
                className="border border-gray-400 rounded px-2 py-1.5 w-full placeholder:text-[0.7rem] placeholder:text-black"
                placeholder="Dupond"
                validation={{ required: true }}
                {...inputProps}
            />
            <Input
                type="text"
                name="surname"
                label="Votre prénom"
                labelClassName="text-[1rem] mt-5"
                className="border border-gray-400 rounded px-2 py-1.5 w-full placeholder:text-[0.7rem] placeholder:text-black"
                placeholder="Jean"
                validation={{ required: true }}
                {...inputProps}
            />

            <Input
                type="email"
                name="mail"
                label="Votre adresse mail"
                labelClassName="text-[1rem] mt-5"
                className="border border-gray-400 rounded px-2 py-1.5 w-full placeholder:text-[0.7rem] placeholder:text-black"
                placeholder="exemple@housechain.com"
                validation={{ required: true }}
                {...inputProps}
            />

            <Textarea
                name="message"
                label="Message"
                labelClassName="text-[1rem] mt-5"
                className="border border-gray-400 rounded px-2 py-1.5 w-full placeholder:text-[0.7rem] placeholder:text-black resize-none mb-5"
                placeholder="Ecrivez ici votre message..."
                validation={{ required: true }}
                rows="5"
                {...inputProps}
            />
            <div className="relative mx-auto text-white rounded-lg">
                <Button
                    disabled={isSubmitting}
                    submitted={isSuccessfullySubmitted}
                    type="submit"
                    title="Envoyer"
                    className="bg-move bg-gradient-to-r from-purple via-red to-purple rounded-lg py-3 px-3 text-xl font-semibold mx-auto mt-4"
                ></Button>
                {isSubmitting && (
                    <LoaderIcon className="absolute left-[50%] top-2 animate-spin h-10 w-10" />
                )}
            </div>
            <div className="text-center mb-4 mt-5">
                <Link href="/" className="underline mx-auto">
                    Retour à la page d'accueil
                </Link>
            </div>
        </form>
    );
};

export default FormContact;
