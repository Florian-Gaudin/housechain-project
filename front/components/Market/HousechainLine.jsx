import { useState } from "react";
import CoinChart from "./CoinChart";
import PercentChange from "./PercentChange";
import StarIcon from "./StarIcon";

const HousechainLine = () => {
    const [showChart, setShowChart] = useState(false);
    return (
        <div className="table-line m-5 p-5">
            <div className="infos-container">
                <StarIcon coinId="housechain" />
                <p className="text-lg text-left font-bold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    H
                </p>
                <div className="img">
                    <img src="/favicon.ico" height="20" alt="logo" />
                </div>
                <div className="infos">
                    <div
                        className="chart-img"
                        onMouseEnter={() => setShowChart(true)}
                        onMouseLeave={() => setShowChart(false)}
                    >
                        <img src="/assets/chart-icon.svg" alt="chart-icon" />
                        <div className="chart-container" id="housechain"></div>
                    </div>
                    <h4 className="text-lg text-left font-bold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                        Housechain
                    </h4>
                    <h5 className="text-sm text-left font-bold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                        - HSC
                    </h5>
                    <a target="_blank" href="">
                        <img src="/assets/info-icon.svg" alt="info-icon" />
                    </a>
                </div>
            </div>
            <p>23 $</p>
            <p className="mktcap">0.12 M$</p>
            <p className="volume">0.56 M$</p>
            <PercentChange percent={2.12} />
            <PercentChange percent={1.36} />
            <PercentChange percent={5.32} />
            <PercentChange percent={12.69} />
            <PercentChange percent={52.88} />
            <PercentChange percent={25.87} />
            <PercentChange percent={45.51} />
        </div>
    );
};

export default HousechainLine;
