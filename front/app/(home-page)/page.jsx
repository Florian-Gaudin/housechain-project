"use client";
import React, { useEffect, useState } from "react";
// import api from "../services/api";

export default function Home() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await api.get("/properties");
    //             setData(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }

    //     fetchData();
    // }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Hello Housechain !</h1>
            <div>
                <h2>Properties</h2>
                {/* <ul>
                    {data.map((property) => (
                        <li key={property.id}>{property.name}</li>
                    ))}
                </ul> */}
            </div>
        </main>
    );
}
