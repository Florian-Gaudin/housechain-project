"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validator from "validator";
import { object, ref, string } from "yup";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AuthError from "@/components/error/AuthError.jsx";

export default function FormRegister() {
    const [error, setError] = useState({});

    const router = useRouter();

    const {
        control,
        register,
        getValues,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({});

    const [loading, setLoading] = useState(false);
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
                router.push("/login");
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
        <div className="py-4 px-6 bg-white text-light text-sm md:w-1/2">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-7"
            >
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="name"
                            type="text"
                            variant="standard"
                            className="ml-[20px] mr-[20px]"
                            label="Name"
                            placeholder="Enter your name"
                            helperText={errors.name ? errors.name?.message : ""}
                            error={errors.name ? Boolean(true) : Boolean(false)}
                        />
                    )}
                />
                <Controller
                    name="surname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="surname"
                            type="text"
                            variant="standard"
                            className="ml-[20px] mr-[20px]"
                            label="Surname"
                            placeholder="Enter your surname"
                            helperText={
                                errors.surname ? errors.surname?.message : ""
                            }
                            error={
                                errors.surname ? Boolean(true) : Boolean(false)
                            }
                        />
                    )}
                />
                <Controller
                    name="mail"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="mail"
                            type="mail"
                            variant="standard"
                            className="ml-[20px] mr-[20px]"
                            label="mail"
                            placeholder="Enter your email"
                            helperText={errors.mail ? errors.mail?.message : ""}
                            autoComplete="off"
                            error={errors.mail ? Boolean(true) : Boolean(false)}
                        />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="password"
                            type="password"
                            variant="standard"
                            className="ml-[20px] mr-[20px]"
                            label="Password"
                            placeholder="Enter your password"
                            helperText={
                                errors.password ? errors.password?.message : ""
                            }
                            error={
                                errors.password ? Boolean(true) : Boolean(false)
                            }
                        />
                    )}
                />

                <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="confirmPassword"
                            type="password"
                            variant="standard"
                            className="ml-[20px] mr-[20px]"
                            label="Confirm password"
                            placeholder="Enter again your password"
                            helperText={
                                errors.confirmPassword
                                    ? errors.confirmPassword?.message
                                    : ""
                            }
                            error={
                                errors.confirmPassword
                                    ? Boolean(true)
                                    : Boolean(false)
                            }
                        />
                    )}
                />

                {error?.message && (
                    <AuthError error={error} setError={setError} />
                )}

                <Button
                    type="submit"
                    variant="outlined"
                    className="mt-[40px] ml-[20px] mr-[20px]"
                >
                    Register
                </Button>

                <Button
                    type="button"
                    variant="outlined"
                    color="warning"
                    className="mt-[40px] ml-[20px] mr-[20px]"
                >
                    <Link href="/signin">Go to sign-in</Link>
                </Button>

                <Button
                    type="button"
                    variant="outlined"
                    color="secondary"
                    className="ml-[20px] mr-[20px]"
                >
                    <Link href="/">Back to home page</Link>
                </Button>
            </form>
        </div>
    );
}
