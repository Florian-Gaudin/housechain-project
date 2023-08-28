import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/components/_swiperServices.scss";
import "../../styles/components/_homepageHeader.scss";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const SwiperServices = () => {
    const [news, setNews] = useState();
    const [loading, setLoading] = useState(false);
    let componentMounted = false;

    useEffect(() => {
        const getNews = async () => {
            setLoading(true);
            const newsData = await fetch(
                `${process.env.NEXT_PUBLIC_API}/api/news`
            );
            if (!componentMounted) {
                //récupération des données sur les propriétés, les types
                const newsDataResponse = await newsData.json();
                setNews(newsDataResponse);
                setLoading(false);
            }

            return () => {
                componentMounted = true;
            };
        };
        getNews();
    }, []);

    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            className="z-40 relative max-h-[100vh]"
        >
            <div
                slot="container-start"
                className="parallax-bg opacity-50 gradient-image-background max-h-[100vh]"
                style={{
                    backgroundImage: "url(/services.jpg)",
                }}
                data-swiper-parallax="-23%"
            ></div>
            <div className="absolute top-14 w-full mx-auto reveal-1">
                <h4 className="text-4xl leading-8 uppercase tracking-widest font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Nos actualités
                </h4>
            </div>
            {loading ? (
                <Loader />
            ) : (
                news?.map((news) => (
                    <SwiperSlide className="services-swiper reveal-2 z-50 opacity-100">
                        <div className="w-3/5 mx-auto bg-white/70 rounded-lg shadow-lg p-5 mt-16 min-h-[50vh]">
                            <div
                                className="uppercase text-2xl"
                                data-swiper-parallax="-300"
                            >
                                {news.title}
                            </div>
                            <div
                                className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"
                                data-swiper-parallax="-200"
                            ></div>

                            <div
                                className="pt-5 text-justify text-lg font-bold opacity-100 z-50 w-2/3 mx-auto"
                                data-swiper-parallax="-100"
                            >
                                <p className="m-5 line-clamp-3">{news.text}</p>
                                <a
                                    href={`/news/${news.id}`}
                                    className="flex justify-end text-sm underline mb-2"
                                >
                                    Lire la suite
                                </a>
                                <img
                                    className="mx-auto w-auto aspect-[16/9] full-opacity rounded-lg"
                                    src={news.image}
                                    alt="image de l'actualité"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            )}
        </Swiper>
    );
};

export default SwiperServices;
