import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

// In this example, we use the useEffect hook to update the count state variable every second. We also define a handleIncrement function that is called when the button is clicked, which updates the count by calling setCount.

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <Card sx={{ width: '100%' }}
      variant="outlined"
      >
      <Typography variant = 'h6'>UseEffect</Typography>
      <Typography variant="body1">
        In this example, we use the useEffect hook to update the count state variable every second. We also define a handleIncrement function that is called when the button is clicked, which updates the count by calling setCount.
      </Typography>
      <Typography>Count: {count}</Typography>
    </Card>
  );
}

export default UseEffectExample;
