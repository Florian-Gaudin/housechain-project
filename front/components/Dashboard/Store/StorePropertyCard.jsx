import indexSvg from "@/public/assets/svg/index-svg";

const StorePropertyCard = ({ property }) => {
    const propertyImages = property.property_images;
    let mainImage = [];
    propertyImages?.forEach((element) => {
        if (element.type === "main") {
            mainImage.push(element);
        }
    });

    return (
        <div className="flex flex-col rounded-lg bg-bg/70 p-2 border-none overflow-hidden shadow-lg hover:shadow-xl w-[45%]">
            <div className="w-full bg-white rounded-lg my-3">
                {mainImage?.map((element) => (
                    <div key={element.id} className="relative">
                        <img
                            key={element.id}
                            className="w-full object-cover rounded-lg"
                            src={element.url}
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
                                    {property.city}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Ajouter aux favoris */}
            </div>
            <div className="flex justify-around">
                <div className="flex flex-col w-1/2 h-full justify-between">
                    <div className="px-6 py-4 bg-white mt-3 rounded-lg">
                        <div className="mb-2">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-bg">
                                    {property.name}{" "}
                                    <span className="italic text-sm">
                                        ( {property.type.type_name} )
                                    </span>
                                </h2>

                                <div className="mr-2 py-1 px-2 text-xs font-medium text-white"></div>
                            </div>
                            <div className="py-1 px-2 text-md font-medium text-bg">
                                {property.description}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <img src="https://img.icons8.com/ios-glyphs/24/null/expand--v1.png" />
                                <p className="ml-2 text-sm font-medium">
                                    Prix du token :
                                </p>
                            </div>
                            <div className="flex items-center">
                                <img src="https://img.icons8.com/windows/24/null/bedroom.png" />
                                <p className="ml-2 text-sm font-medium">
                                    {Math.floor(Math.random() * 3001)} parts
                                    disponibles
                                </p>
                            </div>
                            <div className="flex items-center">
                                <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" />
                                <p className="ml-2 text-sm font-medium">
                                    Intérêt attendu par token :
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="ml-2  text-sm font-medium text-white">
                                <p className="text-sm font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">{`Rendement Net Cible : ${property.yield} %`}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[45%] h-full bg-white/70 rounded-lg"></div>
            </div>

            <div className="flex justify-center">
                <button className="text-white flex align-center text-sm px-5 py-3 uppercase font-title font-bold rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple m-3">
                    Investir dans cette propriété !
                </button>
            </div>
        </div>
    );
};

export default StorePropertyCard;
