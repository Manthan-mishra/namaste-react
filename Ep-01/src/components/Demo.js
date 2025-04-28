import React, { useState } from "react";
import "./demo.css";
import DemoClass from "./DemoClass";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count0: 0,
      count1: 1,
    };
  }

  handleInc = () => {
    this.setState({
      count0: this.state.count0 + 1,
      count1: this.state.count1 + 1,
    });
  };

  render() {
    const { count0, count1 } = this.state;
    const { name, location, contact } = this.props;
    return (
      <>
        <div className="user-card">
          <h1>Count: {count0}</h1>
          <h5>Count: {count1}</h5>
          <button onClick={this.handleInc}>Click to increase</button>
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: {contact}</h4>
        </div>
        <DemoClass name={name} location={location} contact={contact} />
      </>
    );
  }
}

export default Demo;
