import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
// cannot place hooks as conditionals
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // work outside the component, runs after every render
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hello");
  }, []);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
