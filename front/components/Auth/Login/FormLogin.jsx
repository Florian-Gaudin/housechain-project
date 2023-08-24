"use client";

import Button from "@/components/Fields/Button";
import Link from "next/link";
import Input from "@/components/Form/Input";
import { useEffect, useState } from "react";
import LoaderIcon from "@/components/Icons/LoaderIcon";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validator from "validator";
import { object, string } from "yup";

const schema = object({
    username: string()
        .required("Veuillez entrer votre adresse email.")
        .email("Adresse email invalide.")
        .trim(),
    password: string().required("Veuillez entrer votre mot de passe.").trim(),
}).required();

export default function FormLogin() {
    const { data: session, status } = useSession();
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
    const [decodedCallbackURL, setDecodedCallbackURL] = useState("/dashboard"); // url de redirection par défaut

    useEffect(() => {
        if (session && status !== "unauthenticated") {
            router.push(decodedCallbackURL);
        }
    }, [session]);

    // rediriger l'utilisateur sur la page demandée avant le login
    useEffect(() => {
        const currentURL = window.location.href;
        if (currentURL !== `http://localhost:3000/login`) {
            // impossible de parametrer un env PUBLIC_URL ???
            // PUBLIC_URL = undefined
            console.log("hello", `${process.env.PUBLIC_URL}/login`, currentURL);
            // Obtenir l'URL actuelle de la page

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
                console.log(decodedCallbackURL);
            }
        }
    }, []);

    const onSubmit = (data) => {
        const { username, password } = data;

        // Use validator to avoid XSS attacks.
        const safeData = {
            username: validator.escape(username),
            password: validator.escape(password),
        };
        console.log(data);
        setLoading(true);
        signIn("credentials", {
            username: data.username,
            password: data.password,
            redirect: false,
        }).then((r) => {
            setLoading(false);
            console.log(r);
            if (status === "unauthenticated") {
                console.error("Erreur lors du login");
                router.push("/login");
            } else {
                router.push(decodedCallbackURL);
            }
        });
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
                <Input
                    type="password"
                    name="password"
                    label="Votre mot de passe"
                    placeholder="************"
                    className="border rounded-lg py-2 px-2"
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
                        title="Se connecter"
                        className="bg-move bg-gradient-to-r from-purple via-red to-purple rounded-lg py-3 px-3 text-xl font-semibold"
                    >
                        {loading && (
                            <LoaderIcon className="animate-spin h-5 w-5" />
                        )}
                        <span>Se connecter</span>
                    </Button>
                </div>
                <span className="w-full text-center">
                    Pas encore inscrit ?{" "}
                    <Link href="/register" className="underline">
                        Inscrivez-vous
                    </Link>
                </span>
                <span className="w-full text-center">
                    Mot de passe oublié ?{" "}
                    <Link href="/forgotpassword" className="underline">
                        Réinitialiser le mot de passe
                    </Link>
                </span>
            </form>
        </div>
    );
}
