/**
 *
 *
 *
 *
 *
 *
 *
 *
 */

const parent = React.createElement("div", {
  id: "parent"
},[ React.createElement(
    "div",
    {
      id: "child",
    },[
    React.createElement("h1", {}, "hello iam h1 tag"),
    React.createElement("h2",{},"hello iam h2 tag")
    ]
  ), React.createElement(
    "div",
    {
      id: "child",
    },[
    React.createElement("h1", {}, "hello iam h1 tag"),
    React.createElement("h2",{},"hello iam h2 tag")
    ]
  )]);

const heading = React.createElement(
  "h1",
  {
    id: "headtag",
    zzz: "yyyy",
  },
  "hello world"
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
