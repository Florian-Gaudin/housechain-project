import { useEffect, useState } from "react";
import variables from "../../styles/variables.module.scss";

const PercentChange = ({ percent }) => {
    const [color, setColor] = useState();

    useEffect(() => {
        if (percent) {
            if (percent >= 0) {
                setColor(variables.green1);
            } else {
                setColor(variables.red1);
            }
        } else {
            setColor(variables.white1);
        }
    }, [percent]);

    return (
        <p className="percent-change-container" style={{ color }}>
            {percent ? percent.toFixed(2) + "%" : "-"}
        </p>
    );
};

export default PercentChange;
