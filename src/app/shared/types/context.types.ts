
export interface ThemeContextData {
    color: string;
    setColor: React.Dispatch<any>;
    mode: string;
    setMode: React.Dispatch<any>;
}

export interface IMain {
    children: React.ReactNode;
}