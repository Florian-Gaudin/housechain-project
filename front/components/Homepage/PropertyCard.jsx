import indexSvg from "@/public/assets/svg/index-svg";

const PropertyCard = ({ propertyData, bestProperties, profitProperties }) => {
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
                                ( {propertyData.type.type_name} )
                            </span>
                        </h2>

                        <div className="mr-2 py-1 px-2 text-xs font-medium text-white"></div>
                    </div>
                    <div className="py-1 px-2 text-md font-medium text-bg">
                        {propertyData.description}
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
                            {Math.floor(Math.random() * 3001)} parts disponibles
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
                        <p className="text-sm font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">{`Rendement Net Cible : ${propertyData.yield} %`}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="text-white flex align-center text-sm px-5 py-3 uppercase font-title font-bold rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple">
                        Investir dans cette propriété !
                    </button>
                </div>
            </div>
        </div>

        // <div className="relative group" key={propertyData.id}>
        //     {/* Ajouter aux favoris */}
        //     <div className="group flex absolute top-5 right-5 items-center">
        //         <span className="p-1 m-1 text-sm scale-x-0 group-hover:scale-x-100 rounded-lg group-hover:bg-bglight/80 origin-right transition-all duration-1000">
        //             Ajouter aux favoris !
        //         </span>
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             height="2em"
        //             viewBox="0 0 512 512"
        //             className="color-anim"
        //         >
        //             <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
        //         </svg>
        //     </div>
        //     <svg
        //         xmlns="http://www.w3.org/2000/svg"
        //         height="2em"
        //         viewBox="0 0 512 512"
        //         className="absolute top-5 right-5 color-anim hidden"
        //     >
        //         <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        //     </svg>
        //     {/* Yield pourcentage si profitProperties = true */}
        //     {profitProperties ? (
        //         <div className="group flex absolute top-5 left-5 items-center">
        //             <p className="p-1 m-1 text-xl font-extrabold text-yellow2">{`R.S.I : ${propertyData.yield} %`}</p>
        //         </div>
        //     ) : null}
        //     {/* Image element + property datas */}
        //     {mainImage?.map((element) => (
        //         <div key={element.id}>
        //             <img
        //                 key={element.id}
        //                 className="max-h-[400px] w-full object-cover rounded-lg"
        //                 src={element.url}
        //                 alt={element.description}
        //             />
        //         </div>
        //     ))}
        //     <div className="absolute bottom-0 group-hover:bg-bglight/80 origin-bottom transition-all duration-1000 w-full py-5 px-5">
        //         <div className="scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-1000">
        //             <div className="flex justify-between pb-5">
        //                 <p className="text-xl bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text font-bold">
        //                     {propertyData.name}
        //                 </p>
        //                 <div className="flex items-center gap-2 color-anim">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         height="1em"
        //                         viewBox="0 0 384 512"
        //                         className="italic color-anim"
        //                     >
        //                         <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
        //                     </svg>
        //                     <p className="text-lg italic bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text font-bold">
        //                         {propertyData.city}
        //                     </p>
        //                 </div>
        //             </div>
        //             <p className="text-md italic font-light pb-6">
        //                 {propertyData.description}
        //             </p>
        //         </div>
        //         <div className="flex justify-center">
        //             <button className="text-bg flex align-center px-5 py-3 uppercase font-title font-bold rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple">
        //                 Investir dans cette propriété !
        //             </button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default PropertyCard;
