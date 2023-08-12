"use client";

import Button from "@/components/Fields/Button";
import Link from "next/link";
import Input from "@/components/Form/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function FormRegister() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();
    const inputProps = { register, errors };

    const onSubmit = async () => {
        const data = getValues();
        console.log(data);
        try {
            setLoading(true);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API}/api/users`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                // Gérer les erreurs de l'API
                const responseData = await response.json();
                console.error(
                    "Erreur lors de la création de l'utilisateur:",
                    responseData
                );
            } else {
                // L'utilisateur a été créé avec succès
                console.log("Utilisateur créé avec succès !");
                // Vous pouvez rediriger l'utilisateur vers une autre page ici
            }
        } catch (error) {
            console.error(
                "Erreur réseau lors de la création de l'utilisateur:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    const [loading, setLoading] = useState(false);
    return (
        <div className="py-4 px-6 bg-white text-light text-sm md:w-1/2">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                <Input
                    type="text"
                    name="lastname"
                    label="Nom"
                    placeholder="Dupont"
                    className="border py-2 px-2"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <Input
                    type="text"
                    name="firstname"
                    label="Prénom"
                    placeholder="Jean"
                    className="border py-2 px-2"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <Input
                    type="text"
                    name="address"
                    label="Adresse postale"
                    placeholder="8 rue de la République"
                    className="border py-2 px-2"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <div className="flex flex-row gap-3">
                    <div className="md:w-2/3">
                        <Input
                            type="text"
                            name="city"
                            label="Ville"
                            placeholder="Reims"
                            className="border py-2 px-2"
                            validation={{ required: true }}
                            {...inputProps}
                        />
                    </div>
                    <div className="md:w-1/3">
                        <Input
                            type="text"
                            name="postal-code"
                            label="Code postal"
                            placeholder="8 rue de la République"
                            className="border py-2 px-2"
                            validation={{ required: true }}
                            {...inputProps}
                        />
                    </div>
                </div>
                <Input
                    type="text"
                    name="email"
                    label="Adresse mail"
                    placeholder="test@test.fr"
                    className="border py-2 px-2"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <Input
                    type="password"
                    name="password"
                    label="Mot de passe"
                    className="border py-2 px-2"
                    validation={{ required: true }}
                    pattern={{
                        value: /^.{8,}$/,
                        message:
                            "Le mot de passe doit contenir au moins 8 caractères.",
                    }}
                    {...inputProps}
                />
                <div className="flex justify-center w-full gap-4 text-white rounded-lg">
                    <Button
                        type="submit"
                        title="Se connecter"
                        className="bg-[#009EE0] rounded-lg py-3 px-3 text-xl font-semibold"
                    >
                        <span>S&apos;inscrire</span>
                    </Button>
                </div>
                <span className="w-full text-center">
                    Déjà un compte ?{" "}
                    <Link href="/login" className="text-primary">
                        Se connecter
                    </Link>
                </span>
            </form>
        </div>
    );
}
