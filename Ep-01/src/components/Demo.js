import React, { useState } from "react";
import "./demo.css";
import DemoClass from "./DemoClass";

const Demo = ({ contact, name, location }) => {
  const [count0, setCount0] = useState(0);
  const [count1, setCount1] = useState(1);
  // console.log("contact ", contact);
  // console.log("name ", name);
  // console.log("location ", location);

  return (
    <>
      <div className="user-card">
        <h1>Count: {count0}</h1>
        <h5>Count: {count1}</h5>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
      <DemoClass name={name} location={location} contact={contact} />
    </>
  );
};

export default Demo;
