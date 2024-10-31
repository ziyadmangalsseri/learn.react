import React, { Component } from "react";
import ReactDOM from "react-dom";
import { jsx } from "react/jsx-runtime";

//  React Element

// const parent = React.createElement("div", {
//   id: "parent"
// },[ React.createElement(
//     "div",
//     {
//       id: "child",
//     },[
//     React.createElement("h1", {}, "hello iam h1 tag"),
//     React.createElement("h2",{},"hello iam h2 tag")
//     ]
//   ), React.createElement(
//     "div",
//     {
//       id: "child",
//     },[
//     React.createElement("h1", {}, "hello iam h1 tag"),
//     React.createElement("h2",{},"hello iam h2 tag")
//     ]
//   )]);





// React Element

// const heading = React.createElement(
//   "h1",
//   {
//     id: "headtag",
//     zzz: "yyyy",
//   },
//   "hello world"
// );






// JSX - html like or XML like synatx

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    this is jsx{" "}
  </h1>
);
console.log(jsxHeading);







// React Element

const heading = <h1 id="hading">This React Element</h1>;





const element = <span>This is Reacrt Element</span>
const Title = ()=> (
  <h1 id="title">
    {element}
    This is Titile 🚀
    </h1>
)


    // Component Composition
const HeadingComponent = () => (
  <div id="container" >
    {Title()}
    <Title></Title>
    <Title/>
  
  <h1 className="head2"> This React functional component </h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
