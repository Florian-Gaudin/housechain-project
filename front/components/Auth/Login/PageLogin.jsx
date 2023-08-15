import FormLogin from "@/components/Auth/Login/FormLogin";
import Button from "@/components/Fields/Button";
import { signIn } from "next-auth/react";

export default function PageLogin() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <section>
            <div className="flex flex-col items-center pt-6 mt-16">
                <h1 className="text-3xl font-bold uppercase mt-16">
                    se connecter
                </h1>
                <Button
                    onClick={handleClick}
                    type="button"
                    title="Se connecter avec Google"
                    className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-bg text-bg rounded-leg focus:shadow-outline hover:bg-bglight"
                >
                    <img
                        src=""
                        alt="logo google"
                        className="w-[20px] h-[20px]"
                    />
                    <span>Continuer avec Google</span>
                </Button>
                <span>----------------- ou -----------------</span>
                <FormLogin />
            </div>
        </section>
    );
}
