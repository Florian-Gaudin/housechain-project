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
        <div className="header-container">
            <ul className="title">
                <li>
                    <h1>Marché Crypto</h1>
                </li>
                <li>
                    Cryptomonnaies :
                    {headerData.active_cryptocurrencies &&
                        headerData.active_cryptocurrencies.toLocaleString()}
                </li>
                <li>Marchés : {headerData.markets && headerData.markets}</li>
            </ul>
            <ul className="infos-mkt">
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
            <TableFilters />
        </div>
    );
};

export default HeaderInfos;
