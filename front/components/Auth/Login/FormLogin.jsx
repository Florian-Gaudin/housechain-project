"use client";

import Button from "@/components/Fields/Button";
import Link from "next/link";
import Input from "@/components/Form/Input";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import LoaderIcon from "@/components/Icons/LoaderIcon";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function FormLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const inputProps = { register, errors };
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [decodedCallbackURL, setDecodedCallbackURL] = useState("/"); // url de redirection par défaut

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Obtenir l'URL actuelle de la page
            const currentURL = window.location.href;

            // Rechercher le paramètre "callbackUrl="
            const callbackParam = "callbackUrl=";
            const startIndex = currentURL.indexOf(callbackParam);

            if (startIndex !== -1) {
                // Extraire l'URL après le paramètre "callbackUrl="
                const callbackURL = currentURL.substring(
                    startIndex + callbackParam.length
                );

                // Décoder l'URL encodée
                let decodedCallbackURL = decodeURIComponent(callbackURL);
                // Vérifier si l'URL contient "8000" et le remplacez par "3000"
                if (decodedCallbackURL.includes("8000")) {
                    decodedCallbackURL = decodedCallbackURL.replace(
                        "8000",
                        "3000"
                    );
                }
                setDecodedCallbackURL(decodedCallbackURL);
            }
        }
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        setLoading(true);
        signIn("credentials", {
            username: data.username,
            password: data.password,
            redirect: false,
        }).then((r) => {
            setLoading(false);
            console.log(r);
            if (r.error) {
                console.log(r); // TODO: changer l'erreur
            }
            router.push(decodedCallbackURL);
            // if (r.url !== null) {
            // }
        });
    };

    return (
        <div className="py-4 px-6 bg-white text-light text-sm md:w-1/2">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                <Input
                    type="email"
                    name="username"
                    label="Adresse mail"
                    className="border py-2 px-2"
                    placeholder="adresse email"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <Input
                    type="password"
                    name="password"
                    label="Mot de passe"
                    className="border py-2 px-2"
                    validation={{ required: true }}
                    {...inputProps}
                />
                <div className="flex justify-center w-full gap-4 text-white rounded-lg">
                    <Button
                        disabled={loading}
                        type="submit"
                        title="Se connecter"
                        className="bg-[#009EE0] rounded-lg py-3 px-3 text-xl font-semibold"
                    >
                        {loading && (
                            <LoaderIcon className="animate-spin h-5 w-5" />
                        )}
                        <span>Se connecter</span>
                    </Button>
                </div>
                <span className="w-full text-center">
                    Pas encore inscrit ?{" "}
                    <Link href="/register" className="text-primary">
                        Inscrivez-vous
                    </Link>
                </span>
            </form>
        </div>
    );
}
