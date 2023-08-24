"use client";

import Button from "@/components/Fields/Button";
import Link from "next/link";
import Input from "@/components/Form/Input";
import { useEffect, useState } from "react";
import LoaderIcon from "@/components/Icons/LoaderIcon";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validator from "validator";
import { object, string } from "yup";

const schema = object({
    mail: string()
        .required("Veuillez entrer votre adresse email.")
        .email("Adresse email invalide.")
        .trim(),
}).required();

export default function FormResetPassword() {
    const router = useRouter();
    const [error, setError] = useState({});

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const inputProps = { register, errors };
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        const { mail } = data;

        // Use validator to avoid XSS attacks.
        const safeData = {
            mail: validator.escape(mail),
        };
        try {
            setLoading(true);
            console.log(data);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API}/reset-password`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const responseData = await response.json();
            console.log(response, responseData);

            if (!response.ok) {
                // Gérer les erreurs de l'API
                const responseData = await response.json();
                console.error(
                    "Erreur lors de la création de l'utilisateur:",
                    responseData
                );
            } else {
                // L'utilisateur a été créé avec succès
                console.log("Mot de passe réinitialisé avec succès !");
                router.push("/login");
            }
        } catch (error) {
            console.error(
                "Erreur lors de la réinitialisation du mot de passe :",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-1/2">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 text-left"
            >
                <Input
                    type="email"
                    name="username"
                    label="Votre adresse email"
                    className="border rounded-lg py-2 px-2"
                    placeholder="exemple@housechain.com"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <div className="flex justify-center w-full gap-4 text-white rounded-lg">
                    {error?.message && (
                        <AuthError error={error} setError={setError} />
                    )}
                    <Button
                        disabled={loading}
                        type="submit"
                        title="Réinitialiser le mot de passe"
                        className="bg-move bg-gradient-to-r from-purple via-red to-purple rounded-lg py-3 px-3 text-xl font-semibold"
                    >
                        {loading && (
                            <LoaderIcon className="animate-spin h-5 w-5" />
                        )}
                        <span>Réinitialiser le mot de passe</span>
                    </Button>
                </div>
                <span className="w-full text-center">
                    <Link href="/" className="underline">
                        Retour à la page d'accueil
                    </Link>
                </span>
                <span className="w-full text-center">
                    <Link href="/login" className="underline">
                        Retour à la page de connexion
                    </Link>
                </span>
            </form>
        </div>
    );
}
