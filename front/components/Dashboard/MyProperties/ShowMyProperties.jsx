"use client";
import { useEffect, useState } from "react";
import StorePropertyCard from "./StorePropertyCard";
import Loader from "@/components/Loader/Loader";

const ShowProperties = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]);
    const [types, setTypes] = useState([]);
    const [status, setStatus] = useState([]);
    const [minYield, setMinYield] = useState([]);
    const [maxYield, setMaxYield] = useState([]);
    const [selectedYield, setSelectedYield] = useState(0);
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    let componentMounted = false;

    useEffect(() => {
        const getProperties = async () => {
            setLoading(true);
            const propertiesData = await fetch(
                `${process.env.NEXT_PUBLIC_API}/api/properties`
            );
            const typesData = await fetch(
                `${process.env.NEXT_PUBLIC_API}/api/types`
            );
            const statusData = await fetch(
                `${process.env.NEXT_PUBLIC_API}/api/status`
            );
            if (!componentMounted) {
                //récupération des données sur les propriétés, les types
                const propertiesDataResponse = await propertiesData.json();
                const typesDataResponse = await typesData.json();
                const statusDataResponse = await statusData.json();
                // Calcul des valeurs minimales et maximales de rendement annuel
                const min = Math.min(
                    ...propertiesDataResponse.map((property) =>
                        parseFloat(property.yield)
                    )
                );
                const max = Math.max(
                    ...propertiesDataResponse.map((property) =>
                        parseFloat(property.yield)
                    )
                );

                // Initialisation des valeurs du range avec les valeurs minimales et maximales
                setMinYield(min);
                setMaxYield(max);
                setSelectedYield(min);

                // on initialise data et filter
                setData(propertiesDataResponse);
                setFilter(propertiesDataResponse);
                //on récupère la liste des villes
                const allCities = propertiesDataResponse.map(
                    (property) => property.city
                );
                setCities(allCities);
                // on récupère les types de propriétés
                const allTypes = typesDataResponse.map(
                    (type) => type.type_name
                );
                setTypes(allTypes);
                // on récupère les status des propriétés
                const allStatus = statusDataResponse.map(
                    (status) => status.type
                );
                setStatus(allStatus);

                setLoading(false);
            }

            return () => {
                componentMounted = true;
            };
        };
        getProperties();
    }, []);

    const filterProperties = (value, cat) => {
        console.log(value, cat);
        let updatedCity = selectedCity;
        let updatedType = selectedType;
        let updatedYield = selectedYield;
        let updatedStatus = selectedStatus;

        if (cat === "all") {
            updatedCity = "";
            updatedType = "";
            updatedStatus = "";
            updatedYield = minYield;
        } else if (cat === "city") {
            if (value === "") {
                updatedCity = "";
            } else {
                updatedCity = value;
            }
        } else if (cat === "type") {
            if (value === "") {
                updatedType = "";
            } else {
                updatedType = value;
            }
        } else if (cat === "status") {
            if (value === "") {
                updatedStatus = "";
            } else {
                updatedStatus = value;
            }
        } else if (cat === "yield") {
            updatedYield = parseFloat(value);
        }

        const updatedList = applyFilters(
            updatedCity,
            updatedType,
            updatedYield,
            updatedStatus
        );
        setFilter(updatedList);
        setSelectedCity(updatedCity);
        setSelectedType(updatedType);
        setSelectedYield(updatedYield);
        setSelectedStatus(updatedStatus);

        console.log(filter, updatedCity, updatedType, updatedStatus);
        // Appliquer d'autres filtres de la même manière
    };

    const applyFilters = (city, type, yieldValue, status) => {
        let filteredList = data;

        if (city !== "") {
            filteredList = filteredList.filter(
                (property) => property.city === city
            );
        }

        if (type !== "") {
            filteredList = filteredList.filter(
                (property) => property.type.type_name === type
            );
        }

        if (status !== "") {
            filteredList = filteredList.filter(
                (property) => property.status.type === status
            );
        }

        if (!isNaN(yieldValue)) {
            filteredList = filteredList.filter(
                (property) => parseFloat(property.yield) >= yieldValue
            );
        }

        // Appliquer d'autres filtres supplémentaires ici

        return filteredList;
    };

    return (
        <>
            <div className="flex flex-row justify-between my-5 p-3">
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
            </div>
            <div className="flex flex-wrap">
                {loading ? (
                    <Loader />
                ) : (
                    filter.map((property) => (
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
