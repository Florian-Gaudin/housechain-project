"use client";

import { useContext, useEffect, useState } from "react";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import OpenSidebarMenuButton from "./SidebarMenu/OpenSidebarMenuButton";
import { SidebarContext } from "@/services/reducer/sidebar.reducer";
import PolygonClipPath from "../PolygonClippath";
import MenuButton from "../Fields/MenuButton";
import PropertiesMenu from "./SidebarMenu/PropertiesMenu";
import MyPropertiesMenu from "./SidebarMenu/MyPropertiesMenu";
import MyWalletMenu from "./SidebarMenu/MyWalletMenu";
import SettingsButton from "./SidebarMenu/SettingsButton";
import ShowProperties from "./Store/ShowProperties";
import MainTitle from "./MainTitle";
import MarketMenu from "./SidebarMenu/MarketMenu";
import Market from "@/components/Dashboard/Market/Market";
import indexSvg from "@/public/assets/svg/index-svg";
import { useSession } from "next-auth/react";
import ProfileMenu from "./SidebarMenu/ProfileMenu";
import UserAvatar from "./SidebarMenu/UserAvatar";

const DashboardLayout = () => {
    const { data: session, status } = useSession();
    const [noSession, setNoSession] = useState(true);

    // contenu contextuel de la sidebar menu
    const propertiesMenu = <PropertiesMenu />;
    const myPropertiesMenu = <MyPropertiesMenu />;
    const myWalletMenu = <MyWalletMenu />;
    const marketMenu = <MarketMenu />;
    const profileMenu = <ProfileMenu />;

    // contenu contextuel du main
    const store = <ShowProperties />;
    const storeTitle = <MainTitle title={"Nos propriétés"} />;
    const market = <Market noSession={noSession} />;
    const marketTitle = <MainTitle title={"Marché crypto"} />;
    const myProperties = (
        <h3 noSession={noSession} className="text-white">
            My properties
        </h3>
    );
    const myPropertiesTitle = <MainTitle title={"Mes investissements"} />;
    const myWallet = (
        <h3 noSession={noSession} className="text-white">
            My wallet
        </h3>
    );
    const myWalletTitle = <MainTitle title={"Mon portefeuille"} />;
    const profile = (
        <h3 id="profile" noSession={noSession} className="text-white">
            Mes informations
        </h3>
    );
    const profileTitle = <MainTitle title={"Mes informations"} />;

    //svg buttons
    const storeSvg = indexSvg.house;
    const walletSvg = indexSvg.bitcoin(
        `h-5 w-5 ${noSession ? "fill-bglight" : "color-anim"}`
    );
    const myPropertiesSvg = indexSvg.contract(
        `h-5 w-5 ${noSession ? "fill-bglight" : "color-anim"}`
    );
    const myWalletSvg = indexSvg.wallet(
        `h-5 w-5 ${noSession ? "fill-bglight" : "color-anim"}`
    );
    const notLoggedUserSvg = indexSvg.usercircle(
        `h-5 w-5 ${noSession ? "fill-bglight" : "color-anim"}`
    );

    const userAvatar = noSession ? notLoggedUserSvg : <UserAvatar />;

    const { state, dispatch } = useContext(SidebarContext);
    const toggleSidebar = (sidebarContent, mainContent, mainTitle) => {
        dispatch({
            type: actionTypes.TOGGLE_SIDEBAR,
            sidebarContent: sidebarContent,
            mainContent: mainContent,
            mainTitle: mainTitle,
        });
    };

    useEffect(() => {
        if (!session && status === "unauthenticated") {
            setNoSession(true);
        } else {
            setNoSession(false);
        }
    }, [session, status]);

    return (
        <>
            <div className="flex h-screen antialiased overflow-hidden">
                <PolygonClipPath />
                <div className="top-0 right-5 z-50 fixed">
                    <MenuButton />
                </div>
                {/* <!-- Sidebar --> */}
                <div className="flex flex-shrink-0">
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
                                contentSvg={storeSvg}
                            />
                            <OpenSidebarMenuButton
                                onClick={() =>
                                    dispatch({
                                        type: "TOGGLE_SIDEBAR",
                                        sidebarContent: marketMenu,
                                        mainContent: market,
                                        mainTitle: marketTitle,
                                    })
                                }
                                contentSvg={walletSvg}
                                disabled={noSession}
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
                                contentSvg={myPropertiesSvg}
                                disabled={noSession}
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
                                contentSvg={myWalletSvg}
                                disabled={noSession}
                            />
                            <OpenSidebarMenuButton
                                onClick={() =>
                                    dispatch({
                                        type: "TOGGLE_SIDEBAR",
                                        sidebarContent: profileMenu,
                                        mainContent: profile,
                                        mainTitle: profileTitle,
                                    })
                                }
                                contentSvg={userAvatar}
                                disabled={noSession}
                            />
                        </div>
                        <SettingsButton noSession={noSession} />
                    </nav>

                    <SidebarMenu isSidebarOpen={state.isSidebarOpen}>
                        {state.sidebarContent}
                    </SidebarMenu>
                </div>
                <div className="w-full">
                    {state.mainTitle !== null ? state.mainTitle : storeTitle}
                    <div className="flex justify-center ml-3">
                        {/* <!-- Main --> */}
                        <main className="flex items-center px-4 max-w-[95%]">
                            <div className="max-h-[80vh] w-full overflow-y-auto overflow-x-hidden p-4 scrollbar-hide">
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
