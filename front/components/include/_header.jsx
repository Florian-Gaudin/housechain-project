import Logo from "../Homepage/Logo";
import MenuButton from "../Fields/MenuButton";
import "../../styles/components/_homepageHeader.scss";
import ConnectButton from "../Fields/ConnectButton";

const Header = () => {
    return (
        <header className="inset-x-0 top-0 z-50 fixed">
            <nav className="nav-wrapper z-50 h-[150px] grid grid-cols-3">
                <div className="nav-content col-start-1 col-end-3">
                    <div className="flex justify-between">
                        <a href="/" className="transition-all duration-2000">
                            <Logo />
                        </a>
                        <ConnectButton />
                    </div>
                </div>
                <div className="flex items-center">
                    <MenuButton />
                </div>
            </nav>
        </header>
    );
};

export default Header;
