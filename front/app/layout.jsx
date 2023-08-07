import Header from "@/components/include/_header";
import "../styles/globals.scss";
import localFont from "next/font/local";
import Footer from "@/components/include/_footer";

export default function RootLayout({ children }) {
    return (
        <>
            <head>
                <title>Housechain</title>
                <meta
                    name="description"
                    content="L'immobilier réinventé par la blockchain"
                />
            </head>
            <html lang="fr" className="font-body">
                <body className="relative flex flex-col min-h-screen">
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </>
    );
}
