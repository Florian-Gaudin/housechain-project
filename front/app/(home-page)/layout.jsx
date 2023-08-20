import Header from "@/components/Include/_header";

export default async function MainSiteLayout({ children }) {
    return (
        <>
            <Header />
            <main className="relative flex-1 z-10">{children}</main>
        </>
    );
}
