import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/components/_swiperServices.scss";
import "../../styles/components/_homepageHeader.scss";

const SwiperServices = () => {
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
            className="min-h-[100vh]"
        >
            <div
                slot="container-start"
                className="parallax-bg opacity-50 min-h-[100vh] gradient-image-background"
                style={{
                    "background-image": "url(/services.jpg)",
                }}
                data-swiper-parallax="-23%"
            ></div>
            <div className="absolute top-14 w-full mx-auto reveal-1">
                <h4 className="text-4xl leading-8 uppercase tracking-widest font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Nos services
                </h4>
            </div>
            <SwiperSlide className="services-swiper reveal-2">
                <div
                    className="pt-14 uppercase text-2xl"
                    data-swiper-parallax="-300"
                >
                    Slide 1
                </div>
                <div className="pt-5" data-swiper-parallax="-200">
                    Subtitle
                </div>
                <div className="pt-5" data-swiper-parallax="-100">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam dictum mattis velit, sit amet faucibus felis
                        iaculis nec. Nulla laoreet justo vitae porttitor
                        porttitor. Suspendisse in sem justo. Integer laoreet
                        magna nec elit suscipit, ac laoreet nibh euismod.
                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut
                        lacinia nec, tincidunt ut libero. Aenean feugiat non
                        eros quis feugiat.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                    Slide 2
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam dictum mattis velit, sit amet faucibus felis
                        iaculis nec. Nulla laoreet justo vitae porttitor
                        porttitor. Suspendisse in sem justo. Integer laoreet
                        magna nec elit suscipit, ac laoreet nibh euismod.
                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut
                        lacinia nec, tincidunt ut libero. Aenean feugiat non
                        eros quis feugiat.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">
                    Slide 3
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                    Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam dictum mattis velit, sit amet faucibus felis
                        iaculis nec. Nulla laoreet justo vitae porttitor
                        porttitor. Suspendisse in sem justo. Integer laoreet
                        magna nec elit suscipit, ac laoreet nibh euismod.
                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                        ullamcorper velit. Nulla ligula nisi, imperdiet ut
                        lacinia nec, tincidunt ut libero. Aenean feugiat non
                        eros quis feugiat.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperServices;
