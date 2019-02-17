import React, { Component } from "react";
import uuid from "uuid";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: {}
    };
  }

  // when I use static defaultProps, this will be props
  static defaultProps = {
    categories: ["Front-End", "Full-Stack", "React-Reduc"]
  };

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.title.value === "") {
      alert("Title is require");
    } else {
      this.setState(
        {
          newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        },
        () => {
          console.log(this.state.newProject);
          this.props.addProject(this.state.newProject);
        }
      );
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <br />
            <select ref="category">{categoryOptions}</select>
          </div>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default AddProject;
