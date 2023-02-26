import React, { useReducer } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

// 

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
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2,
      }}
    >
      <Typography variant='h6'
        sx={{
          mb: 2,
        }}
      >UseReducer</Typography>
      <Typography variant="body1"
        sx={{
          mb: 2,
        }}
      >
        In this example, we use the useReducer hook to manage the state of the count variable. We define a reducer function that takes a state and an action and returns a new state based on the action. We then use useReducer to initialize the state to

        count: 0
        and to provide the dispatch function that we use to update the count by dispatching an action.
      </Typography>
      <Typography>Count: {state.count}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleIncrement}>Increment</Button>
    </Card>
  );
}

export default UseReducerExample;
