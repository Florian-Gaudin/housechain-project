import { list } from "postcss";
import { useState } from "react";
import TableLine from "./TableLine";
import ToTop from "./ToTop";

const Table = ({ coinsData }) => {
    const [rangeNumber, setRangeNumber] = useState(100);
    const [orderBy, setOrderBy] = useState("");

    const tableHeader = [
        "Prix",
        "MarketCap",
        "Volume",
        "1h",
        "1 jour",
        "1 semaine",
        "1 mois",
        "6 mois",
        "1 an",
        "ATH",
    ];

    return (
        <div className="table-container">
            <ul className="table-header">
                <div className="range-container">
                    <span>
                        Top{" "}
                        <input
                            type="text"
                            value={rangeNumber}
                            onChange={(e) => setRangeNumber(e.target.value)}
                        />
                    </span>
                    <input
                        type="range"
                        min="1"
                        max="250"
                        value={rangeNumber}
                        onChange={(e) => setRangeNumber(e.target.value)}
                    />
                    <ToTop />
                </div>
                {tableHeader.map((element) => (
                    <li key={element}>
                        <input
                            type="radio"
                            name="header-element"
                            id={element}
                            defaultChecked={
                                element === orderBy ||
                                element === orderBy + "reverse"
                                    ? true
                                    : false
                            }
                            onClick={() => {
                                if (orderBy === element) {
                                    setOrderBy(element + "reverse");
                                } else {
                                    setOrderBy(element);
                                }
                            }}
                        />
                        <label htmlFor={element}>{element}</label>
                    </li>
                ))}
            </ul>
            {coinsData &&
                coinsData
                    .slice(0, rangeNumber)
                    .sort((a, b) => {
                        switch (orderBy) {
                            case "Prix":
                                return b.current_price - a.current_price;
                            case "Volume":
                                return b.total_volume - a.total_volume;
                            case "MarketCap":
                                return b.market_cap - a.market_cap;
                            case "1h":
                                return (
                                    b.price_change_percentage_1h_in_currency -
                                    a.price_change_percentage_1h_in_currency
                                );
                            case "1 jour":
                                return (
                                    b.price_change_percentage_24h_in_currency -
                                    a.price_change_percentage_24h_in_currency
                                );
                            case "1 semaine":
                                return (
                                    b.price_change_percentage_7d_in_currency -
                                    a.price_change_percentage_7d_in_currency
                                );
                            case "1 mois":
                                return (
                                    b.price_change_percentage_30d_in_currency -
                                    a.price_change_percentage_30d_in_currency
                                );
                            case "6 mois":
                                return (
                                    b.price_change_percentage_200d_in_currency -
                                    a.price_change_percentage_200d_in_currency
                                );
                            case "1 an":
                                return (
                                    b.price_change_percentage_1y_in_currency -
                                    a.price_change_percentage_1y_in_currency
                                );
                            case "ATH":
                                return (
                                    b.ath_change_percentage -
                                    a.ath_change_percentage
                                );
                            case "#reverse":
                                return a.market_cap - b.market_cap;
                            case "Prixreverse":
                                return a.current_price - b.current_price;
                            case "Volumereverse":
                                return a.total_volume - b.total_volume;
                            case "MarketCapreverse":
                                return a.market_cap - b.market_cap;
                            case "1hreverse":
                                return (
                                    a.price_change_percentage_1h_in_currency -
                                    b.price_change_percentage_1h_in_currency
                                );
                            case "1 jourreverse":
                                return (
                                    a.price_change_percentage_24h_in_currency -
                                    b.price_change_percentage_24h_in_currency
                                );
                            case "1 semainereverse":
                                return (
                                    a.price_change_percentage_7d_in_currency -
                                    b.price_change_percentage_7d_in_currency
                                );
                            case "1 moisreverse":
                                return (
                                    a.price_change_percentage_30d_in_currency -
                                    b.price_change_percentage_30d_in_currency
                                );
                            case "6 moisreverse":
                                return (
                                    a.price_change_percentage_200d_in_currency -
                                    b.price_change_percentage_200d_in_currency
                                );
                            case "1 anreverse":
                                return (
                                    a.price_change_percentage_1y_in_currency -
                                    b.price_change_percentage_1y_in_currency
                                );
                            case "ATHreverse":
                                return (
                                    a.ath_change_percentage -
                                    b.ath_change_percentage
                                );
                            default:
                                null;
                        }
                    })
                    .map((coin, index) => (
                        <TableLine coin={coin} index={index} key={index} />
                    ))}
        </div>
    );
};

export default Table;
