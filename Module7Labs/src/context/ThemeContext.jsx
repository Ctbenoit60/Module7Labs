import { createContext, useState } from "react";

export const themes = {
    light: {
        foreground: "#333333",
        background: "#BAE2FF"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};


export const MyThemeContext = createContext({theme: themes.light})

export default function MyThemeProvider(props) {
    const [theme, setTheme] = useState(themes.light)

    const darkMode = theme.background === themes.dark.background;

    return (
        <MyThemeContext.Provider value={{theme,setTheme,darkMode}}>
            {props.children}
        </MyThemeContext.Provider>
    )
}