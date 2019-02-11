import React, { Component } from "react";

// When there is a single render method and
// no event handlers,  or no helper method, or no state
// we can change this to stateless functional component
// instead of using class, we can use function
// this.props only works for class component
// for stateless functionla component, pass props as argument

const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
