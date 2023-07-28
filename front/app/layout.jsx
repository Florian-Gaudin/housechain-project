import "../styles/globals.scss";
import { Inter } from "next/font/google";
import SearchBarProvider from "@/contexts/SearchBarContext";
import { Menu } from "@/components/Menu";
import api from "../services/api";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Housechain",
    description: "L'immobilier réinventé par la blockchain",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={inter.className}>
            <body className="relative flex flex-col min-h-screen">
                <SearchBarProvider>{children}</SearchBarProvider>
            </body>
        </html>
    );
}
