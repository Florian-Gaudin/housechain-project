"use client";
import { useEffect, useState } from "react";
import StorePropertyCard from "./StorePropertyCard";
import Loader from "@/components/Loader/Loader";
import { usePropertyFilters } from "@/services/reducer/propertyFilterContext";

const ShowProperties = () => {
    const { filteredData, setFilteredData } = usePropertyFilters();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = false;

    useEffect(() => {
        const getProperties = async () => {
            setLoading(true);
            const propertiesData = await fetch(
                `${process.env.NEXT_PUBLIC_API}/api/properties`
            );
            if (!componentMounted) {
                //récupération des données sur les propriétés, les types
                const propertiesDataResponse = await propertiesData.json();

                // on initialise data et filter
                setData(propertiesDataResponse);
                setFilteredData(propertiesDataResponse);

                setLoading(false);
            }

            return () => {
                componentMounted = true;
            };
        };
        getProperties();
    }, []);

    return (
        <>
            <div className="flex flex-wrap">
                {loading ? (
                    <Loader />
                ) : (
                    filteredData.map((property) => (
                        <StorePropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))
                )}
            </div>
        </>
    );
};
export default ShowProperties;
