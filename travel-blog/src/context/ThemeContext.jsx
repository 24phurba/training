import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toogleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    //2. Define a provider
    // Define the value that can be accessed from the child
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// 3. Create the function that can access the
// value passed in provider
export const useTheme = () => useContext(ThemeContext);
