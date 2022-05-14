import React from "react";

import "./App.css";
import CardList from "./Components/CardList";
import { robots } from "./Components/Robots";

function App() {
  return (
    <div className="App">
      <CardList robots={robots} />
    </div>
  );
}

export default App;
