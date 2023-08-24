import FormContact from "./FormContact";

const PageContact = () => {
    return (
        <section className="text-center fade-in mx-auto pt-32 sm:pt-48 lg:pt-48">
            <h1 className="text-2xl md:text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                Contactez-nous
            </h1>
            <div className="flex flex-col gap-4 items-center pt-6 mt-16 mx-auto py-4 px-6 bg-white/70 rounded-lg text-light text-sm md:w-1/2">
                <FormContact />
            </div>
        </section>
    );
};

export default PageContact;
