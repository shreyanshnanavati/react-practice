import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../context/ThemeContext";
import { Outlet } from "react-router";

export default function MainLayout() {
  const [chapter, setChapter] = useState("ComponentComposition");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar selectedChapter={chapter} setChapter={setChapter} />
            <main className="flex-1 bg-gray-50 dark:bg-gray-950 p-6 text-gray-900 dark:text-gray-100">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
