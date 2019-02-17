import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Project extends Component {
  constructor(prop) {
    super(prop);
  }

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem project={project} onDelete={this.deleteProject(this)} />
        );
      });
    }

    return <div>{projectItems}</div>;
  }
}

export default Project;
