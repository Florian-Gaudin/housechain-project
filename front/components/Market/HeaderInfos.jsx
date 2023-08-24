"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import PercentChange from "./PercentChange";
import TableFilters from "./TableFilters";

const HeaderInfos = () => {
    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.coingecko.com/api/v3/global")
            .then((response) => setHeaderData(response.data.data));
    }, []);

    return (
        <div className="header-container mr-4 flex flex-col h-[300px]">
            <ul className="title h-1/2 bg-bg rounded-lg text-white p-4 border-b-2 border-red">
                <li>
                    Total Cryptomonnaies :
                    {headerData.active_cryptocurrencies &&
                        headerData.active_cryptocurrencies.toLocaleString()}
                </li>
                <li>Marchés : {headerData.markets && headerData.markets}</li>
            </ul>
            <ul className="infos-mkt h-1/2 p-4">
                <li className="global-mkt">
                    MarketCap Global (24H) :
                    <PercentChange
                        percent={
                            headerData.market_cap_change_percentage_24h_usd
                        }
                    />
                </li>
                <li>
                    BTC Dominance :
                    {" " +
                        headerData.market_cap_percentage?.btc?.toFixed(2) +
                        "%"}
                </li>
                <li>
                    ETH Dominance :
                    {" " +
                        headerData.market_cap_percentage?.eth?.toFixed(2) +
                        "%"}
                </li>
            </ul>
        </div>
    );
};

export default HeaderInfos;
