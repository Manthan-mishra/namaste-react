// ****************************** making single element ******************************

// const element = React.createElement("p", { id: "ele" }, "hello guys");
// console.log(element);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

// ****************************** make complex structure *******************

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "grandChild" }, "Hi, There!!"),
//     React.createElement("p", { id: "grandChildSibling" }, "Myself Manthan!!"),
//   ])
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ****************************** make complex structure with sibling *******************

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "grandChild" }, "Hi, There!!"),
//     React.createElement("p", { id: "grandChildSibling" }, "Myself Manthan!!"),
//     React.createElement("p", { id: "grandChildSibling" }, "Myself Manthan!!"),
//     React.createElement("p", { id: "grandChildSibling" }, "Myself Manthan!!"),
//     React.createElement("p", { id: "grandChildSibling" }, "Myself Manthan!!"),
//     React.createElement("p", { id: "grandChildSibling" }, "Myself Manthan!!")
//   )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);




// ****************************** more complex structure with sibling *******************

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "childSibling1" }, "Hi, there1"),
    React.createElement("p", { id: "childSibling11" }, "Myself Manthan1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", { id: "childSibling2" }, "Hi, there2"),
    React.createElement("p", { id: "childSibling21" }, "Myself Manthan2")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);