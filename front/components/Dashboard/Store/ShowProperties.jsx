"use client";
import { useEffect, useState } from "react";
import StorePropertyCard from "./StorePropertyCard";
import Loader from "@/components/Loader/Loader";
import { usePropertyFilters } from "@/services/reducer/propertyFilterContext";

const ShowProperties = ({ filteredProperties }) => {
    const { filteredData, setFilteredData } = usePropertyFilters();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
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

    // useEffect(() => {
    //     setFilter(filteredProperties);
    // }, [filteredProperties]);

    return (
        <>
            {/* <div className="flex flex-row justify-between my-5 p-3">
                <select
                    name="status"
                    className="flex flex-col"
                    value={selectedStatus}
                    onChange={(event) =>
                        filterProperties(event.target.value, "status")
                    }
                >
                    <option value="">Tous</option>
                    {status.map((status, index) => (
                        <option key={index} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
                <select
                    name="cities"
                    className="flex flex-col"
                    value={selectedCity}
                    onChange={(event) =>
                        filterProperties(event.target.value, "city")
                    }
                >
                    <option value="">Toutes</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                <select
                    name="types"
                    className="flex flex-col"
                    value={selectedType}
                    onChange={(event) =>
                        filterProperties(event.target.value, "type")
                    }
                >
                    <option value="">Toutes</option>
                    {types.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                <div className="flex flex-col">
                    <div className="flex justify-around">
                        <span>{minYield}</span>
                        <span>{selectedYield}</span>
                        <span>{maxYield}</span>
                    </div>
                    <input
                        type="range"
                        min={minYield}
                        max={maxYield}
                        value={selectedYield}
                        onChange={(event) =>
                            filterProperties(event.target.value, "yield")
                        }
                    />
                </div>
                <div className="bg-white">
                    <button
                        className="p-3 bg-white"
                        onClick={() => filterProperties("", "all")}
                    >
                        Toutes les propriétés
                    </button>
                    <button
                        className="p-3 bg-white"
                        onClick={() => filterProperties("new")}
                    >
                        Les plus récentes
                    </button>
                    <button
                        className="p-3 bg-white"
                        onClick={() => filterProperties("like")}
                    >
                        Les plus aimées
                    </button>
                </div>
            </div> */}
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
