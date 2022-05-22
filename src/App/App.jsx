import React from "react";
import ScreensRoot from "../Component/Root";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../Styling/material-themes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ScreensRoot />
    </div>
  );
};

export default App;
