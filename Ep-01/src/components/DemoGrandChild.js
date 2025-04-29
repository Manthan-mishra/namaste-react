import React from "react";

class DemoGrandChild extends React.Component {
  constructor(props) {
    super(props);
    console.log(`${props.name} constructor`);
  }

  componentDidMount() {
    console.log(`${this.props.name} componentDidMount`);
  }

  render() {
    console.log(`${this.props.name} render`);
    return <div>hello</div>;
  }
}

export default DemoGrandChild;
