import { useEffect, useState } from "react";
import { Tooltip } from "recharts";
import variables from "../../styles/variables.module.scss";
import dynamic from "next/dynamic";

// Dynamically import the Treemap component
const DynamicTreemap = dynamic(
    () => import("recharts").then((mod) => mod.Treemap),
    {
        ssr: false, // Disable server-side rendering for this component
    }
);

const GlobalChart = ({ coinsData }) => {
    const [dataArray, setDataArray] = useState([]);

    const colorPicker = (number) => {
        if (number >= 20) {
            return variables.color1;
        } else if (number >= 5) {
            return variables.green2;
        } else if (number >= 0) {
            return variables.green1;
        } else if (number >= -5) {
            return variables.red1;
        } else if (number >= -20) {
            return variables.red2;
        } else {
            return variables.black2;
        }
    };

    const excludeCoin = (coin) => {
        if (
            coin === "usdt" ||
            coin === "usdc" ||
            coin === "busd" ||
            coin === "dai" ||
            coin === "mim"
        ) {
            return false;
        } else {
            return true;
        }
    };

    useEffect(() => {
        let chartData = [];

        if (coinsData.length > 0) {
            for (let i = 0; i < 30; i++) {
                if (excludeCoin(coinsData[i].symbol)) {
                    chartData.push({
                        name:
                            coinsData[i].symbol.toUpperCase() +
                            " " +
                            coinsData[
                                i
                            ].market_cap_change_percentage_24h?.toFixed(2) +
                            "%",
                        size: coinsData[i].market_cap,
                        fill: colorPicker(
                            coinsData[i].market_cap_change_percentage_24h
                        ),
                    });
                }
            }
        }
        setDataArray(chartData);
    }, [coinsData]);

    const TreemapToolTip = ({ active, payload }) => {
        // Définir des paramètres par défaut pour les propriétés active et payload
        active = active ?? false;
        payload = payload ?? [];

        if (active && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{payload[0].payload.name}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="global-chart">
            <DynamicTreemap
                width={730}
                height={180}
                data={dataArray}
                dataKey="size"
                stroke="rgb(51,51,51)"
                fill="black"
                aspectRatio="1"
            >
                <Tooltip content={<TreemapToolTip />} />
            </DynamicTreemap>
        </div>
    );
};

export default GlobalChart;
