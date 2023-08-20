import { useState } from "react";
import UserComponent from "../Dashboard/SidebarMenu/UserComponent";

const UserLoggedIn = ({ user }) => {
    const origin = "origin-top-right right-[-100%]";
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const hoverContent = (
        <h3 className="text-md bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text px-2">
            Bienvenue {user.name} !
        </h3>
    );
    return (
        <UserComponent
            origin={origin}
            hoverContent={hoverContent}
            isHovered={isHovered}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        ></UserComponent>
    );
};

export default UserLoggedIn;
