import React, { Component } from "react";

class H2 extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div>
        <h2>(Sibling) Click counter :{this.props.clickCount}</h2>
        <button onClick={()=>{this.props.onReset()}}>reset</button>
      </div>
    );
  }
}

export default H2;
