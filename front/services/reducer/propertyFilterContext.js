"use client";
import { createContext, useContext, useState } from "react";

const PropertyFilterContext = createContext();

export const PropertyFilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        selectedStatus: "",
        selectedCity: "",
        selectedType: "",
        selectedYield: 0,
    });

    const [filteredData, setFilteredData] = useState([]); // Nouvel état pour les données filtrées

    return (
        <PropertyFilterContext.Provider
            value={{ filters, setFilters, filteredData, setFilteredData }}
        >
            {children}
        </PropertyFilterContext.Provider>
    );
};

export const usePropertyFilters = () => {
    return useContext(PropertyFilterContext);
};
