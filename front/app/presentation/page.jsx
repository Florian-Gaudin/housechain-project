"use client";
import PageContact from "@/components/Contact/PageContact";
import Header from "@/components/Include/_header";
import PolygonClipPath from "@/components/PolygonClippath";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/styles/components/presentation.scss";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Logo from "@/components/Homepage/Logo";
import indexSvg from "@/public/assets/svg/index-svg";

const Contact = () => {
    return (
        <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <div className="flex w-full h-full items-center justify-center">
                            <a href="/">
                                <h1 className="text-4xl md:text-8xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                    Housechain
                                </h1>
                                <h4 className="mt-10 pt-10 text-4xl md:text-2xl text-center text-white">
                                    Un projet développé par
                                </h4>
                                <h3 className="mt-10 text-4xl md:text-6xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                    Florian Gaudin
                                </h3>
                                <h4 className="mt-5 pt-5 text-4xl md:text-2xl text-center text-white">
                                    présenté le 29 août 2023
                                </h4>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-4xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                        </a>{" "}
                        <p className="mt-10 text-4xl md:text-6xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                            Sommaire
                        </p>
                        <div className="grid grid-cols-3 mb-10">
                            <h3 className="mt-10 text-2xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 1 <br />
                                L'univers Housechain
                            </h3>
                            <h3 className="mt-10 text-2xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 2 <br />
                                La naissance de l'application
                            </h3>
                            <h3 className="mt-10 text-2xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 3 <br />
                                L'application Next.js
                            </h3>
                        </div>
                        <div className="grid grid-cols-3 grid-rows-2 gap-4">
                            <div className="">
                                <ul className="list-disc text-left pl-10 ml-10">
                                    <h5 className="mb-3 text-xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        Contexte de l'application : <br />
                                        bienvenue dans l'univers Housechain !
                                    </h5>
                                    <li className="text-white text-xl p-2">
                                        La marque Housechain
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Objectifs de l'application
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Le public visé
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Types de profils et fonctionnalités
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-between flex-col">
                                <ul className="list-disc text-left pl-10 ml-10">
                                    <h5 className="mb-3 text-xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        Modélisation de la base de données
                                    </h5>
                                    <li className="text-white text-xl p-2">
                                        MCD, cardinalités et MLD
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Un mot sur le dictionnaire de données
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        La gestion des entités dans l'interface
                                        administrateur
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-between flex-col">
                                <ul className="list-disc text-left pl-10 ml-10">
                                    <h5 className="mb-3 text-xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        Authentification et session
                                    </h5>
                                    <li className="text-white text-xl p-2">
                                        Diagramme de cas d'utilisation (UML)
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        NextAuth et la session utilisateur
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Récupération et affichage des données
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-between flex-col">
                                <ul className="list-disc text-left pl-10 ml-10">
                                    <h5 className="mb-3 text-xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        Conception de l'application : <br />
                                        l'aventure Housechain commence !
                                    </h5>
                                    <li className="text-white text-xl p-2">
                                        Arborescence du site
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Description des pages
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Charte graphique
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-between flex-col">
                                <ul className="list-disc text-left pl-10 ml-10">
                                    <h5 className="mb-3 text-xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        Les technos utilisées
                                    </h5>
                                    <h5 className="mb-3 text-xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        Mise en place de l'API Rest avec Symfony
                                    </h5>
                                    <li className="text-white text-xl p-2">
                                        Création des controllers et attributs
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Un cas particulier : la mise à jour des
                                        statuts des propriétés
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Gestion des routes et documentation
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Sécurisation des accès par JWT
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-between flex-col">
                                <ul className="list-disc text-left pl-10 ml-10">
                                    <h5 className="mb-3 text-xl text-center uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        Julien, un nouveau visiteur
                                    </h5>
                                    <li className="text-white text-xl p-2">
                                        Julien parcourt le site
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Julien souhaite s'inscrire : le
                                        processus d'inscription
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Julien sur le dashboard : l'usage des
                                        filtres grâce au reducer
                                    </li>
                                    <li className="text-white text-xl p-2">
                                        Julien ajoute ses cryptos préférées à
                                        ses favoris
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 1 : L'univers Housechain - Contexte de
                                l'application
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                La marque Housechain - Les objectifs
                            </h3>
                        </a>
                        <div className="flex justify-between w-4/5 mx-auto">
                            <div className="text-justify text-white mt-5">
                                <h3 className="text-4xl mb-2 mt-10">
                                    <span className="mt-5 m-5 text-4xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        Housechain
                                    </span>
                                    en quelques mots:
                                </h3>
                                <ul className="list-disc text-2xl mt-10">
                                    <li className="mt-5">
                                        une startup émergente
                                    </li>
                                    <li className="mt-5">
                                        fusion du patrimoine immobilier et de la
                                        blockchain
                                    </li>
                                    <li className="mt-5">
                                        simplification de l'investissement
                                        immobilier
                                    </li>
                                    <li className="mt-5">
                                        rapide, accessible et sécurisé
                                    </li>
                                    <li className="mt-5">
                                        biens immobiliers fractionnés sous forme
                                        de tokens blockchain
                                    </li>
                                </ul>
                            </div>
                            <div className="text-justify text-white mt-5">
                                <h3 className="text-4xl mb-2 mt-10">
                                    Les objectifs de l'application
                                    <span className="mt-5 m-5 text-4xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        Housechain
                                    </span>
                                </h3>
                                <ul className="list-disc text-2xl mt-10">
                                    <li className="mt-5">
                                        faire connaître sa marque et les
                                        services qu’elle propose
                                    </li>
                                    <li className="mt-5">
                                        toucher un large public d'investisseurs
                                    </li>
                                    <li className="mt-5">
                                        offrir une interface moderne, élégante
                                        et intuitive
                                    </li>
                                    <li className="mt-5">
                                        faciliter la navigation et la recherche
                                        de biens immobiliers
                                    </li>
                                    <li className="mt-5">
                                        accessibles aux utilisateurs les moins
                                        technophiles
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="text-justify text-white mt-5">
                                <h3 className="text-4xl mb-2 mt-10">
                                    Un déploiement en{" "}
                                    <span className="mt-5 m-5 text-4xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        4 phases
                                    </span>
                                </h3>
                                <ul className="list-disc text-2xl mt-10">
                                    <li className="mt-5">
                                        page d’accueil, concept et actualités
                                    </li>
                                    <li className="mt-5">
                                        interface administrateur
                                    </li>
                                    <li className="mt-5">
                                        tableau de bord personnalisé pour les
                                        utilisateurs
                                    </li>
                                    <li className="mt-5">
                                        transactions sécurisées via le réseau
                                        Ethereum
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 1 : L'univers Housechain - Contexte de
                                l'application
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Public visé & Accessibilité
                            </h3>
                        </a>
                        <div className="flex justify-between w-4/5 mx-auto">
                            <div className="text-justify text-white mt-10">
                                <h3 className="text-4xl mb-2 mt-10">
                                    Le
                                    <span className="mt-5 m-5 text-4xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        public cible
                                    </span>
                                </h3>
                                <ul className="list-disc text-2xl mt-10">
                                    <li className="mt-5">
                                        petits investisseurs particuliers -
                                        générer un revenu locatif passif
                                    </li>
                                    <li className="mt-5">
                                        investisseurs expérimentés -
                                        diversification du portefeuille
                                    </li>
                                    <li className="mt-5">
                                        jeunes investisseurs - enthousiastes de
                                        la technologie
                                    </li>
                                    <li className="mt-5">
                                        familles - novices en immobilier
                                    </li>
                                    <li className="mt-5">
                                        investisseurs internationaux - éliminer
                                        les barrières géographiques
                                    </li>
                                </ul>
                            </div>
                            <div className="text-justify text-white mt-10">
                                <h3 className="text-4xl mb-2 mt-10">
                                    <span className="mt-5 m-5 text-4xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        Accessibilité
                                    </span>{" "}
                                    de l'application :
                                </h3>

                                <ul className="list-disc text-2xl mt-10">
                                    <li className="mt-5">
                                        <h3 className="mb-2 mt-10">
                                            Les avantages de{" "}
                                            <span className="text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                                Tailwind et Next.js
                                            </span>
                                        </h3>
                                    </li>
                                    <li className="mt-5">
                                        responsive, balises alt, sr-only
                                    </li>
                                    <li className="mt-5">
                                        performances Next.js : SSR et
                                        préchargement des pages
                                    </li>
                                    <li className="mt-5">
                                        URL compréhensibles et significatives
                                        (routeur Next)
                                    </li>
                                    <li className="mt-5">
                                        référencement optimisé, SEO-friendly
                                    </li>
                                    <li className="mt-5">
                                        future application React Native = API
                                        Symfony
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 1 : L'univers Housechain - Contexte de
                                l'application
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Types de profils & Fonctionnalités
                            </h3>
                        </a>
                        <div className="flex items-center flex-col justify-center mx-auto w-4/5">
                            <h3 className="text-4xl mb-10">
                                <span className="mt-5 m-5 text-4xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                    3 types de profil
                                </span>
                            </h3>
                            <div className="grid gap-6 grid-cols-3">
                                <div className="relative bg-white py-6 px-6 rounded-3xl my-4 shadow-xl p-5 m-3">
                                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-move bg-gradient-to-r from-purple via-red to-purple left-4 -top-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="2em"
                                            viewBox="0 0 640 512"
                                        >
                                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z" />
                                        </svg>
                                    </div>
                                    <div className="mt-8">
                                        <h5 className="text-bg text-xl font-semibold my-2 uppercase tracking-widest">
                                            Simple Visiteur
                                        </h5>
                                        <div className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"></div>

                                        <div className="flex justify-between">
                                            <div className="my-2">
                                                <ul className="text-bg list-disc text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                                    <li>
                                                        Visualisation des
                                                        propriétés immobilières
                                                    </li>
                                                    <li>
                                                        Consultation des
                                                        actualités
                                                    </li>
                                                    <li>
                                                        Informations publiques
                                                        liées au concept
                                                    </li>
                                                    <li>
                                                        Contact avec l’équipe du
                                                        support
                                                    </li>
                                                    <li>
                                                        Inscription au site et
                                                        confirmation de l'email
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative bg-white py-6 px-6 rounded-3xl my-4 shadow-xl p-5 m-3">
                                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-move bg-gradient-to-r from-purple via-red to-purple left-4 -top-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="2em"
                                            viewBox="0 0 640 512"
                                        >
                                            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                        </svg>
                                    </div>
                                    <div className="mt-8">
                                        <h5 className="text-bg text-xl font-semibold my-2 uppercase tracking-widest">
                                            Utilisateur connecté
                                        </h5>
                                        <div className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"></div>

                                        <div className="flex justify-between">
                                            <div className="my-2">
                                                <ul className="text-bg list-disc text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                                    <li>
                                                        Toutes les
                                                        fonctionnalités
                                                        précédentes
                                                    </li>
                                                    <li>
                                                        Connexion au compte
                                                        personnel
                                                    </li>
                                                    <li>
                                                        Accès au tableau de bord
                                                        personnalisé
                                                    </li>
                                                    <li>
                                                        Aperçu du marché des
                                                        cryptomonnaies.
                                                    </li>
                                                    <li>
                                                        Suivi des propriétés
                                                        achetées / en favoris
                                                    </li>
                                                    <li>
                                                        Consultation du
                                                        portefeuille et des
                                                        revenus
                                                    </li>
                                                    <li>
                                                        Vérification des
                                                        transactions effectuées
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative bg-white py-6 px-6 rounded-3xl my-4 shadow-xl p-5 m-3">
                                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-move bg-gradient-to-r from-purple via-red to-purple left-4 -top-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="2em"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
                                        </svg>
                                    </div>
                                    <div className="mt-8">
                                        <h5 className="text-bg text-xl font-semibold my-2 uppercase tracking-widest">
                                            Administrateur
                                        </h5>
                                        <div className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"></div>

                                        <div className="flex justify-between">
                                            <div className="my-2">
                                                <ul className="text-bg list-disc text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                                    <li>
                                                        Toutes les
                                                        fonctionnalités
                                                        précédentes
                                                    </li>
                                                    <li>
                                                        Accès à l'interface
                                                        d'administration
                                                    </li>
                                                    <li>
                                                        Gestion des actualités
                                                        publiées ;
                                                    </li>
                                                    <li>
                                                        Gestion des propriétés
                                                        immobilières mises en
                                                        vente et des tokens
                                                        associés
                                                    </li>
                                                    <li>
                                                        Gestion des comptes
                                                        utilisateurs, des
                                                        transactions et des
                                                        portefeuilles
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="mt-3"
                                src="/images/presentation/role_users.png"
                                alt=""
                            />
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 1 : L'univers Housechain - Conception de
                                l'application
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Arborescence du site
                            </h3>
                        </a>
                        <div className="mx-auto">
                            <img
                                className="max-w-1/2 mx-auto rounded-lg"
                                src="/images/presentation/arborescence.jpg"
                                alt=""
                            />
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 1 : L'univers Housechain - Conception de
                                l'application
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Description des pages
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Composants communs à toutes les pages
                            </h3>
                            <div className="flex justify-between py-10">
                                <img
                                    className="max-w-[700px] mx-auto rounded-lg"
                                    src="/images/presentation/home_menu.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[700px] mx-auto rounded-lg"
                                    src="/images/presentation/home_nav.jpg"
                                    alt=""
                                />
                            </div>
                            <img
                                className="max-w-[80%] mx-auto rounded-lg"
                                src="/images/presentation/loader.png"
                                alt=""
                            />
                            <div className="flex py-10">
                                <img
                                    className="max-w-[400px] w-1/6 mx-auto rounded-lg object-cover"
                                    src="/images/presentation/nav_unlogged.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[400px] w-1/6 mx-auto rounded-lg object-cover"
                                    src="/images/presentation/nav_logged.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[400px] w-1/6 mx-auto rounded-lg object-cover"
                                    src="/images/presentation/nav_admin.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="max-h-[300px] w-4/5 mx-auto py-10">
                                <img
                                    src="/images/presentation/footer.jpg"
                                    alt=""
                                />
                            </div>
                            <h3 className="py-10 text-center text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Page d'accueil
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/home_header.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/section2.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/section3.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/section4.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/section5.jpg"
                                    alt=""
                                />
                            </div>
                            <h3 className="py-10 text-center text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Dashboard
                            </h3>
                            <div className="flex py-10 gap-4">
                                <img
                                    className="max-h-[70vh] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/dashboard_menu_close.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-h-[70vh] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/dashboard_menu_logged.png"
                                    alt=""
                                />
                                <img
                                    className="max-h-[70vh] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/dashboard_menu_open.jpg"
                                    alt=""
                                />
                                <img
                                    className="my-auto mx-auto rounded-lg object-cover"
                                    src="/images/presentation/logged_button.png"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/dashboard_empty.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/dashboard_card.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/button_inactive.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/button_active.png"
                                    alt=""
                                />
                            </div>
                            <h3 className="py-10 text-center text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Les pages de formulaire
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/inscription.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/connexion.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/contact.png"
                                    alt=""
                                />
                                <div className="flex justify-between mt-3">
                                    <img
                                        className="max-w-[60%] mx-auto rounded-lg object-cover"
                                        src="/images/presentation/form_button_off.png"
                                        alt=""
                                    />
                                    <img
                                        className="max-w-[60%] mx-auto rounded-lg object-cover"
                                        src="/images/presentation/form_button_on.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <h3 className="py-10 text-center text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Interface administrateur
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/admin_property.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/admin_security_token.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/admin_image.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 1 : L'univers Housechain - Conception de
                                l'application
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Charte graphique
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                La palette de couleurs
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/palette.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/title.jpg"
                                    alt=""
                                />
                                <p className="font-bold text-2xl txt-bg pt-10">
                                    Classes Tailwind : font-extrabold bg-move
                                    bg-gradient-to-r from-purple via-red
                                    to-purple text-transparent bg-clip-text
                                </p>
                            </div>

                            <h3 className="py-10 text-center text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Les polices de caractère
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/montserrat.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/montserratalt.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[60%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/montserratalt1.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 2 : La naissance de l'application -
                                Modélisation de la base de données
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                MCD, cardinalités et MLD
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                MCD, cardinalités et MLD
                            </h3>
                            <h3 className="pt-10 text-center text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Modèle Conceptuel de données
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/mcd.jpg"
                                    alt=""
                                />
                            </div>
                            <h3 className="pt-10 text-center text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Cardinalités : quelques exemples
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <p className="font-bold text-2xl txt-bg pt-10">
                                    Une{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        propriété{" "}
                                    </span>
                                    n’a pas obligatoirement d’
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        image{" "}
                                    </span>{" "}
                                    et mais elle peut en avoir une ou plusieurs.{" "}
                                    <br /> Une{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        image{" "}
                                    </span>{" "}
                                    n’a pas non plus obligatoirement de{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        propriété{" "}
                                    </span>{" "}
                                    et peut en avoir une ou plusieurs.
                                </p>
                                <p className="font-bold text-2xl txt-bg pt-10">
                                    Un{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        security token{" "}
                                    </span>{" "}
                                    a obligatoirement une{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        propriété{" "}
                                    </span>{" "}
                                    et ne peut en avoir qu’une seule. <br /> Une{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        propriété{" "}
                                    </span>{" "}
                                    n’a pas obligatoirement de{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        security token{" "}
                                    </span>{" "}
                                    , et elle ne peut en avoir qu’un seul.
                                </p>
                                <p className="font-bold text-2xl txt-bg pt-10">
                                    Un{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        security token{" "}
                                    </span>{" "}
                                    n’a pas obligatoirement de{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        portefeuille{" "}
                                    </span>
                                    , mais il peut en avoir un ou plusieurs.{" "}
                                    <br /> Un{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        portefeuille{" "}
                                    </span>{" "}
                                    a obligatoirement un{" "}
                                    <span className="text-center text-2xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                        security token{" "}
                                    </span>{" "}
                                    et ne peut en avoir qu’un seul.
                                </p>
                            </div>
                            <h3 className="pt-10 text-center text-4xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Modèle Logique de données
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/mld.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 2 : La naissance de l'application -
                                Modélisation de la base de données
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Un mot sur le dictionnaire de données
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Dictionnaire de données
                            </h3>

                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/bdd_property.jpg"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/bdd_user.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 2 : La naissance de l'application -
                                Modélisation de la base de données
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                La gestion des entités dans l'interface
                                administrateur
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Gestion des entités dans l'interface
                                administrateur
                            </h3>
                            <h3 className="pt-10 text-center text-2xl uppercase font-extrabold text-bg">
                                php bin/console make:entity
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/entity1.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/entity2.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/entity3.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/entity4.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/entity5.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/entity6.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/entity7.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 2 : La naissance de l'application - Les
                                technos utilisées
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Les technos utilisées dans l'application
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Les technos utilisées
                            </h3>
                            <h3 className="pt-10 text-center text-2xl uppercase font-extrabold text-bg">
                                p.41 à 51
                            </h3>
                            <div className="flex flex-wrap items-center py-10 gap-4">
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/symfony.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/og.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] h-[150px] mx-auto rounded-lg"
                                    src="/images/presentation/twig-logo.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/composer.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/nelmio.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/faker.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/jwt.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/league.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/next.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/nextauth.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/redux.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/reacthookform.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[20%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/swiper.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 2 : La naissance de l'application - Mise
                                en place de l'API Rest avec Symfony
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Création des controllers et attributs
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Création des controllers et ajout des attributs
                            </h3>
                            <h3 className="pt-10 text-center text-2xl uppercase font-extrabold text-bg">
                                Explications détaillées p.60 à 75
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/api1.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/api2.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg"
                                    src="/images/presentation/api3.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/api4.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/api5.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/api6.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 2 : La naissance de l'application - Mise
                                en place de l'API Rest avec Symfony
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Un cas particulier : la mise à jour des statuts
                                des propriétés
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Cas particulier :<br /> la mise à jour des
                                statuts
                            </h3>
                            <h3 className="pt-10 text-center text-2xl uppercase font-extrabold text-bg">
                                Explications détaillées p.60 à 75
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/update_property.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 2 : La naissance de l'application - Mise
                                en place de l'API Rest avec Symfony
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Gestion des routes et documentation
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Gestion des routes et documentation
                            </h3>
                            <h3 className="pt-10 text-center text-2xl uppercase font-extrabold text-bg">
                                Explications détaillées p.60 à 75
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/docu1.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/docu2.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/docu3.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/docu4.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/api7.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/api10.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 2 : La naissance de l'application - Mise
                                en place de l'API Rest avec Symfony
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Sécurisation des accès par JWT
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Sécurisation des accès par JWT
                            </h3>
                            <h3 className="pt-10 text-center text-2xl uppercase font-extrabold text-bg">
                                Explications détaillées p.60 à 75
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/secu1.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/secu2.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/secu3.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/secu4.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/api8.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/api9.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 3 : L'application NEXT.js -
                                Authentification et session
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Diagramme de cas d'utilisation
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Diagramme de cas d'utilisation
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/uml.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 3 : L'application NEXT.js -
                                Authentification et session
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                NextAuth et la session utilisateur
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                NextAuth et la session utilisateur
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/auth1.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/auth2.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/auth3.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 3 : L'application NEXT.js -
                                Authentification et session
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Récupération et affichage des données
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Récupération et affichage des données
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/data1.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/data2.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/data3.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/data4.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 3 : L'application NEXT.js - Julien, un
                                nouveau visiteur
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Julien parcourt le site
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="p-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Julien parcourt le site <br />
                                <br />
                                <br />
                                <br />
                                Julien souhaite s'inscrire : <br /> le processus
                                d'inscription
                                <br />
                            </h3>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 3 : L'application NEXT.js - Julien, un
                                nouveau visiteur
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Julien sur le dashboard : l'usage des filtres
                                grâce au reducer
                            </h3>
                        </a>
                        <div className="bg-white/90 rounded-lg w-[90%] mx-auto mt-5">
                            <h3 className="pt-10 text-center text-6xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Julien sur le dashboard :<br /> l'usage des
                                filtres grâce au reducer
                            </h3>
                            <div className="flex flex-col py-10 gap-4">
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/data1.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/data2.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/data3.png"
                                    alt=""
                                />
                                <img
                                    className="max-w-[80%] mx-auto rounded-lg object-cover"
                                    src="/images/presentation/data4.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="bg-bg relative isolate bg-fixed bg-center bg-cover bg-no-repeat bg-home h-[100vh] w-full overflow-x-hidden">
                        <PolygonClipPath />
                        <a href="/">
                            <h1 className="mt-5 ml-5 text-4xl md:text-6xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Housechain
                            </h1>
                            <h2 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Partie 3 : L'application NEXT.js - Julien, un
                                nouveau visiteur
                            </h2>
                            <h3 className="mt-5 ml-5 text-xl text-left uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                Julien ajoute ses cryptos préférées à ses
                                favoris
                            </h3>
                        </a>
                    </div>{" "}
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Contact;
