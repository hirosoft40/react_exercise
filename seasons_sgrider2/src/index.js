import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }

  // state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));


class Clock extends React.Component {
  constructor(props){
      super(props);
      this.state = {time:new Date().toLocaleTimeString()}
  }
  
  componentDidMount() {
      setInterval(() => this.setState({time: new Date().toLocaleTimeString()}), 1000)
  }
  
  render() {
      return (
          <div className="time">
              The time is: {this.state.time}
          </div>
      );
  }
}