"use client";
import React, { useEffect, useState } from "react";
import variables from "../../styles/variables.module.scss";
import "../../styles/components/_homepageHeader.scss";
import Socials from "@/components/Homepage/Socials";
// import api from "../services/api";

export default function Home() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await api.get("/properties");
    //             setData(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }

    //     fetchData();
    // }, []);

    return (
        <div className="bg-bg relative isolate px-6 pt-14 lg:px-8 bg-fixed bg-center bg-cover bg-no-repeat bg-home">
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
            <section className="mx-auto py-32 sm:py-48 lg:py-56 min-h-[100vh]">
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
                            className="px-5 py-4 my-4 md:px-12 md:py-5 min-w-[250px] md:min-w-[300px] opacity-60 md:opacity-100 text-sm md:text-lg uppercase font-semibold text-bg md:text-white bg-white md:bg-transparent border-2 border-white shadow-sm hover:bg-white hover:text-bg duration-1000"
                        >
                            S'inscrire
                        </a>
                        <a
                            href="#"
                            className="px-5 py-4 my-4 md:px-12 md:py-5 min-w-[250px] md:min-w-[300px] opacity-60 md:opacity-100 text-sm md:text-lg uppercase font-semibold text-bg md:text-white bg-white md:bg-transparent border-2 border-white shadow-sm hover:bg-white hover:text-bg duration-1000"
                        >
                            Voir les propriétés{" "}
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <Socials />
            </section>

            <section className="mx-auto py-32 sm:py-48 lg:py-56 bg-white">
                <div className="text-center">
                    <h1 className="text-4xl md:text-8xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                        Housechain
                    </h1>
                    <p className="mt-6 text-sm leading-8 uppercase font-extrabold bg-gradient-to-r from-purple to-red text-transparent bg-clip-text">
                        L'immobilier réinventé par la blockchain
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="mx-auto py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl md:text-8xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                        Housechain
                    </h1>
                    <p className="mt-6 text-sm leading-8 uppercase font-extrabold bg-gradient-to-r from-purple to-red text-transparent bg-clip-text">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
