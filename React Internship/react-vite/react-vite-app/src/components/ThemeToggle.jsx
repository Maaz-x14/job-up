import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.getElementById('root');   
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);   

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-800 dark:bg-gray-700 text-sm px-3 py-1 rounded"
    >
      {darkMode ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
