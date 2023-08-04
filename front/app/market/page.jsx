"use client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "../../services/reducer";
import HeaderInfos from "@/components/Market/HeaderInfos";
import GlobalChart from "@/components/Market/GlobalChart";
import "../../styles/market.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@/components/Market/Table";
import ToTopButton from "@/components/ToTopButton";

export default function Market({}) {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
    });
    const [coinsData, setCoinsData] = useState([]);
    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
            )
            .then((res) => setCoinsData(res.data));
        window.addEventListener("scroll", () => {
            if (window.scrollY > 145) {
                document.querySelector(".table-header").classList.add("active");
            } else {
                document
                    .querySelector(".table-header")
                    .classList.remove("active");
            }
        });
    }, []);
    return (
        <Provider store={store}>
            <div className="market-container">
                <header>
                    <HeaderInfos />
                    <GlobalChart coinsData={coinsData} />
                </header>
                <Table coinsData={coinsData} />
                <ToTopButton />
            </div>
        </Provider>
    );
}
