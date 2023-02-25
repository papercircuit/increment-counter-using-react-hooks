import React, { useState } from 'react';

// In this example, we use the useState hook to manage the state of the count variable. We initialize it to 0 and update it using the setCount function, which is returned by useState. We also define a handleIncrement function that is called when the button is clicked, which updates the count by calling setCount.

function UseStateExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default UseStateExample;