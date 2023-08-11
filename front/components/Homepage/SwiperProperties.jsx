import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "@/styles/components/_swiperProperties.scss";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import PropertyCard from "./PropertyCard";

export default function SwiperProperties({
    propertiesData,
    bestProperties,
    profitProperties,
}) {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                initialSlide={3}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 200,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
            >
                {propertiesData?.map((property) => (
                    <SwiperSlide
                        key={property.id}
                        className="properties-swiper"
                    >
                        <PropertyCard
                            propertyData={property}
                            bestProperties={bestProperties}
                            profitProperties={profitProperties}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
