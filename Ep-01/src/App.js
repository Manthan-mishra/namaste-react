import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header/Header.js";
import { Outlet } from "react-router-dom";

const jsxHeading = <div>This is JSX</div>;
console.log(jsxHeading);

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
