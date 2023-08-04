import "../../styles/components/_homepageHeader.scss";
import Socials from "@/components/Homepage/Socials";
import ScrollLink from "@/components/Homepage/ScrollLink";
import Homes from "@/components/Homepage/Homes";
import ToTop from "@/components/ToTop";
import About from "@/components/Homepage/About";

export default function Home() {
    return (
        <div className="bg-bg relative isolate pt-14 lg:px-8 bg-fixed bg-center bg-cover bg-no-repeat bg-home">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-[calc(20%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-40"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <section className="mx-auto py-32 sm:py-48 lg:py-56 min-h-[100vh] relative">
                <div className="text-center fade-in">
                    <h1 className="text-4xl md:text-8xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                        Housechain
                    </h1>
                    <p className="mt-6 text-lg leading-8 uppercase font-extrabold bg-gradient-to-r from-purple to-red text-transparent bg-clip-text">
                        L'immobilier réinventé par la blockchain
                    </p>
                    <div className="mt-12 pt-12 flex items-center justify-center gap-x-16 flex-col md:flex-row">
                        <a
                            href="#"
                            className="px-5 py-4 my-4 md:px-12 md:py-5 min-w-[250px] md:min-w-[300px] opacity-60 md:opacity-100 text-sm md:text-lg uppercase font-semibold text-bg md:text-white bg-white md:bg-transparent border-2 border-white shadow-sm hover:bg-white hover:text-bg duration-500"
                        >
                            S'inscrire
                        </a>
                        <a
                            href="#"
                            className="px-5 py-4 my-4 md:px-12 md:py-5 min-w-[250px] md:min-w-[300px] opacity-60 md:opacity-100 text-sm md:text-lg uppercase font-semibold text-bg md:text-white bg-white md:bg-transparent border-2 border-white shadow-sm hover:bg-white hover:text-bg duration-500"
                        >
                            Voir les propriétés{" "}
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="mt-10 md:m-5 flex justify-center gap-8 md:block md:absolute md:top-[350px] md:right-[40px]">
                    <Socials />
                </div>
                <ScrollLink />
                <ToTop />
            </section>

            <section
                id="about"
                className="mx-auto py-16 lg:py-16 bg-white/70 min-h-[100vh]"
            >
                <About />
            </section>

            <section className="mx-auto py-32 sm:py-48 lg:py-56">
                <Homes />
            </section>
        </div>
    );
}
