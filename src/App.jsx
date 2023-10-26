// src/App.jsx

import React from "react";
import "./App.css";
import { IsHomeProvider } from "./contexts/IsHomeContext";
import PageSelector from "./components/PageSelector/PageSelector";

function App() {
  return (
    <IsHomeProvider>
      <PageSelector />
    </IsHomeProvider>
  );
}

export default App;
