import React, { Component } from "react";
import uuid from "uuid";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {}
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.name.value === "") {
      alert("Name is required.");
    } else {
      this.setState(
        {
          newContact: {
            id: uuid.v4(),
            name: this.refs.name.value,
            email: this.refs.email.value,
            phone: this.refs.phone.value,
            address: this.refs.address.value,
            city: this.refs.city.value,
            state: this.refs.state.value,
            zipcode: this.refs.zipcode.value
          }
        },
        () => {
          console.log(this.state.newContact);
        }
      );
    }
  }

  render() {
    let newData = this.state.newContact.map(item => {
      return (
        <li key={item.key} ref={item.key}>
          {item.value}
        </li>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label>
            <input type="text" ref="name" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" ref="email" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" ref="phone" />
          </div>
          <div>
            <label>Address</label>
            <input type="text" ref="address" />
          </div>
          <div>
            <label>City</label>
            <input type="text" ref="City" />
          </div>
          <div>
            <label>State</label>
            <input type="text" ref="state" />
          </div>
          <div>
            <label>Zipcode</label>
            <input type="text" ref="zipcode" />
          </div>
        </form>
        <div>{newData}</div>
      </div>
    );
  }
}

export default Contact;
