"use client";
import "../../styles/components/_homepageHeader.scss";
import { useEffect } from "react";
import ServicesCards from "./ServicesCards";
import InvestStepper from "./InvestStepper";

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
        threshold: 1, // Adjust the threshold as needed (0.1 means 10% of the element should be visible)
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
            <div className="reveal-4">
                <h4 className="mb-5 pb-5 text-4xl leading-8 uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Qui sommes-nous ?
                </h4>
            </div>
            <p className="mt-6 text-xl text-bg leading-8 tracking-widest font-bold w-2/3 text-justify mx-auto reveal-4">
                <span className="uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Housechain
                </span>{" "}
                a pour vocation de devenir le premier crypto-actif immobilier en
                France et dans le monde.
            </p>
            <p className="mt-6 text-xl text-bg leading-8 tracking-widest font-bold w-2/3 text-justify mx-auto reveal-4">
                Que vous soyez débutants ou confirmés dans l’univers web
                3.0,&nbsp;
                <span className="uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Housechain
                </span>{" "}
                vous propose de diversifier vos investissements, en offrant une
                solution tangible mêlant immobilier, crypto-actifs et NFT.
            </p>{" "}
            <p className="mt-6 text-xl text-bg leading-8 tracking-widest font-bold w-2/3 text-justify mx-auto reveal-4">
                Grâce à{" "}
                <span className="uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Housechain
                </span>{" "}
                , il est désormais possible d’investir dans l’immobilier{" "}
                <span className="uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    3.0
                </span>
                . Et ce, peu importe la taille de votre portefeuille.
            </p>
            <div className="mt-10 reveal-4">
                <h4 className="mb-5 pt-10 pb-5 text-4xl leading-8 uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Découvrez l'investissement immobilier 3.0
                </h4>
                <ServicesCards />
            </div>
            <div className="mt-10 reveal-4">
                <h4 className="mb-5 pt-10 pb-5 text-4xl leading-8 uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Comment investir ?
                </h4>
                <InvestStepper />
            </div>
        </div>
    );
};

export default About;
