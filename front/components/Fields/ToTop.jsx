"use client";

import { useEffect, useState } from "react";
import ToTopButton from "./ToTopButton";

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollOffset = 500;
        setIsVisible(scrollY > scrollOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed right-[50px] bottom-[100px] z-50">
            {isVisible && <ToTopButton />}
        </div>
    );
};

export default ToTop;
