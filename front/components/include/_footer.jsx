import indexSvg from "@/public/assets/svg/index-svg";
import Logo from "../Homepage/Logo";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="flex flex-col">
            <div className="py-1 mb-4 bg-move bg-gradient-to-r from-purple via-red to-purple"></div>
            <div className="flex pt-5 justify-around">
                <a href="/">
                    <Logo />
                </a>
                <div className="flex flex-col justify-center">
                    <p className="font-title font-bold text-lg uppercase bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                        Suivez-nous
                    </p>
                    <div className="flex flex-row justify-center gap-5 p-2">
                        {indexSvg.facebook("fill-bglight cursor-pointer")}
                        {indexSvg.twitter("fill-bglight cursor-pointer")}
                    </div>
                </div>
                <div className="flex flex-col justify-center text-center">
                    <a
                        href="/contact"
                        className="font-title font-bold text-lg uppercase bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text"
                    >
                        Contactez-nous
                    </a>
                    <div className="flex flex-row justify-center gap-5 p-2">
                        <p className="text-bglight text-center">
                            contact@housechain.com
                            <br />
                            <a
                                href="/contact"
                                className="underline underline-offset-4"
                            >
                                Nous écrire
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-4 mx-5 border-t border-bglight">
                <p className="text-bglight p-2 mr-2">
                    Copyright {year} © Tous droits réservés –{" "}
                </p>
                <a href="/">
                    <span className="uppercase font-title bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                        Housechain
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Footer;
