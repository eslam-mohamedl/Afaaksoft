import React from 'react'
import { useTheme } from "@/contexts/ThemeContext";

function ButtonTheme() {
        const { theme, toggleTheme } = useTheme();
  return (
        <button
          onClick={toggleTheme}
          className="px-6 py-2 rounded-lg bg-light-secondary dark:bg-dark-secondary text-white  transition" >
          {theme === "dark" ? "🌙 " : "☀️ "}
        </button>

  )
}

export default ButtonTheme;