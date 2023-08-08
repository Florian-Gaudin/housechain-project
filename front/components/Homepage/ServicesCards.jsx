import indexSvg from "@/public/assets/svg/index-svg";

const ServicesCards = () => {
    return (
        <div className="flex items-center justify-center mx-5">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                <div className="relative bg-white py-6 px-6 rounded-3xl my-4 shadow-xl p-5 m-3">
                    <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-move bg-gradient-to-r from-purple via-red to-purple left-4 -top-6">
                        {indexSvg.security}
                    </div>
                    <div className="mt-8">
                        <h5 className="text-bg text-xl font-semibold my-2 uppercase tracking-widest">
                            Fiabilité
                        </h5>
                        <div className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"></div>

                        <div className="flex justify-between">
                            <div className="my-2">
                                <p className="text-bg text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                    Recevez un loyer régulier et assuré grâce à
                                    la sécurité apportée par la blockchain.
                                </p>
                                <p className="text-bg text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                    Vous pouvez choisir la fréquence de vos
                                    loyers (hebdomadaire, mensuelle...).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative bg-white py-6 px-6 rounded-3xl my-4 shadow-xl p-5 m-3">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-move bg-gradient-to-r from-purple via-red to-purple left-4 -top-6">
                        {indexSvg.simplicity}
                    </div>
                    <div className="mt-8">
                        <h5 className="text-bg text-xl font-semibold my-2 uppercase tracking-widest">
                            Simplicité
                        </h5>
                        <div className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"></div>

                        <div className="flex justify-between">
                            <div className="my-2">
                                <p className="text-bg text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                    Investissez dans un bien immbobilier sans
                                    vous soucier de sa gestion (travaux,
                                    recherche de locataires, perception des
                                    loyers...).
                                </p>
                                <p className="text-bg text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                    Vous n'avez qu'à percevoir vos loyers&nbsp;!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-white py-6 px-6 rounded-3xl my-4 shadow-xl p-5 m-3">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-move bg-gradient-to-r from-purple via-red to-purple left-4 -top-6">
                        {indexSvg.flexibility}
                    </div>
                    <div className="mt-8">
                        <h5 className="text-bg text-xl font-semibold my-2 uppercase tracking-widest">
                            Flexibilité
                        </h5>
                        <div className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"></div>

                        <div className="flex justify-between">
                            <div className="my-2">
                                <p className="text-bg text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                    Suivez vos investissements sur votre tableau
                                    de bord personnel pour gérer votre
                                    portefeuille.
                                </p>
                                <p className="text-bg text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                    Achetez, vendez ou transférez vos parts
                                    autant que vous le voulez&nbsp;!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-white py-6 px-6 rounded-3xl my-4 shadow-xl p-5 m-3">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-move bg-gradient-to-r from-purple via-red to-purple left-4 -top-6">
                        {indexSvg.fast}
                    </div>
                    <div className="mt-8">
                        <h5 className="text-bg text-xl font-semibold my-2 uppercase tracking-widest">
                            Rapidité
                        </h5>
                        <div className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"></div>

                        <div className="flex justify-between">
                            <div className="my-2">
                                <p className="text-bg text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                    N'attendez plus de longs mois avant de
                                    passer chez le notaire...
                                </p>
                                <p className="text-bg text-lg m-2 pt-5 text-left tracking-wide leading-8">
                                    Devenez propriétaire en quelques clics et en
                                    quelques secondes !
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCards;
