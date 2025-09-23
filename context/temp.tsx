"use client";

import { createContext, useContext, useState } from "react";

type TempContextType = {
    loading: boolean;
};

const TempContext = createContext<TempContextType | undefined>(undefined);

export const useTempContext = (): TempContextType => {
    const context = useContext(TempContext);
    if (!context) {
        throw new Error("useTempContext must be used within a PictureProvider");
    }
    return context;
}

interface PictureProviderProps {
    children: React.ReactNode;
}

export const TempProvider: React.FC<PictureProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const value = { loading };
    return (
        <TempContext.Provider value={value}>
            {children}
        </TempContext.Provider>
    )
}