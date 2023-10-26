import React, { useState, createContext, useContext} from "react";

const IsHomeContext = createContext();
const IsHomeUpdateContext = createContext();

export const useIsHome = () => {
    return useContext(IsHomeContext);
}

export const useIsHomeUpdate = () => {
    return useContext(IsHomeUpdateContext);
}

export const IsHomeProvider = ({ children }) => {
    const [isHome, setIsHome] = useState(true);

    const toggleIsHome = () => {
        setIsHome(isHome => !isHome);
    }

    return (
        <IsHomeContext.Provider value={isHome}>
            <IsHomeUpdateContext.Provider value={toggleIsHome}>
                {children}
            </IsHomeUpdateContext.Provider>
        </IsHomeContext.Provider>
    )
}