import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useEffect, useState } from "react";
import { ThemeContext } from './context/ThemeContext';
function App() {
  const [chapter, setChapter] = useState("ComponentComposition");
  const [theme,setTheme] = useState('light')

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
      <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar selectedChapter={chapter} setChapter={setChapter} />
            <MainContent selectedChapter={chapter} />
          </div>
        </div>
      </div>
      </ThemeContext.Provider>
  );
}

export default App;
