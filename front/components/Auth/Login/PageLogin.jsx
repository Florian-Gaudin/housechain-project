import FormLogin from "@/components/Auth/Login/FormLogin";

export default function PageLogin({}) {
    return (
        <section>
            <div className="flex flex-col items-center pt-6 mt-16">
                <h1 className="text-3xl font-bold uppercase mt-16">
                    se connecter
                </h1>
                <FormLogin />
            </div>
        </section>
    );
}
