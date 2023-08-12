"use client";

import React, { createContext, useState } from "react";

export const SearchBarContext = createContext({});

const SearchBarProvider = ({ children }) => {
    const [firstSelectedValue, setFirstSelectedValue] = useState(null);
    const [secondSelectedValue, setSecondSelectedValue] = useState(null);

    return (
        <SearchBarContext.Provider
            value={{
                firstSelectedValue,
                setFirstSelectedValue,
                secondSelectedValue,
                setSecondSelectedValue,
            }}
        >
            {children}
        </SearchBarContext.Provider>
    );
};

export default SearchBarProvider;
