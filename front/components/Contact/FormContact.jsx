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
        console.log(data);
        fetch(`${process.env.NEXT_PUBLIC_API}/api/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (response.status === 400) {
                response.json().then((data) => {
                    // console.log(response, data);
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
            className="w-3/5 mx-auto"
            action=""
            method="post"
            onSubmit={handleSubmit(onSubmit)}
        >
            {isSuccessfullySubmitted && (
                <div className="p-4 mb-4 text-lg text-bold rounded-lg bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Merci ! Votre message a bien été envoyé.
                </div>
            )}
            <Input
                type="text"
                name="name"
                label="Votre nom"
                labelClassName="text-[0.7rem] mt-9"
                className="border border-gray-400 rounded px-2 py-1.5 w-full placeholder:text-[0.7rem] placeholder:text-black"
                placeholder="Dupond"
                validation={{ required: true }}
                {...inputProps}
            />
            <Input
                type="text"
                name="surname"
                label="Votre prénom"
                labelClassName="text-[0.7rem] mt-9"
                className="border border-gray-400 rounded px-2 py-1.5 w-full placeholder:text-[0.7rem] placeholder:text-black"
                placeholder="Jean"
                validation={{ required: true }}
                {...inputProps}
            />

            <Input
                type="email"
                name="mail"
                label="Votre adresse mail"
                labelClassName="text-[0.7rem] mt-9"
                className="border border-gray-400 rounded px-2 py-1.5 w-full placeholder:text-[0.7rem] placeholder:text-black"
                placeholder="exemple@housechain.com"
                validation={{ required: true }}
                {...inputProps}
            />

            <Textarea
                name="message"
                label="Message"
                labelClassName="text-[0.7rem] mt-9"
                className="border border-gray-400 rounded px-2 py-1.5 w-full placeholder:text-[0.7rem] placeholder:text-black resize-none"
                placeholder="Ecrivez ici votre message..."
                validation={{ required: true }}
                rows="3"
                {...inputProps}
            />

            <div className="flex flex-col justify-center w-full gap-4 text-white rounded-lg">
                <Button
                    disabled={isSubmitting}
                    type="submit"
                    title="Envoyer"
                    className="bg-move bg-gradient-to-r from-purple via-red to-purple rounded-lg py-3 px-3 text-xl font-semibold mw-auto mt-4"
                >
                    {isSubmitting && (
                        <LoaderIcon className="animate-spin h-5 w-5" />
                    )}
                </Button>
                <Link href="/" className="underline mt-4 text-bg">
                    Retour à la page d'accueil
                </Link>
            </div>
        </form>
    );
};

export default FormContact;
