import React, { Component } from "react";

class ProjectItem extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete(id){
    this.props.onDelete(id)
  }

  render() {
    return (
      <li>
        <strong style={{marginRight:4}}>{this.props.project.category} :</strong>
        {this.props.project.title}
        <a href="#" onClick={this.handleDelete.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
