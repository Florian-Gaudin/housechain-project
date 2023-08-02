"use client";
import { Menu } from "@/components/Menu";
import { getProperties } from "@/services/api";
import SearchBlock from "@/components/Search/SearchBlock";
import Header from "@/components/Homepage/Header";

export default async function MainSiteLayout({ children }) {
    // const propertiesData = await getProperties();
    // const productsData = await getProductsTemplates();

    return (
        <>
            {/* <header className="top-0 flex-initial print:hidden bg-white shadow-soft-down z-20">
                <Menu
                    properties={propertiesData}
                    // products={productsData}
                />
                <div className="bg-black w-full pb-14 flex justify-center">
                    <SearchBlock
                        properties={propertiesData}
                        // products={productsData}
                    />
                </div>
            </header> */}
            <main className="relative flex-1 z-10">
                <Header />
                {children}
            </main>
        </>
    );
}
