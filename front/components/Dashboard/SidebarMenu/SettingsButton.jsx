import { useEffect, useRef, useState } from "react";
import SettingsMenu from "./SettingsMenu";
import indexSvg from "@/public/assets/svg/index-svg";

const SettingsButton = ({ noSession }) => {
    const [isSettingsMenuOpen, setSettingsMenuOpen] = useState(false);
    const settingsComponentRef = useRef(null);
    const origin = "origin-origin-bottom-left left-10 bottom-14";

    const toggleSettingsMenu = () => {
        setSettingsMenuOpen(!isSettingsMenuOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                settingsComponentRef.current &&
                !settingsComponentRef.current.contains(event.target)
            ) {
                setSettingsMenuOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={settingsComponentRef}
            className="relative flex items-center flex-shrink-0 transform transition-transform duration-1000 ease-in-out opacity-80 hover:opacity-100 hover:scale-110 shadow-lg rounded-lg my-auto cursor-pointer mb-16 p-3"
            onClick={toggleSettingsMenu}
        >
            {indexSvg.settings}

            {/* Afficher le settingsMenu si issettingsMenuOpen est true */}
            {isSettingsMenuOpen && (
                <SettingsMenu origin={origin} noSession={noSession} />
            )}
        </div>
    );
};

export default SettingsButton;
