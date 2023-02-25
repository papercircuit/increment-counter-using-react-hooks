import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

function UseStateExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <Card variant="outlined">
      <Typography variant = 'h6'>UseState</Typography>
      <Typography variant="body1">
        In this example, we use the useState hook to manage the state of the count variable. We initialize it to 0 and update it using the setCount function, which is returned by useState. We also define a handleIncrement function that is called when the button is clicked, which updates the count by calling setCount.
      </Typography>
      <Typography variant="h6">Count: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleIncrement}>Increment</Button>
    </Card>
  );
}

export default UseStateExample;
