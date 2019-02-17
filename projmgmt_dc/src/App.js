import React, { Component } from "react";
import Project from "./components/Project";
import AddProject from "./AddProject";
import uuid from "uuid";

class App extends Component {
  constructor() {
    super();
  }
  //this will automatically executed when rendered
  componentWillMount() {
    this.state = {
      projects: [
        { id: uuid.v4(), title: "Dating App", category: "Front-End" },
        { id: uuid.v4(), title: "School CRM", category: "Full-Stack" },
        { id: uuid.v4(), title: "ECommerce", category: "React-Redux" }
      ]
    };
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }
  handleDelete(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    console.log(index);
    projects.splice(index, 1);
    this.setState = {
      projects: projects
    };
  }

  render() {
    return (
      <div>
        <Project
          projects={this.state.projects}
          onDelete={this.handleDelete.bind(this)}
        />
        <AddProject addProject={this.handleAddProject.bind(this)} />
      </div>
    );
  }
}

export default App;
