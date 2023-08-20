"use client";
import { usePropertyFilters } from "@/services/reducer/propertyFilterContext";
import { useEffect, useState } from "react";

const PropertiesMenu = () => {
    const { filters, setFilters, filteredData, setFilteredData } =
        usePropertyFilters();
    const [data, setData] = useState([]);
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

                // on initialise data et filteredData
                setData(propertiesDataResponse);
                setFilteredData(propertiesDataResponse);
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
        setSelectedCity(updatedCity);
        setSelectedType(updatedType);
        setSelectedYield(updatedYield);
        setSelectedStatus(updatedStatus);

        setFilters({
            ...filters,
            selectedCity: updatedCity,
            selectedType: updatedType,
            selectedStatus: updatedStatus,
            selectedYield: updatedYield,
        });
        setFilteredData(updatedList);
        console.log(
            filteredData,
            updatedCity,
            updatedType,
            updatedStatus,
            updatedYield
        );
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

        console.log("filteredlist", filteredList);
        // Appliquer d'autres filtres supplémentaires ici

        return filteredList;
    };

    return (
        <div className="flex flex-col justify-between my-5 p-3 gap-5">
            <div className="bg-white pt-5 flex justify-center flex-col gap-3">
                <button
                    className="p-3 bg-white hover:scale-110 rounded-lg uppercase font-bold text-md bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text shadow-lg"
                    onClick={() => filterProperties("", "all")}
                >
                    Voir tout
                </button>
                <button
                    className="p-3 bg-white hover:scale-110 rounded-lg uppercase font-bold text-md bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text shadow-lg"
                    onClick={() => filterProperties("new")}
                >
                    Les + récentes
                </button>
                <button
                    className="p-3 bg-white hover:scale-110 rounded-lg uppercase font-bold text-md bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text shadow-lg"
                    onClick={() => filterProperties("like")}
                >
                    Les plus aimées
                </button>
            </div>
            <label
                className="pt-5 text-sm font-title font-bold uppercase bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text"
                htmlFor="status"
            >
                Statut :
            </label>
            <select
                name="status"
                className="border border-bg p-3 rounded-lg"
                value={selectedStatus}
                onChange={(event) =>
                    filterProperties(event.target.value, "status")
                }
            >
                <option className="p-1" value="">
                    Tous
                </option>
                {status.map((status, index) => (
                    <option
                        className="p-1 h-5 text-bg"
                        key={index}
                        value={status}
                    >
                        {status}
                    </option>
                ))}
            </select>
            <label
                className="mt-5 pt-5 text-sm font-title font-bold uppercase bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text"
                htmlFor="cities"
            >
                Ville :
            </label>
            <select
                name="cities"
                className="border border-bg p-3 rounded-lg"
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
            <label
                className="mt-5 pt-5 text-sm font-title font-bold uppercase bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text"
                htmlFor="types"
            >
                Type de bien :
            </label>
            <select
                name="types"
                className="border border-bg p-3 rounded-lg"
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
            <label
                className="mt-5 pt-5 text-sm font-title font-bold uppercase bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text"
                htmlFor="yield"
            >
                Rendement annuel :
            </label>
            <div className="flex flex-col text-center">
                <span className="text-sm">Votre choix : {selectedYield}%</span>
                <div className="flex justify-around">
                    <span className="text-sm">Min: {minYield}%</span>
                    <input
                        name="yield"
                        type="range"
                        min={minYield}
                        max={maxYield}
                        value={selectedYield}
                        onChange={(event) =>
                            filterProperties(event.target.value, "yield")
                        }
                    />
                    <span className="text-sm">Max: {maxYield}%</span>
                </div>
            </div>
        </div>
    );
};

export default PropertiesMenu;
