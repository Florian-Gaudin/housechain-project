import "../../styles/components/loader.scss";
import PolygonClipPath from "../PolygonClippath";

const Loader = () => {
    return (
        <div className="bg-bg relative isolate pt-14 bg-fixed bg-center bg-cover bg-no-repeat bg-home w-[100vw] h-[100vh] overflow-hidden">
            <PolygonClipPath />
            <div className="w-full h-full flex justify-center items-center">
                <p className="text-4xl md:text-8xl absolute top-[50%] uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Chargement...
                </p>
                <div className="loader">
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
