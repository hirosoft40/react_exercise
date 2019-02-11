import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
// import Span from "@material-ui/core/Span";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleIncrement = c => {
    let increase = this.state.counter;
    increase++;
    this.setState({ counter: increase });
  };

  handleDecrease = e => {
    let decrease = this.state.counter;
    if (decrease > 0) decrease--;
    this.setState({ counter: decrease });
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.handleDecrease}
          variant="contained"
          size="small"
          color="primary"
          style={{ width: 10 }}
        >
          -
        </Button>
        <span style={{ width: 50 }}>{this.state.counter}</span>
        <Button
          onClick={this.handleIncrement}
          variant="contained"
          size="small"
          color="primary"
        >
          +
        </Button>
      </div>
    );
  }
}

export default App;
