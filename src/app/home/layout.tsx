'use client';

import MainNav from "../shared/components/header";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../theme-context";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { color } = useContext(ThemeContext);

    return (
        <div>
            <div className={["min-h-full text-tBase bg-bgPrimary", `theme-${color}`].join(" ")} >
                <div className="w-full flex-row h-50 md:w-full">
                    <MainNav />
                </div>
                <div className="min-w-full min-h-full md:overflow-y-auto px-20 pb-28 bg-bgPrimary">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;