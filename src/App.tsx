import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useState } from "react";
import { ThemeContext } from './context/ThemeContext';
function App() {
  const [chapter, setChapter] = useState("ComponentComposition");
  const [theme,setTheme] = useState('light')

  return (
      <ThemeContext.Provider value={{theme,setTheme}}>
      <div className='dark'>
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
