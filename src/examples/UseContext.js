import React, { createContext, useContext, useState } from 'react';

// In this example, we create a CountContext using the createContext function and provide it with an object containing the count state variable and the setCount function to update the state.

// We then use useContext to access the count and setCount values in the Header component, and define a handleIncrement function to update the count using the setCount function. Finally, we render the count value and a button that triggers the handleIncrement function when clicked.

const CountContext = createContext();

function UseContextExample() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Header />
    </CountContext.Provider>
  );
}

function Header() {
  const { count, setCount } = useContext(CountContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <header>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </header>
  );
}

export default UseContextExample;
