"use client";
import "../../styles/components/_homepageHeader.scss";
import { useEffect } from "react";

const About = () => {
    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > threshold) {
                entry.target.classList.remove("reveal");
                observer.unobserve(entry.target);
            }
        });
    };
    const options = {
        root: null, // Use the viewport as the root element
        rootMargin: "0px",
        threshold: 0.1, // Adjust the threshold as needed (0.1 means 10% of the element should be visible)
    };

    useEffect(() => {
        document.documentElement.classList.add("reveal-loaded");

        window.addEventListener("DOMContentLoaded", function () {
            const observer = new IntersectionObserver(handleIntersect, options);
            const targets = document.querySelectorAll(".reveal");
            targets.forEach(function (target) {
                observer.observe(target);
            });
        });
    }, []);

    return (
        <div className="text-center">
            <div className="reveal-1">
                <h4 className="mb-5 pb-5 text-4xl leading-8 uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Qui sommes-nous ?
                </h4>
                <h2 className="text-4xl md:text-8xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Housechain
                </h2>
            </div>
            <p className="mt-6 text-2xl text-bg leading-10 tracking-widest font-bold max-w-[1000px] text-justify mx-auto reveal-2">
                <span className="uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Housechain
                </span>{" "}
                a pour vocation de devenir le premier crypto-actif immobilier en
                France et dans le monde. Que vous soyez érudits ou novices dans
                l’univers web 3.0,&nbsp;
                <span className="uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Housechain
                </span>{" "}
                vous propose de diversifier vos investissements, en offrant une
                solution tangible mêlant immobilier, crypto-actifs et NFT. Grâce
                à la technologie Blockchain, il est désormais possible
                d’investir dans l’immobilier. Et ce, peu importe la taille de
                votre portefeuille.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                {/* <a
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
                </a> */}
            </div>
        </div>
    );
};

export default About;
