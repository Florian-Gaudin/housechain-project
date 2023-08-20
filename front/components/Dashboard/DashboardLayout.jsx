"use client";

import { useContext, useState } from "react";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import OpenSidebarMenuButton from "./SidebarMenu/OpenSidebarMenuButton";
import { SidebarContext } from "@/services/reducer/sidebar.reducer";
import UserComponent from "./SidebarMenu/UserComponent";
import PolygonClipPath from "../PolygonClipPath";
import indexSvg from "@/public/assets/svg/index-svg";
import MenuButton from "../Fields/MenuButton";
import PropertiesMenu from "./SidebarMenu/PropertiesMenu";
import MyPropertiesMenu from "./SidebarMenu/MyPropertiesMenu";
import MyWalletMenu from "./SidebarMenu/MyWalletMenu";
import StoreProperties from "./Store/StoreProperties";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
// import Swiper modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

const DashboardLayout = () => {
    //placement bouton connexion
    const origin = "origin-origin-bottom-left left-10 bottom-14";
    // contenu contextuel de la sidebar menu
    const propertiesMenu = <PropertiesMenu />;
    const myPropertiesMenu = <MyPropertiesMenu />;
    const myWalletMenu = <MyWalletMenu />;

    // contenu contextuel du main
    const store = <StoreProperties />;
    const myProperties = <h3 className="text-white">My properties</h3>;
    const myWallet = <h3 className="text-white">My wallet</h3>;

    const { state, dispatch } = useContext(SidebarContext);
    // const [isSidebarOpen, setSidebarOpen] = useState(false);
    // const [sidebarContent, setSidebarContent] = useState("");
    // const [mainContent, setMainContent] = useState(store);
    const toggleSidebar = (sidebarContent, mainContent) => {
        dispatch({
            type: actionTypes.TOGGLE_SIDEBAR,
            sidebarContent: sidebarContent,
            mainContent: mainContent,
        });
    };

    return (
        <>
            <div className="flex h-screen antialiased overflow-hidden">
                <PolygonClipPath />
                <div className="top-0 right-5 z-50 fixed">
                    <MenuButton />
                </div>
                {/* <!-- Sidebar --> */}
                <div className="flex flex-shrink-0">
                    {/* <div
                        // className={`${isSidebarOpen ? "open" : ""}`}
                        className="fixed inset-0 z-10 bg-bg bg-opacity-50 lg:hidden"
                    ></div> */}
                    <div
                        className={`${
                            state.isSidebarOpen
                                ? "fixed inset-y-0 z-10 w-16 bg-white"
                                : ""
                        }`}
                    ></div>
                    {/* TODO: MOBILE DASHBOARD */}

                    {/* SIDEBAR */}
                    <nav className="z-20 flex-col items-center flex-shrink-0 hidden w-16 py-4 bg-white border-r-2 border-bg shadow-lg sm:flex rounded-tr-3xl rounded-br-3xl">
                        {/* <!-- Logo --> */}
                        <div className="flex-shrink-0 py-4">
                            <a href="/">
                                <div className="text-center">
                                    <h1 className="text-2xl md:text-3xl uppercase font-title font-extrabold bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text px-2 rounded-lg shadow-lg hover:scale-110 opacity-80 hover:opacity-100">
                                        H
                                    </h1>
                                </div>
                            </a>
                        </div>
                        {/* BOUTONS OUVERTURE DES MENU SIDEBAR */}
                        <div className="flex flex-col items-center flex-1 p-2 mt-12 space-y-16">
                            <OpenSidebarMenuButton
                                onClick={() =>
                                    dispatch({
                                        type: "TOGGLE_SIDEBAR",
                                        sidebarContent: propertiesMenu,
                                        mainContent: store,
                                    })
                                }
                                content={indexSvg.house}
                            />
                            <OpenSidebarMenuButton
                                onClick={() =>
                                    dispatch({
                                        type: "TOGGLE_SIDEBAR",
                                        sidebarContent: myPropertiesMenu,
                                        mainContent: myProperties,
                                    })
                                }
                                content={indexSvg.contract}
                            />
                            <OpenSidebarMenuButton
                                onClick={() =>
                                    dispatch({
                                        type: "TOGGLE_SIDEBAR",
                                        sidebarContent: myWalletMenu,
                                        mainContent: myWallet,
                                    })
                                }
                                content={indexSvg.wallet}
                            />
                        </div>
                        <div className="relative">
                            <UserComponent origin={origin} />
                        </div>
                    </nav>

                    <SidebarMenu isSidebarOpen={state.isSidebarOpen}>
                        {state.sidebarContent}
                    </SidebarMenu>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex flex-1">
                        {/* <!-- Main --> */}
                        <Swiper
                            width={100}
                            height={10}
                            direction={"vertical"}
                            slidesPerView={"auto"}
                            freeMode={true}
                            scrollbar={true}
                            mousewheel={true}
                            modules={[FreeMode, Scrollbar, Mousewheel]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <main className="flex items-center justify-center flex-1 px-4 py-8">
                                    {state.mainContent !== null
                                        ? state.mainContent
                                        : store}
                                </main>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};
export default DashboardLayout;
