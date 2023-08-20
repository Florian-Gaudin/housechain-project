import ShowProperties from "./ShowProperties";

const StoreProperties = () => {
    return (
        <div className="my-5 py-5">
            <div className="text-center">
                <h1 className="text-4xl md:text-8xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Nos propriétés
                </h1>
                <ShowProperties />
            </div>
        </div>
    );
};

export default StoreProperties;
