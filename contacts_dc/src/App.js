import React, { Component } from "react";
import AppBar from "./components/AppBar";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Contact />
      </div>
    );
  }
}

export default App;
