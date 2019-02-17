import React, { Component } from "react";
import H1 from "./h1";
import H2 from "./h2";
import H3 from "./h3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      click: 0
    };
  }
  updateClickCount() {
    this.setState({ click: this.state.click+1 });
  }
  reset(){
    this.setState({click:0})
  }

  render() {
    return (
      <div>
        <H1 />
        <H2 clickCount={this.state.click} onReset={this.reset.bind(this)}/>
        <H3 onClickProp={this.updateClickCount.bind(this)} />
      </div>
    );
  }
}

export default App;
