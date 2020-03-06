import React, { Component } from "react";
import "./App.css";
import Formulaire from "./components/Formulaire";
//import { Input } from "antd";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Entreprise</h1>

        <Formulaire />
      </div>
    );
  }
}

export default App;
