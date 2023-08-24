import FormLogin from "@/components/Auth/Login/FormLogin";
import { signIn } from "next-auth/react";

export default function PageLogin() {
    return (
        <section className="text-center fade-in mx-auto pt-32 sm:pt-48 lg:pt-48">
            <h1 className="text-2xl md:text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                Se connecter
            </h1>
            <div className="flex flex-col gap-4 items-center pt-6 mt-16 mx-auto py-4 px-6 bg-white/70 rounded-lg text-light text-sm md:w-1/2">
                <button
                    onClick={() => signIn("google")}
                    type="button"
                    className="flex items-center font-semibold justify-center h-14 px-6 mt-4 mx-auto text-xl transition-colors duration-300 bg-white border border-bg text-bg rounded-lg focus:shadow-outline hover:bg-bglight"
                >
                    <img
                        src="google.svg"
                        alt="google icone"
                        className="w-8 h-8 mr-5"
                    />

                    <span>Continuer avec Google</span>
                </button>
                <hr className="w-1/3 mt-8 border-t border-bg" />
                <span>ou</span>
                <FormLogin />
            </div>
        </section>
    );
}
