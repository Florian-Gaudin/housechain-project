import indexSvg from "@/public/assets/svg/index-svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/components/_swiperDashboard.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";

const StorePropertyCard = ({ property }) => {
    const propertyImages = property.property_images;
    const token = property.securityTokens[0];
    const tokenId = token.id;
    const totalToken = token.stTotalQuantity;
    const soldToken = totalToken - token.stActualQuantity;
    const availableToken = token.stTotalQuantity - soldToken;
    const percentageSoldToken = Math.ceil((soldToken * 100) / totalToken);
    const totalPrice = property.totalprice;
    const tokenPrice = Math.ceil(totalPrice / totalToken);
    const fundedPart = soldToken * tokenPrice;
    const remainsToFinance = totalPrice - fundedPart;
    const [participants, setParticipants] = useState();

    const progressBar = [
        { bgcolor: "#6a1b9a", completed: percentageSoldToken },
    ];

    useEffect(() => {
        const getParticipants = async () => {
            const participants = await fetch(
                `${process.env.NEXT_PUBLIC_API}/api/usersbytoken/${tokenId}`
            );
            const participantsResponse = await participants.json();
            setParticipants(participantsResponse);
        };
        getParticipants();
    }, []);

    return (
        <div className="rounded-lg bg-bg/70 p-2 w-[95%]">
            <div className="w-full">
                <div className="flex">
                    <div className="rounded-lg my-3">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className=""
                        >
                            {propertyImages?.map((element) => {
                                return (
                                    <SwiperSlide key={element.id}>
                                        <img
                                            className="object-cover rounded-lg aspect-[16/9]"
                                            src={element.url}
                                            alt={element.description}
                                        />
                                        <div className="group flex absolute top-5 right-5 items-center cursor-pointer bg-white/70 rounded-lg p-2">
                                            {/* todo : ajouter le compteur automatique de likes */}
                                            <span className="text-md font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text mr-2">
                                                {Math.floor(
                                                    Math.random() * 201
                                                )}
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
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        {/* Ajouter aux favoris */}
                    </div>

                    <div className="m-3 px-3 flex flex-grow w-[30vw] bg-bg/50 rounded-lg">
                        <div className="flex flex-col items-center p-3">
                            <p className="text-lg font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">{`Rendement Net Cible : ${property.yield} %`}</p>
                            <div className="text-white">
                                <p>
                                    {soldToken} / {token.stTotalQuantity} parts
                                </p>
                                <p>{availableToken} parts disponibles</p>
                                <p>{tokenPrice} € / part</p>
                                <p>{totalPrice} € à financer</p>
                                <p>{fundedPart} déjà financés</p>
                                <p>Il reste {remainsToFinance} € à financer</p>
                                <p>
                                    Nombre de participants :
                                    {participants ? participants : null}
                                </p>
                            </div>
                            {progressBar.map((item, idx) => (
                                <ProgressBar
                                    key={idx}
                                    bgcolor={item.bgcolor}
                                    completed={item.completed}
                                />
                            ))}
                            <h3 className="text-xl font-bold text-bg">
                                {property.securityTokens[0].stName}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <div className="w-full bg-white/70 rounded-lg my-3">
                    <div className="px-6 py-4 bg-white rounded-lg">
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
                <div className="w-full bg-white/70 rounded-lg my-3">
                    <div className="px-6 py-4 bg-white rounded-lg">
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
                <button className="text-white flex align-center text-sm px-5 py-3 mx-auto uppercase font-title font-bold rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple m-3">
                    Investir dans cette propriété !
                </button>
            </div>
        </div>
    );
};

export default StorePropertyCard;
