import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  return (
    <div
      className={isDarkTheme ? "main-container dark-theme" : "main-container"}
    >
      <button onClick={toggleTheme} style={{ margin: "10px" }}>
        {isDarkTheme ? "Светлая" : "Темная"} Тема
      </button>
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
