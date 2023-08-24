import { useEffect, useRef, useState } from "react";
import UserAvatar from "./UserAvatar";
import UserMenu from "./UserMenu";

const UserComponent = ({
    children,
    origin,
    hoverContent,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    noSession,
}) => {
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const userComponentRef = useRef(null);

    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                userComponentRef.current &&
                !userComponentRef.current.contains(event.target)
            ) {
                setUserMenuOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={userComponentRef}
            className="relative flex items-center flex-shrink-0 transform transition-transform duration-1000 ease-in-out opacity-80 hover:opacity-100 hover:scale-110 shadow-lg rounded-lg my-auto cursor-pointer mb-5"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={toggleUserMenu}
        >
            <UserAvatar children={children} />

            {/* Afficher le UserMenu si isUserMenuOpen est true */}
            {isUserMenuOpen && (
                <UserMenu noSession={noSession} origin={origin} />
            )}
            {isHovered && hoverContent && (
                <div className="transition-opacity opacity-100 bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text">
                    {hoverContent}
                </div>
            )}
        </div>
    );
};

export default UserComponent;
