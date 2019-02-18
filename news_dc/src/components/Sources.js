import React, { Component } from "react";
import Axios from "axios";

class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfSource: [], sourceID: "", title: [] };
    this.get_sources();
    this.change_state();
    // this.get_titles("abc-news");
  }

  get_sources() {
    const url =
      "https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=9e1cd567b583404ab26ca4d875e6b41a";
    Axios.get(url).then(response => {
      console.log("res", response);
      this.setState({
        listOfSource: response.data.sources,
        sourceID: "",
        visible: false
      });
    });
    console.log(this.state.listOfSource);
  }
  change_state() {
    this.setState({ listOfSource: ["hello"] });
  }

  render() {
    return <div>Hello</div>;
  }
}

export default Sources;
