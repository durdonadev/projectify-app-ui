import React, { useState, createContext } from "react";

type AppContextType = {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType>({
    counter: 0,
    setCounter: () => {}
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [counter, setCounter] = useState(0);
    return (
        <AppContext.Provider value={{ counter, setCounter }}>
            {children}
        </AppContext.Provider>
    );
};
