'use client';
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { IMain, ThemeContextData } from "./shared/types/context.types";

const colors = ["light", "dark", "blue", "grey"];
const modes = ["light", "dark"];

export const ThemeContext = createContext<ThemeContextData>({
    color: "",
    setColor: () => {},
    mode: "",
    setMode: () => {}
});


export const ThemeProvider: React.FC<IMain> = ({children}) => {
    const [color, setColor] = useState("light");
    const [mode, setMode] = useState(modes[0]);
    
    useEffect(() => {
        console.log("Color In Context: ", document.querySelector("body")?.classList, color);
        document.querySelector("body")?.classList.remove("theme-light", "theme-dark","theme-blue", "theme-grey", "theme-" );
        document.querySelector("body")?.classList.add(`theme-${color}`);
    }),[color];

    const providerValue = useMemo(() => ({
        color,
        setColor,
        mode,
        setMode
    }),[color, setColor, mode, setMode]);


    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    );
};
export const ThisGlobalData: any = () => useContext(ThemeContext);

export default ThemeProvider;