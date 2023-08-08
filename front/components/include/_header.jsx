"use client";

import { useEffect, useState } from "react";
import Logo from "../Homepage/Logo";
import MenuButton from "../MenuButton";
import "../../styles/components/_homepageHeader.scss";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState(null);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollOffset = 50;
        setIsVisible(scrollY > scrollOffset);
        clearTimeout(scrollTimeout);

        const newTimeout = setTimeout(() => {
            setIsVisible(false);
        }, 2000);
        setScrollTimeout(newTimeout);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [scrollTimeout]);

    return (
        <header className="inset-x-0 top-0 z-50 fixed">
            <nav
                className={
                    isVisible
                        ? "bg-white/80 flex items-center justify-between transition-all duration-2000"
                        : "flex items-center justify-between transition-all duration-2000"
                }
                aria-label="Global"
            >
                {isVisible && (
                    <div className="transition-all duration-2000">
                        <Logo />
                    </div>
                )}
                <div className="flex items-center fixed right-8 top-8">
                    <MenuButton
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
