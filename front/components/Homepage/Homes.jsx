"use client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "../../services/reducer";
import { getProperties } from "@/services/api";
// import api from "../../services/api";
// import { useEffect, useState } from "react";

export default async function Homes() {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
    });
    // const propertiesData = await getProperties();
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await api.get("/properties");
    //             setData(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }

    //     fetchData();
    // }, []);

    return <Provider store={store}>{/* <p>{propertiesData}</p> */}</Provider>;
}
