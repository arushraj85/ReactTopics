import React, { useState, useCallback, memo, useMemo } from "react";

const ChildComponent = memo(function ChildComponent({ onClick }) {
  console.log("ChildComponent is rendered");
  return (
    <>
      <button onClick={onClick}>Click me</button>
    </>
  );
});

export default function Memoization() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  },[count]);

    const value = useMemo(() => {
        console.log('calculating')
      return count2*50;
    }, [count2]);

  console.log("Parent is rendered");
  return (
    <div>
      {/* <p>Value: {value}</p> */}
      <p>Count2: {count2}</p>
      <p>Count: {count}</p>
      <p>{value}</p>

      <button onClick={() => setCount2(count2 + 1)}>Increment2</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={incrementCount} />
    </div>
  );
}
