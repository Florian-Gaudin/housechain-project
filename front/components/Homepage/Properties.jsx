"use client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "../../services/reducer";
import { useEffect, useState } from "react";
import { getProperties } from "../../services/api";
import SwiperProperties from "./SwiperProperties";

export default function Properties() {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
    });
    const [propertiesData, setPropertiesData] = useState();

    useEffect(() => {
        getProperties()
            .then((res) => {
                setPropertiesData(res);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <Provider store={store}>
            <div className="">
                <div className="reveal-1 text-center">
                    <h4 className="mb-5 text-4xl leading-8 uppercase tracking-widest font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                        Nos propriétés
                    </h4>
                    <p className="mt-6 pt-6 text-3xl text-white leading-10 tracking-widest font-bold max-w-[1000px] mx-auto">
                        Découvrez les coups de coeur de nos utilisateurs
                    </p>
                </div>
                <SwiperProperties
                    propertiesData={propertiesData}
                    bestProperties={true}
                    profitProperties={false}
                />
                <div className="reveal-2">
                    <p className="text-center mt-6 pt-6 text-3xl text-white leading-10 tracking-widest font-bold max-w-[1000px] mx-auto">
                        ... ou les biens les plus rentables !
                    </p>
                    <SwiperProperties
                        propertiesData={propertiesData}
                        bestProperties={false}
                        profitProperties={true}
                    />
                </div>
            </div>
        </Provider>
    );
}
