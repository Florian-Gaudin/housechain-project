import "../../styles/components/_homepageHeader.scss";
import ToTop from "../Fields/ToTop";
import ScrollLink from "./ScrollLink";
import Socials from "./Socials";

const Welcome = () => {
    return (
        <>
            <div className="text-center fade-in">
                <h1 className="text-4xl md:text-8xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Housechain
                </h1>
                <p className="mt-6 text-lg leading-8 uppercase font-extrabold bg-gradient-to-r from-purple to-red text-transparent bg-clip-text">
                    L'immobilier réinventé par la blockchain
                </p>
                <div className="mt-12 pt-12 flex items-center justify-center gap-x-16 flex-col md:flex-row">
                    <a
                        href="/register"
                        className="px-5 py-4 my-4 md:px-12 md:py-5 min-w-[250px] md:min-w-[300px] opacity-60 md:opacity-100 text-sm md:text-lg uppercase font-semibold text-bg md:text-white bg-white md:bg-transparent border-2 border-white shadow-sm hover:bg-white hover:text-bg duration-500"
                    >
                        S'inscrire
                    </a>
                    <a
                        href="/dashboard"
                        className="px-5 py-4 my-4 md:px-12 md:py-5 min-w-[250px] md:min-w-[300px] opacity-60 md:opacity-100 text-sm md:text-lg uppercase font-semibold text-bg md:text-white bg-white md:bg-transparent border-2 border-white shadow-sm hover:bg-white hover:text-bg duration-500"
                    >
                        Voir les propriétés <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
            <div className="mt-10 md:m-5 flex justify-center gap-8 md:block md:absolute md:top-[350px] md:right-[40px]">
                <Socials />
            </div>
            <ScrollLink />
            <ToTop />
        </>
    );
};

export default Welcome;
