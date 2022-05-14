import React, { Component } from "react";

import "./App.css";
import CardList from "./Components/CardList";
import { robots } from "./Components/Robots";
import Search from "./Components/Search";

// function App() {
//   const state = {
//     robots: robots,
//     searchfield: "",
//   };

//   return (
//     <>
//       <div className="App">
//         <h1>Robo Friend!!</h1>
//         <Search />
//         <CardList robots={robots} />
//       </div>
//     </>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  render() {
    return (
      <>
        <div className="App">
          <h1>Robo Friend!!</h1>
          <Search />
          <CardList robots={robots} />
        </div>
      </>
    );
  }
}

export default App;
