import React, { useReducer } from 'react';

// In this example, we use the useReducer hook to manage the state of the count variable. We define a reducer function that takes a state and an action and returns a new state based on the action. We then use useReducer to initialize the state to { count: 0 } and to provide the dispatch function that we use to update the count by dispatching an action.

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default UseReducerExample;
