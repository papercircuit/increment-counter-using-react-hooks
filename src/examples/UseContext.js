import React, { createContext, useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

// 

const CountContext = createContext();

function UseContextExample() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <BoxElement />
    </CountContext.Provider>
  );
}

function BoxElement() {
  const { count, setCount } = useContext(CountContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <Card variant="outlined"
      sx={{
        p: 2,
        m: 2,
      }}
    >

      <Typography variant='h6'>UseContext</Typography>
      <Typography variant="body1"
        sx={{
          mb: 2,
        }}
      >
        In this example, we create a CountContext using the createContext function and provide it with an object containing the count state variable and the setCount function to update the state.

        {'\n'}{'\n'}

       We then use useContext to access the count and setCount values in the Header component, and define a handleIncrement function to update the count using the setCount function. Finally, we render the count value and a button that triggers the handleIncrement function when clicked.
      </Typography>
      <Typography
        sx={{
          mb: 2,
        }}
      >Count: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleIncrement}>Increment</Button>
    </Card>
  );
}

export default UseContextExample;
