"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validator from "validator";
import { object, ref, string } from "yup";
import Button from "@/components/Fields/Button";
import Input from "@/components/Form/Input";

import AuthError from "@/components/error/AuthError.jsx";
import { useSession } from "next-auth/react";
import LoaderIcon from "@/components/Icons/LoaderIcon";

const schema = object({
    name: string()
        .required("Veuillez entrer votre nom.")
        .min(3, "Doit contenir entre 3 et 16 caractères.")
        .max(16, "Doit contenir entre 3 et 16 caractères.")
        .trim(),
    surname: string()
        .required("Veuillez entrer votre prénom.")
        .min(3, "Doit contenir entre 3 et 16 caractères.")
        .max(16, "Doit contenir entre 3 et 16 caractères.")
        .trim(),
    mail: string()
        .required("Veuillez entrer votre adresse email")
        .email("Adresse email invalide.")
        .trim(),
    password: string()
        .required("Veuillez choisir un mot de passe")
        .min(8, "Doit contenir entre 8 et 16 caractères.")
        .max(16, "Doit contenir entre 8 et 16 caractères.")
        .trim(),
    confirmPassword: string()
        .required("Merci de bien vouloir confirmer le mot de passe.")
        .oneOf(
            [ref("password"), null],
            "Les mots de passe ne correspondent pas !"
        ),
}).required();

export default function FormRegister() {
    const { data: session } = useSession();
    const router = useRouter();
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] =
        useState(false);
    useEffect(() => {
        if (session && session.user) {
            router.push("/");
        }
    }, [session]);

    const [error, setError] = useState({});

    const {
        control,
        register,
        getValues,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const inputProps = { register, errors };
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        const { name, surname, mail, password, confirmPassword } = data;

        // Use validator to avoid XSS attacks.
        const safeData = {
            name: validator.escape(name),
            surname: validator.escape(surname),
            mail: validator.escape(mail),
            password: validator.escape(password),
            confirmPassword: validator.escape(confirmPassword),
        };
        try {
            console.log(data);
            setLoading(true);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API}/api/register`,
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
                reset();
                setIsSuccessfullySubmitted(true);
                // L'utilisateur a été créé avec succès
                console.log("Utilisateur créé avec succès !");
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

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 text-left"
            >
                {isSuccessfullySubmitted && (
                    <div className="p-4 text-lg text-center text-bold rounded-lg bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                        Bienvenue chez Housechain !
                        <p className="m-2 text-justify text-bg">
                            Pour confirmer votre inscription, merci de vérifier
                            votre boîte mail et de cliquer sur le lien que nous
                            venons de vous envoyer.
                        </p>
                    </div>
                )}
                <Input
                    type="text"
                    name="name"
                    label="Votre nom"
                    className="border rounded-lg py-2 px-2"
                    placeholder="Jean"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <Input
                    type="text"
                    name="surname"
                    label="Votre prénom"
                    className="border rounded-lg py-2 px-2"
                    placeholder="Dupont"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <Input
                    type="email"
                    name="mail"
                    label="Votre adresse email"
                    className="border rounded-lg py-2 px-2"
                    placeholder="exemple@housechain.com"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <Input
                    type="password"
                    name="password"
                    label="Votre mot de passe"
                    placeholder="************"
                    className="border rounded-lg py-2 px-2"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    label="Confirmez votre mot de passe"
                    placeholder="************"
                    className="border rounded-lg py-2 px-2"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <div className="flex justify-center w-full gap-4 text-white rounded-lg items-center">
                    <Button
                        disabled={loading}
                        submitted={isSuccessfullySubmitted}
                        type="submit"
                        title="S'inscrire"
                        className="rounded-lg py-3 px-3 text-xl font-semibold bg-move bg-gradient-to-r from-purple via-red to-purple"
                    ></Button>
                    {error?.message && (
                        <AuthError error={error} setError={setError} />
                    )}
                    {loading && (
                        <LoaderIcon className="absolute left-50 animate-spin h-10 w-10" />
                    )}
                </div>
                <span className="w-full text-center">
                    Déjà inscrit ?{" "}
                    <Link href="/login" className="underline">
                        Connectez-vous
                    </Link>
                </span>
                <span className="w-full text-center">
                    <Link href="/" className="underline">
                        Retour à la page d'accueil
                    </Link>
                </span>
            </form>
        </>
    );
}
