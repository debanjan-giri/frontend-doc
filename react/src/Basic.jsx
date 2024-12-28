import React from "react";
import "./myStyle.css";

export const Basic = () => {
  return (
    <>
      <HocApp />
    </>
  );
};

// 1
// component :
// A component is a piece of the UI that has its own logic and memory
// its a reusable function that returns a single Jsx element
// it start with capital letter,create diff between html tag & component
// component can be nested,it create tree like architecture in react
// component can be small as a button or large as a page
// same component can be used multiple times but act as independent
// reusable small components make code allways easier to maintain

function Button() {
  return <button>Click me</button>;
}

// 2
// react fragment:
// component can be nested inside another component
// it is used when we want to return multiple elements
// it is used when we dont want to add extra div in dom
// example: <></>,<div></div>,<Fragment></Fragment>,any tag

function Nested() {
  return (
    <>
      <Button />
      <Button />
    </>
  );
}

// Re-rendering Issues:
// The inner component gets re-created every time parent component re-renders
// Inner components are not reusable,against React's modular design principles

function BookList() {
  // bad practice
  const Book = () => {
    return <h1>C++ Book</h1>;
  };

  return (
    <>
      <Book />
      <Book />
    </>
  );
}

// 3
// props:
// props are used to pass data from parent component to child component
// one way data flow from parent to child or nested child like a tree
// props are immutable,perent props data can not be changed from child
// prop is object of key value pair, we can pass any type of data

// 1st level nested component
function ReadDetails(props) {
  // props are object, we can access data using dot notation
  // we can destructure props in function argument or using variable
  return (
    <div className="bg-success p-3 m-3">
      <h5>My Name is : {props.name}</h5>

      {/* 2nd level nested component */}
      <Age age={props.age} />
    </div>
  );
}

// 2nd level nested component
const Age = (props) => {
  return (
    <div className="bg-warning p-1">
      <h5>Age : {props.age}</h5>
    </div>
  );
};

// perent prop
// parent passing data to child component
// different component holding different data
function UserList() {
  let usersDetails = {
    name: "Tony",
    age: 30,
  };

  let usersDetails_2 = {
    name: "Dev",
  };

  return (
    <div className="bg-dark p-3 m-3 h-25 w-25">
      <h5>User List : </h5>
      <ReadDetails name="John" age="25" />
      <ReadDetails name="Tony" age="30" country="USA" />
      <ReadDetails name="Jack" age="35" location="New York" />

      <hr />
      {/* object passing */}
      <ReadDetails {...usersDetails} />
      <ReadDetails age="40" {...usersDetails_2} />
    </div>
  );
}

// 4
// default props:
// when parent component not pass any data to child component
function UserList_2() {
  return (
    <div>
      {/* default props */}
      <ReadDetails_2 />
      <ReadDetails_2 name="Tony" country="Canada" />
      <ReadDetails_2 name="Dev" country="India" location="Mumbai" />
    </div>
  );
}

function ReadDetails_2({
  name = "Stark",
  country = "USA",
  location = "New York",
}) {
  return (
    <div className="border p-2 m-2 w-25">
      <h1 className="fs-5 m-0">My Name is : {name}</h1>
      <p className="fs-6 m-0">Country : {country}</p>
      <p className="fs-6 m-0">Location : {location}</p>
    </div>
  );
}

// 5
// prop drilling:
// passing data from parent to child to nested child
// when data is needed by multiple nested child
// prop drilling is bad practice, it make code complex
// use context api or redux for state management

// perent data source
function A() {
  return (
    <div className="bg-dark p-3 m-3">
      <h1>Component A</h1>
      <B data="Click me" />
    </div>
  );
}

function B({ data }) {
  return (
    <div className="bg-success p-3 m-3">
      <button className="p-4">{<C data={data} />}</button>
    </div>
  );
}

function C(prop) {
  console.log(prop.data);
  return <div className="bg-warning">{prop.data}</div>;
}

// 6
// conditional rendering:
// null is best practice to render nothing
// <> </> , undefined, null, false , true
function ConditionReturn() {
  let condition = true;
  let type = "button";

  // if-else
  if (condition) {
    return <Button />;
  } else {
    return null;
  }

  // ternary
  return condition ? <h1>dev</h1> : <></>;

  // logical && operator
  return condition && undefined;

  // switch case
  switch (type) {
    case "button":
      return <Button />;
    case "h1Tag":
      return <h1>dev</h1>;
    case "redColor":
      return <p style={{ color: "red" }}>red color</p>;
    default:
      return false;
  }

  // array mapping
  return [1, 2, 3].map((item) => {
    return <Button />;
  });
}

// 7
// JSX:
// Jsx is a combination of html and javascript
// curly braces {} are used to write javascript code inside Jsx
// {} render one element at a time

function JsxExpression() {
  let name = "Tony";
  let element = <p>cat</p>;
  let component = <Button />;
  let imageData =
    "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg";

  // function
  function myFn() {
    return 99;
  }

  // component
  function MyTag() {
    return <h1>My Tag</h1>;
  }

  return (
    <>
      {/* data */}
      {"dev"}
      {4 + 4}
      {element}
      {component}

      <hr />

      {/* function */}
      {myFn()}
      {myFn() * 56}

      <hr />

      {/* component */}
      {<p>hello</p>}
      {MyTag()}
      {<MyTag />}

      <hr />

      {/* tag */}
      <h1>My name is: {name}</h1>
      <h1>My name is {"Tony"}</h1>

      <hr />

      {/* image */}
      <img src={imageData} />

      <hr />
      {/* null, undefined, false, true = render nothing */}
      {null}
      {undefined}
      {false}
      {true}
    </>
  );
}

// 8
// conditional Jsx rendering:
const Component = (data) => {
  return <h5>{data.n}</h5>;
};

function ConditionalJsx() {
  let condition = true;

  return (
    <>
      {/* ternary */}
      <h1>{condition ? "dev" : "tony"}</h1>
      {condition ? <Component n={1} /> : undefined}

      {/* and operator return last truthy value */}
      {condition && <h1>Hello</h1>}
      {true && condition && <Component n={2} />}
      {6 > 7 && <Component n={3} />}
      {<Component n={4} /> && <Component n={5} />}

      {/* or operator return first truthy value */}
      {true || <Component n={6} />}
      {false || <Component n={7} />}
      {<Component n={8} /> || <Component n={9} />}

      {/* array mapping */}
      {["A", "B", "C"].map((item, index) => {
        return item === "C" && <Component n={index} />;
      })}
    </>
  );
}

// 9
// css and conditional css:
// inline css: style attribute
// external css: css file

function Css() {
  const data = {
    color: "green",
    fontSize: "20px",
  };

  const imgData = {
    pic: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
    width: "200px",
    height: "200px",
  };

  const temperature = "Hot";

  return (
    <>
      {/* inline css */}
      <h1 style={{ color: "blue", fontSize: "20px" }}>cat</h1>
      <img
        src={imgData.pic}
        style={{ width: imgData.width, height: imgData.height }}
      />
      <h1 style={data}>devloper</h1>

      {/* external css */}
      <h1 className="myCss">1</h1>

      <hr />
      {/* conditional css */}
      <h1 className={true ? "myCss" : "myCss_2"}>2</h1>
      <h1 style={{ color: temperature === "Hot" && "red" }}>Weather</h1>

      <hr />
      {/* array mapping */}
      {["black", "green", "blue"].map((item, index) => {
        return (
          <h1 key={index} style={{ color: item }}>
            {item}
          </h1>
        );
      })}
    </>
  );
}

// advanced:

// 10
// special props:
// children: to access nested child component

function Wrapper({ children }) {
  return <div className="bg-dark">{children}</div>;
}

function NewApp() {
  return (
    <Wrapper>
      <h1>dev</h1>
      <h1>Hello, World!</h1>
      <Button />
    </Wrapper>
  );
}

// hoc: 11
// higher order component (HOC)
// is a function that takes a component and returns a new enhanced component
const PowerIncrement = (WrappedComponent) => {
  return function myFn(props) {
    return (
      <div className="bg-black p-3">
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// normal component
function TextColor({ color }) {
  return <h1 style={{ color: color }}>Color</h1>;
}

function HocApp() {
  const MutateComponent = PowerIncrement(TextColor);
  return (
    <div>
      <MutateComponent color="yellow" />
    </div>
  );
}

// 12
// Pure Component :
// only re-renders when its props or state actually change
const MyComponent = React.memo(({ text }) => {
  console.log("Rendered");
  return <h1>{text}</h1>;
});

function App() {
  return <MyComponent text="Hello, World!" />;
}



// stateless component: when component depends on prop data
// stateful component: when component has its own state data
