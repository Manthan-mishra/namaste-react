import React from "react";
import DemoGrandChild from "./DemoGrandChild";

class DemoChild extends React.Component {
  constructor(props) {
    super(props);
    console.log(`${props.name} constructor`);
  }

  componentDidMount() {
    console.log(`${this.props.name} componentDidMount`);
  }

  render() {
    console.log(`${this.props.name} render`);
    return (
      <div>
        <DemoGrandChild name={`${this.props.name} GrandChild1`} />
        <DemoGrandChild name={`${this.props.name} GrandChild2`} />
      </div>
    );
  }
}

export default DemoChild;
