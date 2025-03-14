import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider.jsx";

const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme };
}

export default useTheme;