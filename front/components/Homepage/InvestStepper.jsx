import React from "react";

const InvestStepper = () => {
    return (
        <div className="mx-auto flex flex-col p-6">
            <div className="">
                <button className="group my-4 w-2/3">
                    <div className="grid justify-center grid-cols-3 p-4 mx-auto space-y-8 lg:space-y-0 rounded-lg bg-bglight shadow-xl group-focus:bg-white">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <span className="text-3xl font-title uppercase font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                étape 1
                            </span>
                        </div>
                        <div className="flex flex-col justify-center w-full text-center col-span-full lg:col-span-2 lg:text-left">
                            <div className="flex items-center justify-between h-12 px-3 font-medium">
                                <span className="text-xl md:text-2xl">
                                    Créez votre compte et vérifiez votre
                                    identité.
                                </span>
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                            <div className="max-h-0 text-justify px-3 overflow-hidden duration-1000 group-focus:max-h-40">
                                <span className="mt-4">
                                    Remplissez le formulaire d'inscription et
                                    valider votre inscription en cliquant sur le
                                    lien que vous recevrez par e-mail.
                                    <br /> Et c'est tout ! <br /> La création de
                                    votre compte permettra l'identification et
                                    la création de votre portefeuille numérique.
                                </span>
                            </div>
                        </div>
                    </div>
                </button>
                <button className="group my-4 w-2/3">
                    <div className="grid justify-center grid-cols-3 p-4 mx-auto space-y-8 lg:space-y-0 rounded-lg bg-bglight shadow-xl group-focus:bg-white">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <span className="text-3xl font-title uppercase font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                étape 2
                            </span>
                        </div>
                        <div className="flex flex-col justify-center w-full text-center col-span-full lg:col-span-2 lg:text-left">
                            <div className="flex items-center justify-between h-12 px-3 font-medium">
                                <span className="text-xl md:text-2xl">
                                    Choisissez la propriété qui vous intéresse.
                                </span>
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                            <div className="max-h-0 text-justify px-3 overflow-hidden duration-1000 group-focus:max-h-40">
                                <span className="mt-4">
                                    Faites votre choix parmi une liste de biens
                                    sélectionnés par nos experts immobiliers.
                                    <br /> Utilisez nos filtres pour trouver les
                                    biens qui vous intéressent selon vos
                                    critères.
                                </span>
                            </div>
                        </div>
                    </div>
                </button>
                <button className="group my-4 w-2/3">
                    <div className="grid justify-center grid-cols-3 p-4 mx-auto space-y-8 lg:space-y-0 rounded-lg bg-bglight shadow-xl group-focus:bg-white">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <span className="text-3xl font-title uppercase font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                étape 3
                            </span>
                        </div>
                        <div className="flex flex-col justify-center w-full text-center col-span-full lg:col-span-2 lg:text-left">
                            <div className="flex items-center justify-between h-12 px-3 font-medium">
                                <span className="text-xl md:text-2xl">
                                    Investissez directement en Euros ou en USDT.
                                </span>
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                            <div className="max-h-0 text-justify px-3 overflow-hidden duration-1000 group-focus:max-h-40">
                                <span className="mt-4">
                                    L'achat est immédiat et garanti par la
                                    blockchain. Vous devenez légalement
                                    propriétaire immobilier par l'intermédiaire
                                    d'un smart contract.
                                </span>
                            </div>
                        </div>
                    </div>
                </button>
                <button className="group my-4 w-2/3">
                    <div className="grid justify-center grid-cols-3 p-4 mx-auto space-y-8 lg:space-y-0 rounded-lg bg-bglight shadow-xl group-focus:bg-white">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <span className="text-3xl font-title uppercase font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                étape 4
                            </span>
                        </div>
                        <div className="flex flex-col justify-center w-full text-center col-span-full lg:col-span-2 lg:text-left">
                            <div className="flex items-center justify-between h-12 px-3 font-medium">
                                <span className="text-xl md:text-2xl">
                                    Recevez vos premiers loyers.
                                </span>
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                            <div className="max-h-0 text-justify px-3 overflow-hidden duration-1000 group-focus:max-h-40">
                                <span className="mt-4">
                                    Vous pourrez percevoir les loyers de vos
                                    premiers investissements dès la première
                                    semaine directement dans votre portefeuille
                                    numérique.
                                </span>
                            </div>
                        </div>
                    </div>
                </button>
                <button className="group my-4 w-2/3">
                    <div className="grid justify-center grid-cols-3 p-4 mx-auto space-y-8 lg:space-y-0 rounded-lg bg-bglight shadow-xl group-focus:bg-white">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <span className="text-3xl font-title uppercase font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                                étape 5
                            </span>
                        </div>
                        <div className="flex flex-col justify-center w-full text-center col-span-full lg:col-span-2 lg:text-left">
                            <div className="flex items-center justify-between h-12 px-3 font-medium">
                                <span className="text-xl md:text-2xl">
                                    Réinvestissez ou revendez vos token
                                    Housechain.
                                </span>
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                            <div className="max-h-0 text-justify px-3 overflow-hidden duration-1000 group-focus:max-h-40">
                                <span className="mt-4">
                                    Vous pouvez conserver, échanger ou revendre
                                    facilement vos tokens.
                                </span>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default InvestStepper;
