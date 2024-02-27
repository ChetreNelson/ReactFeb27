import React, { useState } from "react";

const UseStateExample = (props) => {
  const [count, setCount] = useState(1);

  const addValue = () => {
    if (count < 15) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <p>helllo {props.name}</p>

      <p>Count is : {count}</p>
      <button onClick={addValue}>Increase </button>
    </div>
  );
};

export default UseStateExample;
