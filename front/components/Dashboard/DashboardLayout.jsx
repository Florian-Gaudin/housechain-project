"use client";

import { useContext } from "react";
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
import SettingsButton from "./SidebarMenu/SettingsButton";
import ShowProperties from "./Store/ShowProperties";
import MainTitle from "./MainTitle";

const DashboardLayout = () => {
    //placement bouton connexion
    const origin = "origin-origin-bottom-left left-10 bottom-14";
    // contenu contextuel de la sidebar menu
    const propertiesMenu = <PropertiesMenu />;
    const myPropertiesMenu = <MyPropertiesMenu />;
    const myWalletMenu = <MyWalletMenu />;

    // contenu contextuel du main
    const store = <ShowProperties />;
    const storeTitle = <MainTitle title={"Nos propriétés"} />;
    const myProperties = <h3 className="text-white">My properties</h3>;
    const myPropertiesTitle = <MainTitle title={"Mes investissements"} />;
    const myWallet = <h3 className="text-white">My wallet</h3>;
    const myWalletTitle = <MainTitle title={"Mon portefeuille"} />;

    const { state, dispatch } = useContext(SidebarContext);
    const toggleSidebar = (sidebarContent, mainContent, mainTitle) => {
        dispatch({
            type: actionTypes.TOGGLE_SIDEBAR,
            sidebarContent: sidebarContent,
            mainContent: mainContent,
            mainTitle: mainTitle,
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
                        <div className="flex flex-col items-center flex-1 p-2 mt-12 gap-4 space-y-16">
                            <OpenSidebarMenuButton
                                onClick={() =>
                                    dispatch({
                                        type: "TOGGLE_SIDEBAR",
                                        sidebarContent: propertiesMenu,
                                        mainContent: store,
                                        mainTitle: storeTitle,
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
                                        mainTitle: myPropertiesTitle,
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
                                        mainTitle: myWalletTitle,
                                    })
                                }
                                content={indexSvg.wallet}
                            />
                        </div>
                        <div className="relative mb-5">
                            <UserComponent origin={origin} />
                        </div>
                        <SettingsButton />
                    </nav>

                    <SidebarMenu isSidebarOpen={state.isSidebarOpen}>
                        {state.sidebarContent}
                    </SidebarMenu>
                </div>
                <div className="">
                    {state.mainTitle !== null ? state.mainTitle : storeTitle}
                    <div className="">
                        {/* <!-- Main --> */}
                        <main className="flex items-center justify-center flex-1 px-4 py-8">
                            <div className="max-h-[80vh] overflow-y-auto">
                                {state.mainContent !== null
                                    ? state.mainContent
                                    : store}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};
export default DashboardLayout;
