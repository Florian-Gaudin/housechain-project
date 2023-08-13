import FormRegister from "@/components/Auth/Register/FormRegister";

export default function PageRegister({}) {
    return (
        <section>
            <div className="flex flex-col items-center pt-6 mt-16">
                <h1 className="text-3xl font-bold uppercase mt-16">
                    s&apos;inscrire
                </h1>
                <FormRegister />
            </div>
        </section>
    );
}
