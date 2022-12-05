import { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Use state demo: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={() => decrementCount()}>Decrement</button>
    </div>
  );
}

export default UseStateDemo;
