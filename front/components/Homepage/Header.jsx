import "../../styles/components/_homepageHeader.scss";
import Logo from "./Logo";
import MenuButton from "../MenuButton";

const Header = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <Logo />
                <div className="flex items-center fixed right-8 top-8">
                    <MenuButton />
                </div>
            </nav>
        </header>
    );
};

export default Header;
