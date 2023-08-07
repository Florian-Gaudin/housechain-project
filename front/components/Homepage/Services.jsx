"use client";
import "../../styles/components/_homepageHeader.scss";
import { useEffect } from "react";
import SwiperServices from "./SwiperServices";

const Services = () => {
    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > threshold) {
                entry.target.classList.remove("reveal");
                observer.unobserve(entry.target);
            }
        });
    };
    const options = {
        root: null, // Use the viewport as the root element
        rootMargin: "0px",
        threshold: 0.1, // Adjust the threshold as needed (0.1 means 10% of the element should be visible)
    };

    useEffect(() => {
        document.documentElement.classList.add("reveal-loaded");

        window.addEventListener("DOMContentLoaded", function () {
            const observer = new IntersectionObserver(handleIntersect, options);
            const targets = document.querySelectorAll(".reveal");
            targets.forEach(function (target) {
                observer.observe(target);
            });
        });
    }, []);

    return (
        <div className="text-center min-h-[100vh]">
            <SwiperServices />
        </div>
    );
};

export default Services;
