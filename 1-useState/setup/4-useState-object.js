import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random msg",
  });
  console.log(person);

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random msg");

  const changeMessage = () => {
    // problem: wipes the data :(
    // solution: use the spread operator

    //setPerson({ ...person, message: "hello world" });

    setMessage("hello world");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change MSG
      </button>
    </>
  );
};

export default UseStateObject;
