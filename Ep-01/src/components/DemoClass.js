import React from "react";
import "./demo.css";

class DemoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count0: 0,
      count1: 1,
    };
  }

  handleIncrease = () => {
    this.setState({
      count0: this.state.count0 + 1,
    });
  };

  render() {
    const { name, location, contact } = this.props;
    const { count0, count1 } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count0}</h1>
        <button onClick={this.handleIncrease}>click me to increse</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default DemoClass;
