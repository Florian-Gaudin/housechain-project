import indexSvg from "@/public/assets/svg/index-svg";

const PropertyCard = ({ propertyData }) => {
    const propertyImages = propertyData.property_images;
    let mainImage = [];
    propertyImages?.forEach((element) => {
        if (element.type === "main") {
            mainImage.push(element);
        }
    });

    return (
        <div className="max-w-sm mx-auto rounded-lg border-none overflow-hidden shadow-lg hover:shadow-xl">
            {mainImage?.map((element) => (
                <div key={element.id} className="relative">
                    <img
                        key={element.id}
                        className="max-h-[250px] w-full object-cover"
                        src={`http://localhost:8000/upload/images/property/${element.url}`}
                        alt={element.description}
                    />
                    <div className="group flex absolute top-5 right-5 items-center cursor-pointer bg-white/70 rounded-lg p-2">
                        {/* todo : ajouter le compteur automatique de likes */}
                        <span className="text-md font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text mr-2">
                            {Math.floor(Math.random() * 201)}
                        </span>
                        {indexSvg.heart}
                    </div>
                    <div className="mr-2 py-1 px-2 font-medium text-white absolute bottom-5 right-5 bg-white/70 rounded-lg p-2">
                        <div className="flex items-center gap-2 color-anim">
                            {indexSvg.location}
                            <p className="text-lg italic bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text font-bold">
                                {propertyData.city}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            {/* Ajouter aux favoris */}
            <div className="px-6 py-4 bg-white">
                <div className="mb-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-bg">
                            {propertyData.name}{" "}
                            <span className="italic text-sm">
                                - {propertyData.type.type_name}
                            </span>
                        </h2>

                        <div className="mr-2 py-1 px-2 text-xs font-medium text-white"></div>
                    </div>
                    <div className="py-1 px-2 text-md font-medium text-bg">
                        {propertyData.description}
                    </div>
                </div>
                <div className="flex justify-between flex-col">
                    <div className="flex items-center">
                        <p className="ml-2 text-sm font-medium">
                            Prix du token :{" "}
                            {propertyData.securityTokens[0].stPrice} €
                        </p>
                    </div>
                    <div className="flex items-center">
                        <p className="ml-2 text-sm font-medium">
                            {propertyData.securityTokens[0].stActualQuantity ===
                            0
                                ? "Produit épuisé"
                                : `${propertyData.securityTokens[0].stActualQuantity} parts disponibles`}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <p className="ml-2 text-sm font-medium">
                            Statut : {propertyData.status.type}
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="ml-2  text-sm font-medium text-white">
                        <p className="text-sm text-center pb-2 font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">{`Rendement Net Cible : ${propertyData.yield} %`}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a
                        href="/dashboard"
                        className="text-white flex align-center text-sm px-5 py-3 uppercase font-title font-bold rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"
                    >
                        Investir dans cette propriété !
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
