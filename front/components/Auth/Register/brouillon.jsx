// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import validator from "validator";
// import { object, ref, string } from "yup";

// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// import AuthError from "@/components/error/AuthError.jsx";
// import { createCookies } from "@/app/api/auth/[...nextauth]/route";

// const schema = object({
//     name: string()
//         .required("Veuillez entrer votre nom.")
//         .min(3, "Doit contenir entre 3 et 16 caractères.")
//         .max(16, "Doit contenir entre 3 et 16 caractères.")
//         .trim(),
//     surname: string()
//         .required("Veuillez entrer votre prénom.")
//         .min(3, "Doit contenir entre 3 et 16 caractères.")
//         .max(16, "Doit contenir entre 3 et 16 caractères.")
//         .trim(),
//     mail: string()
//         .required("Veuillez entrer votre adresse email")
//         .email("Adresse email invalide.")
//         .trim(),
//     password_login: string()
//         .required("Veuillez choisir un mot de passe")
//         .min(8, "Doit contenir entre 8 et 16 caractères.")
//         .max(16, "Doit contenir entre 8 et 16 caractères.")
//         .trim(),
//     confirmPassword: string()
//         .required("Merci de bien vouloir confirmer le mot de passe.")
//         .oneOf(
//             [ref("password_login"), null],
//             "Les mots de passe ne correspondent pas !"
//         ),
// }).required();

// export default function FormRegister() {
//     const [error, setError] = useState({});

//     const router = useRouter();

//     const {
//         control,
//         register,
//         getValues,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm({
//         resolver: yupResolver(schema),
//     });

//     const [loading, setLoading] = useState(false);
//     const onSubmit = async (data) => {
//         const {
//             name,
//             surname,
//             mail,
//             password_login,
//             confirmPassword,
//             password,
//         } = data;

//         // Use validator to avoid XSS attacks.
//         const safeData = {
//             name: validator.escape(name),
//             surname: validator.escape(surname),
//             mail: validator.escape(mail),
//             password_login: validator.escape(password_login),
//             confirmPassword: validator.escape(confirmPassword),
//         };
//         try {
//             setLoading(true);
//             data.password = "password";
//             console.log(data);

//             const userRegister = await fetch(
//                 `${process.env.NEXT_PUBLIC_API}/api/register`,
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(data),
//                 }
//             );
//             const userRegisterResponse = await userRegister.json();
//             console.log(userRegisterResponse, userRegister);

//             if (!response.ok) {
//                 // Gérer les erreurs de l'API
//                 const responseData = await response.json();
//                 console.error(
//                     "Erreur lors de la création de l'utilisateur:",
//                     responseData
//                 );
//             } else {
//                 // L'utilisateur a été créé avec succès
//                 console.log("Utilisateur créé avec succès !");
//                 router.push("/login");
//             }
//         } catch (error) {
//             console.error(
//                 "Erreur réseau lors de la création de l'utilisateur:",
//                 error
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="py-4 px-6 bg-white text-light text-sm md:w-1/2">
//             <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="flex flex-col gap-7"
//             >
//                 <Controller
//                     name="name"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                         <TextField
//                             {...field}
//                             id="name"
//                             type="text"
//                             variant="standard"
//                             className="ml-[20px] mr-[20px]"
//                             label="Name"
//                             placeholder="Enter your name"
//                             helperText={errors.name ? errors.name?.message : ""}
//                             error={errors.name ? Boolean(true) : Boolean(false)}
//                         />
//                     )}
//                 />
//                 <Controller
//                     name="surname"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                         <TextField
//                             {...field}
//                             id="surname"
//                             type="text"
//                             variant="standard"
//                             className="ml-[20px] mr-[20px]"
//                             label="Surname"
//                             placeholder="Enter your surname"
//                             helperText={
//                                 errors.surname ? errors.surname?.message : ""
//                             }
//                             error={
//                                 errors.surname ? Boolean(true) : Boolean(false)
//                             }
//                         />
//                     )}
//                 />
//                 <Controller
//                     name="mail"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                         <TextField
//                             {...field}
//                             id="mail"
//                             type="mail"
//                             variant="standard"
//                             className="ml-[20px] mr-[20px]"
//                             label="mail"
//                             placeholder="Enter your email"
//                             helperText={
//                                 errors.email ? errors.email?.message : ""
//                             }
//                             autoComplete="off"
//                             error={
//                                 errors.email ? Boolean(true) : Boolean(false)
//                             }
//                         />
//                     )}
//                 />

//                 <Controller
//                     name="password_login"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                         <TextField
//                             {...field}
//                             id="password_login"
//                             type="password"
//                             variant="standard"
//                             className="ml-[20px] mr-[20px]"
//                             label="Password"
//                             placeholder="Enter your password"
//                             helperText={
//                                 errors.password ? errors.password?.message : ""
//                             }
//                             error={
//                                 errors.password ? Boolean(true) : Boolean(false)
//                             }
//                         />
//                     )}
//                 />

//                 <Controller
//                     name="confirmPassword"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                         <TextField
//                             {...field}
//                             id="confirmPassword"
//                             type="password"
//                             variant="standard"
//                             className="ml-[20px] mr-[20px]"
//                             label="Confirm password"
//                             placeholder="Enter again your password"
//                             helperText={
//                                 errors.confirmPassword
//                                     ? errors.confirmPassword?.message
//                                     : ""
//                             }
//                             error={
//                                 errors.confirmPassword
//                                     ? Boolean(true)
//                                     : Boolean(false)
//                             }
//                         />
//                     )}
//                 />

//                 {error?.message && (
//                     <AuthError error={error} setError={setError} />
//                 )}

//                 <Button
//                     type="submit"
//                     variant="outlined"
//                     className="mt-[40px] ml-[20px] mr-[20px]"
//                 >
//                     Register
//                 </Button>

//                 <Button
//                     type="button"
//                     variant="outlined"
//                     color="warning"
//                     className="mt-[40px] ml-[20px] mr-[20px]"
//                 >
//                     <Link href="/signin">Go to sign-in</Link>
//                 </Button>

//                 <Button
//                     type="button"
//                     variant="outlined"
//                     color="secondary"
//                     className="ml-[20px] mr-[20px]"
//                 >
//                     <Link href="/">Back to home page</Link>
//                 </Button>
//             </form>
//         </div>
//     );
// }