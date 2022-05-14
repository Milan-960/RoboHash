import React, { Component } from "react";

import CardList from "./Components/CardList";
import { robots } from "./Components/Robots";
import "./App.css";
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

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="App">
        <h1>RoboFriends</h1>
        <Search searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
