import { Menu } from "@/components/Menu";
import { getProperties } from "@/services/api";
import SearchBlock from "@/components/Search/SearchBlock";

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
                <div className="flex flex-wrap flex-col xl:flex-row gap-6">
                    <section className="order-1 flex-1 flex flex-col gap-6 w-full xl:w-auto min-w-0">
                        {children}
                    </section>
                </div>
            </main>
        </>
    );
}
