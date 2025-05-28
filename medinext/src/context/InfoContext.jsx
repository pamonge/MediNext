import React from 'react'
import { createContext, useContext } from "react";
import { infoData } from './InfoData.js';

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
    return (
        <InfoContext.Provider value={{infoData}}>
            {children}
        </InfoContext.Provider>
    )
}

export const useInfo = () => useContext(InfoContext)
