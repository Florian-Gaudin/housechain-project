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
            className="min-h-[100vh] z-50 relative"
        >
            <div
                slot="container-start"
                className="parallax-bg opacity-50 min-h-[100vh] gradient-image-background z-10"
                style={{
                    backgroundImage: "url(/services.jpg)",
                }}
                data-swiper-parallax="-23%"
            ></div>
            <div className="absolute top-14 w-full mx-auto reveal-1">
                <h4 className="text-4xl leading-8 uppercase tracking-widest font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    Nos services
                </h4>
            </div>
            <SwiperSlide className="services-swiper reveal-2">
                <div className="w-3/5 mx-auto bg-white/80 rounded-lg shadow-lg p-5 my-16">
                    <div
                        className="uppercase text-2xl"
                        data-swiper-parallax="-300"
                    >
                        Slide 1
                    </div>
                    <div
                        className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"
                        data-swiper-parallax="-200"
                    ></div>

                    <div className="pt-5" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsa ullam reiciendis vitae aliquid eius recusandae,
                            dolores nisi consectetur molestiae ut, magnam
                            suscipit? Ratione, eos. Aliquam delectus sed
                            laboriosam, quos aut eius ea sit suscipit corrupti
                            esse iusto ipsum exercitationem aspernatur ipsam
                            quaerat voluptates repellendus ab labore quidem
                            vero. Iusto sint odit itaque aliquam maxime minima
                            quas modi, inventore dolor libero, quod laudantium
                            totam qui ut debitis at voluptatum cum vel nobis
                            magni. Aliquid quasi magnam, molestias nesciunt quod
                            blanditiis voluptatem veritatis fugiat animi amet
                            rerum porro maxime quis aperiam placeat officia
                            autem facilis facere quo. Fugit debitis molestias
                            quas minus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsa ullam reiciendis vitae aliquid eius recusandae,
                            dolores nisi consectetur molestiae ut, magnam
                            suscipit? Ratione, eos. Aliquam delectus sed
                            laboriosam, quos aut eius ea sit suscipit corrupti
                            esse iusto ipsum exercitationem aspernatur ipsam
                            quaerat voluptates repellendus ab labore quidem
                            vero. Iusto sint odit itaque aliquam maxime minima
                            quas modi, inventore dolor libero, quod laudantium
                            totam qui ut debitis at voluptatum cum vel nobis
                            magni. Aliquid quasi magnam, molestias nesciunt quod
                            blanditiis voluptatem veritatis fugiat animi amet
                            rerum porro maxime quis aperiam placeat officia
                            autem facilis facere quo. Fugit debitis molestias
                            quas minus!
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="services-swiper reveal-2">
                <div className="w-3/5 mx-auto bg-white/80 rounded-lg shadow-lg p-5 my-16">
                    <div
                        className="uppercase text-2xl"
                        data-swiper-parallax="-300"
                    >
                        Slide 1
                    </div>
                    <div
                        className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"
                        data-swiper-parallax="-200"
                    ></div>

                    <div className="pt-5" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsa ullam reiciendis vitae aliquid eius recusandae,
                            dolores nisi consectetur molestiae ut, magnam
                            suscipit? Ratione, eos. Aliquam delectus sed
                            laboriosam, quos aut eius ea sit suscipit corrupti
                            esse iusto ipsum exercitationem aspernatur ipsam
                            quaerat voluptates repellendus ab labore quidem
                            vero. Iusto sint odit itaque aliquam maxime minima
                            quas modi, inventore dolor libero, quod laudantium
                            totam qui ut debitis at voluptatum cum vel nobis
                            magni. Aliquid quasi magnam, molestias nesciunt quod
                            blanditiis voluptatem veritatis fugiat animi amet
                            rerum porro maxime quis aperiam placeat officia
                            autem facilis facere quo. Fugit debitis molestias
                            quas minus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsa ullam reiciendis vitae aliquid eius recusandae,
                            dolores nisi consectetur molestiae ut, magnam
                            suscipit? Ratione, eos. Aliquam delectus sed
                            laboriosam, quos aut eius ea sit suscipit corrupti
                            esse iusto ipsum exercitationem aspernatur ipsam
                            quaerat voluptates repellendus ab labore quidem
                            vero. Iusto sint odit itaque aliquam maxime minima
                            quas modi, inventore dolor libero, quod laudantium
                            totam qui ut debitis at voluptatum cum vel nobis
                            magni. Aliquid quasi magnam, molestias nesciunt quod
                            blanditiis voluptatem veritatis fugiat animi amet
                            rerum porro maxime quis aperiam placeat officia
                            autem facilis facere quo. Fugit debitis molestias
                            quas minus!
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="services-swiper reveal-2">
                <div className="w-3/5 mx-auto bg-white/80 rounded-lg shadow-lg p-5 my-16">
                    <div
                        className="uppercase text-2xl"
                        data-swiper-parallax="-300"
                    >
                        Slide 1
                    </div>
                    <div
                        className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"
                        data-swiper-parallax="-200"
                    ></div>

                    <div className="pt-5" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsa ullam reiciendis vitae aliquid eius recusandae,
                            dolores nisi consectetur molestiae ut, magnam
                            suscipit? Ratione, eos. Aliquam delectus sed
                            laboriosam, quos aut eius ea sit suscipit corrupti
                            esse iusto ipsum exercitationem aspernatur ipsam
                            quaerat voluptates repellendus ab labore quidem
                            vero. Iusto sint odit itaque aliquam maxime minima
                            quas modi, inventore dolor libero, quod laudantium
                            totam qui ut debitis at voluptatum cum vel nobis
                            magni. Aliquid quasi magnam, molestias nesciunt quod
                            blanditiis voluptatem veritatis fugiat animi amet
                            rerum porro maxime quis aperiam placeat officia
                            autem facilis facere quo. Fugit debitis molestias
                            quas minus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsa ullam reiciendis vitae aliquid eius recusandae,
                            dolores nisi consectetur molestiae ut, magnam
                            suscipit? Ratione, eos. Aliquam delectus sed
                            laboriosam, quos aut eius ea sit suscipit corrupti
                            esse iusto ipsum exercitationem aspernatur ipsam
                            quaerat voluptates repellendus ab labore quidem
                            vero. Iusto sint odit itaque aliquam maxime minima
                            quas modi, inventore dolor libero, quod laudantium
                            totam qui ut debitis at voluptatum cum vel nobis
                            magni. Aliquid quasi magnam, molestias nesciunt quod
                            blanditiis voluptatem veritatis fugiat animi amet
                            rerum porro maxime quis aperiam placeat officia
                            autem facilis facere quo. Fugit debitis molestias
                            quas minus!
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="services-swiper reveal-2">
                <div className="w-3/5 mx-auto bg-white/80 rounded-lg shadow-lg p-5 my-16">
                    <div
                        className="uppercase text-2xl"
                        data-swiper-parallax="-300"
                    >
                        Slide 1
                    </div>
                    <div
                        className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"
                        data-swiper-parallax="-200"
                    ></div>

                    <div className="pt-5" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsa ullam reiciendis vitae aliquid eius recusandae,
                            dolores nisi consectetur molestiae ut, magnam
                            suscipit? Ratione, eos. Aliquam delectus sed
                            laboriosam, quos aut eius ea sit suscipit corrupti
                            esse iusto ipsum exercitationem aspernatur ipsam
                            quaerat voluptates repellendus ab labore quidem
                            vero. Iusto sint odit itaque aliquam maxime minima
                            quas modi, inventore dolor libero, quod laudantium
                            totam qui ut debitis at voluptatum cum vel nobis
                            magni. Aliquid quasi magnam, molestias nesciunt quod
                            blanditiis voluptatem veritatis fugiat animi amet
                            rerum porro maxime quis aperiam placeat officia
                            autem facilis facere quo. Fugit debitis molestias
                            quas minus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsa ullam reiciendis vitae aliquid eius recusandae,
                            dolores nisi consectetur molestiae ut, magnam
                            suscipit? Ratione, eos. Aliquam delectus sed
                            laboriosam, quos aut eius ea sit suscipit corrupti
                            esse iusto ipsum exercitationem aspernatur ipsam
                            quaerat voluptates repellendus ab labore quidem
                            vero. Iusto sint odit itaque aliquam maxime minima
                            quas modi, inventore dolor libero, quod laudantium
                            totam qui ut debitis at voluptatum cum vel nobis
                            magni. Aliquid quasi magnam, molestias nesciunt quod
                            blanditiis voluptatem veritatis fugiat animi amet
                            rerum porro maxime quis aperiam placeat officia
                            autem facilis facere quo. Fugit debitis molestias
                            quas minus!
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="services-swiper reveal-2">
                <div className="w-3/5 mx-auto bg-white/80 rounded-lg shadow-lg p-5 my-16">
                    <div
                        className="uppercase text-2xl"
                        data-swiper-parallax="-300"
                    >
                        Slide 1
                    </div>
                    <div
                        className="p-1 rounded-lg bg-move bg-gradient-to-r from-purple via-red to-purple"
                        data-swiper-parallax="-200"
                    ></div>

                    <div className="pt-5" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsa ullam reiciendis vitae aliquid eius recusandae,
                            dolores nisi consectetur molestiae ut, magnam
                            suscipit? Ratione, eos. Aliquam delectus sed
                            laboriosam, quos aut eius ea sit suscipit corrupti
                            esse iusto ipsum exercitationem aspernatur ipsam
                            quaerat voluptates repellendus ab labore quidem
                            vero. Iusto sint odit itaque aliquam maxime minima
                            quas modi, inventore dolor libero, quod laudantium
                            totam qui ut debitis at voluptatum cum vel nobis
                            magni. Aliquid quasi magnam, molestias nesciunt quod
                            blanditiis voluptatem veritatis fugiat animi amet
                            rerum porro maxime quis aperiam placeat officia
                            autem facilis facere quo. Fugit debitis molestias
                            quas minus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Ipsa ullam reiciendis vitae aliquid eius recusandae,
                            dolores nisi consectetur molestiae ut, magnam
                            suscipit? Ratione, eos. Aliquam delectus sed
                            laboriosam, quos aut eius ea sit suscipit corrupti
                            esse iusto ipsum exercitationem aspernatur ipsam
                            quaerat voluptates repellendus ab labore quidem
                            vero. Iusto sint odit itaque aliquam maxime minima
                            quas modi, inventore dolor libero, quod laudantium
                            totam qui ut debitis at voluptatum cum vel nobis
                            magni. Aliquid quasi magnam, molestias nesciunt quod
                            blanditiis voluptatem veritatis fugiat animi amet
                            rerum porro maxime quis aperiam placeat officia
                            autem facilis facere quo. Fugit debitis molestias
                            quas minus!
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperServices;
