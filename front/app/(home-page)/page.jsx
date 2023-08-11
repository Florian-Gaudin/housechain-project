"use client";

import "../../styles/components/_homepageHeader.scss";
import About from "@/components/Homepage/About";
import Properties from "@/components/Homepage/Properties";
import Services from "@/components/Homepage/Services";
import Welcome from "@/components/Homepage/Welcome";
import Footer from "@/components/include/_footer";
import { getSession, useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    console.log(session);

    fetch(`${process.env.NEXT_PUBLIC_API}/api/me`, {
        headers: {
            Authorization: "Bearer " + session?.accessToken,
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data));

    return (
        <div className="bg-bg relative isolate pt-14 bg-fixed bg-center bg-cover bg-no-repeat bg-home">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-[calc(20%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-40"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <section
                id="welcome"
                className="mx-auto py-32 sm:py-48 lg:py-56 min-h-[100vh] relative"
            >
                <Welcome />
            </section>

            <section id="about" className="mx-auto py-16 bg-white/70">
                <About />
            </section>
            <section
                id="properties"
                className="mx-auto py-16 lg:py-16  min-h-[100vh]"
            >
                <Properties />
            </section>
            <section id="services" className="mx-auto min-h-[100vh]">
                <Services />
            </section>
            <Footer />
        </div>
    );
}
