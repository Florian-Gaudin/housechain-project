export default async function MainSiteLayout({ children }) {
    return (
        <>
            <main className="relative flex-1 z-10">{children}</main>
        </>
    );
}
