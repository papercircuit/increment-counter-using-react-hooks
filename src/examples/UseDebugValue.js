// useDebugValue is a hook that can be used to display additional debugging information about a custom hook in the React DevTools. In this example, we can use useDebugValue to display the current count value in the React DevTools as we increment the counter.

import React, { useState, useEffect, useDebugValue } from 'react';

// In this example, we define a custom hook useCounter that uses useState to manage the state of the counter and useDebugValue to display the current count value in the React DevTools. We define an effect using useEffect that increments the counter every second using setCount.

// We then use the useCounter custom hook in the Counter component to get the current count value and render it in a paragraph element within a div element. The count value will increment every second due to the effect we defined with useEffect, and the useDebugValue hook will display the current count value in the React DevTools.

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useDebugValue(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return count;
}

function UseDebugValueExample() {
  const count = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default UseDebugValueExample;

